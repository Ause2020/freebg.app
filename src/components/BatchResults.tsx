import { useState } from 'react'
import { AlertCircle, Check, Clock, Download, Loader2, Paintbrush, Trash2 } from 'lucide-react'
import { useI18n } from '../i18n'
import { ExportOptions, type BackgroundMode } from './ExportOptions'
import { MagicEraser } from './MagicEraser'
import { exportImage } from '../lib/imageExport'
import { downloadZip, outputName, triggerDownload } from '../lib/download'
import type { ExportFormat } from '../lib/constants'
import type { Job } from '../hooks/useBackgroundRemover'

export type BatchResultsProps = {
  jobs: Job[]
  onRemove: (id: string) => void
  onRefine?: (id: string, blob: Blob) => void
  disabled?: boolean
}

export function BatchResults({
  jobs,
  onRemove,
  onRefine,
  disabled = false,
}: BatchResultsProps) {
  const { t } = useI18n()
  const [mode, setMode] = useState<BackgroundMode>('transparent')
  const [customColor, setCustomColor] = useState('#ffffff')
  const [format, setFormat] = useState<ExportFormat>('png')
  const [zipping, setZipping] = useState(false)
  const [refiningId, setRefiningId] = useState<string | null>(null)
  const refiningJob = jobs.find((job) => job.id === refiningId) ?? null

  const background =
    mode === 'white' ? '#ffffff' : mode === 'custom' ? customColor : null

  const done = jobs.filter((job) => job.status === 'done' && job.resultBlob)

  const exportOne = async (job: Job) => {
    if (!job.resultBlob) return
    const blob = await exportImage(job.resultBlob, { background, format })
    triggerDownload(blob, outputName(job.file.name, format))
  }

  const exportAll = async () => {
    setZipping(true)
    try {
      const entries = await Promise.all(
        done.map(async (job) => ({
          name: outputName(job.file.name, format),
          blob: await exportImage(job.resultBlob as Blob, { background, format }),
        })),
      )
      await downloadZip(entries)
    } finally {
      setZipping(false)
    }
  }

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="group relative overflow-hidden rounded-xl border-2 border-ink/10 bg-white dark:border-white/10 dark:bg-[#15151d]"
          >
            <div className="bg-checker relative aspect-square">
              <img
                src={job.resultUrl ?? job.previewUrl}
                alt={job.file.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain"
              />

              {job.status === 'processing' && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-black/60">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
                </div>
              )}

              {job.status === 'done' && onRefine && (
                <button
                  type="button"
                  onClick={() => setRefiningId(job.id)}
                  aria-label={`${t.tool.refine}: ${job.file.name}`}
                  className="absolute right-1.5 bottom-1.5 rounded-lg border-2 border-ink bg-accent p-1.5 text-ink opacity-0 shadow-[2px_2px_0_0_var(--color-ink)] transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                >
                  <Paintbrush className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 border-t-2 border-ink/10 px-2 py-1.5 dark:border-white/10">
              {job.status === 'done' && (
                <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
              )}
              {job.status === 'queued' && (
                <Clock className="h-3.5 w-3.5 shrink-0 text-ink/30 dark:text-white/30" aria-hidden="true" />
              )}
              {job.status === 'error' && (
                <AlertCircle className="h-3.5 w-3.5 shrink-0 text-red-500" aria-hidden="true" />
              )}
              <span className="min-w-0 flex-1 truncate text-xs font-medium text-ink/70 dark:text-white/60">
                {job.status === 'error' ? t.tool.failed : job.file.name}
              </span>

              {job.status === 'done' && (
                <button
                  type="button"
                  onClick={() => void exportOne(job)}
                  aria-label={`${t.tool.download} ${job.file.name}`}
                  className="rounded p-1 text-ink/40 transition hover:bg-ink/5 hover:text-primary dark:text-white/40 dark:hover:bg-white/10"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              )}

              <button
                type="button"
                onClick={() => onRemove(job.id)}
                disabled={disabled}
                aria-label={`${t.tool.removeFromList}: ${job.file.name}`}
                className="rounded p-1 text-ink/40 transition hover:bg-ink/5 hover:text-red-600 disabled:opacity-40 dark:text-white/40 dark:hover:bg-white/10"
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {done.length > 0 && (
        <>
          <ExportOptions
            mode={mode}
            customColor={customColor}
            format={format}
            onModeChange={setMode}
            onColorChange={setCustomColor}
            onFormatChange={setFormat}
            disabled={zipping}
          />

          <button
            type="button"
            onClick={() => void exportAll()}
            disabled={zipping}
            className="btn btn-primary"
          >
            {zipping ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Download className="h-4 w-4" aria-hidden="true" />
            )}
            {t.tool.batchDownloadZip} ({done.length})
          </button>
        </>
      )}

      {refiningJob && refiningJob.resultBlob && onRefine && (
        <MagicEraser
          originalUrl={refiningJob.previewUrl}
          resultBlob={refiningJob.resultBlob}
          onApply={(blob) => onRefine(refiningJob.id, blob)}
          onClose={() => setRefiningId(null)}
        />
      )}
    </div>
  )
}

export default BatchResults
