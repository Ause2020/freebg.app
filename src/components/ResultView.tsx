import { useEffect, useMemo, useRef, useState } from 'react'
import { Download, Loader2, Paintbrush, RefreshCw } from 'lucide-react'
import { BeforeAfterSlider } from './BeforeAfterSlider'
import { ExportOptions, type BackgroundMode } from './ExportOptions'
import { MagicEraser } from './MagicEraser'
import { useI18n } from '../i18n'
import { exportImage, readImageSize, type ImageSize } from '../lib/imageExport'
import { outputName, triggerDownload } from '../lib/download'
import { formatFileSize, type ExportFormat } from '../lib/constants'

export type ResultViewProps = {
  originalUrl: string
  resultBlob: Blob
  resultUrl: string
  fileName: string
  onProcessAnother: () => void
  onRefine?: (blob: Blob) => void
}

export function ResultView({
  originalUrl,
  resultBlob,
  resultUrl,
  fileName,
  onProcessAnother,
  onRefine,
}: ResultViewProps) {
  const { t } = useI18n()
  const [mode, setMode] = useState<BackgroundMode>('transparent')
  const [customColor, setCustomColor] = useState('#ffffff')
  const [format, setFormat] = useState<ExportFormat>('png')
  const [size, setSize] = useState<ImageSize | null>(null)
  const [preview, setPreview] = useState({ url: resultUrl, bytes: resultBlob.size })
  const [busy, setBusy] = useState(false)
  const [showEraser, setShowEraser] = useState(false)

  const exportedRef = useRef<Blob>(resultBlob)

  const background = useMemo(() => {
    if (mode === 'white') return '#ffffff'
    if (mode === 'custom') return customColor
    return null
  }, [mode, customColor])

  useEffect(() => {
    let active = true
    readImageSize(resultBlob)
      .then((value) => {
        if (active) setSize(value)
      })
      .catch(() => undefined)
    return () => {
      active = false
    }
  }, [resultBlob])

  useEffect(() => {
    let active = true
    let createdUrl: string | null = null

    const run = async () => {
      if (background === null && format === 'png') {
        exportedRef.current = resultBlob
        setPreview({ url: resultUrl, bytes: resultBlob.size })
        return
      }

      setBusy(true)
      try {
        const blob = await exportImage(resultBlob, { background, format })
        if (!active) return
        exportedRef.current = blob
        createdUrl = URL.createObjectURL(blob)
        setPreview({ url: createdUrl, bytes: blob.size })
      } catch {
        if (!active) return
        exportedRef.current = resultBlob
        setPreview({ url: resultUrl, bytes: resultBlob.size })
      } finally {
        if (active) setBusy(false)
      }
    }

    void run()

    return () => {
      active = false
      if (createdUrl) URL.revokeObjectURL(createdUrl)
    }
  }, [background, format, resultBlob, resultUrl])

  return (
    <div className="flex w-full flex-col items-center gap-5 sm:gap-6">
      <BeforeAfterSlider beforeSrc={originalUrl} afterSrc={preview.url} />

      <div className="px-2 text-center">
        {size && (
          <p className="font-mono text-sm font-semibold text-ink dark:text-white">
            {size.width} × {size.height}px · {t.tool.fullResolution} ·{' '}
            {formatFileSize(preview.bytes)}
          </p>
        )}
        <p className="mt-1 text-xs text-ink/50 dark:text-white/50">
          {t.tool.dragToCompare}
        </p>
      </div>

      {onRefine && (
        <button
          type="button"
          onClick={() => setShowEraser(true)}
          className="btn btn-outline btn-sm"
        >
          <Paintbrush className="h-4 w-4" aria-hidden="true" />
          {t.tool.refine}
        </button>
      )}

      <ExportOptions
        mode={mode}
        customColor={customColor}
        format={format}
        onModeChange={setMode}
        onColorChange={setCustomColor}
        onFormatChange={setFormat}
        disabled={busy}
      />

      <div className="flex w-full flex-col items-stretch justify-center gap-3 px-1 sm:w-auto sm:flex-row sm:items-center">
        <button
          type="button"
          disabled={busy}
          onClick={() =>
            triggerDownload(exportedRef.current, outputName(fileName, format))
          }
          className="btn btn-primary"
        >
          {busy ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Download className="h-4 w-4" aria-hidden="true" />
          )}
          {t.tool.download}
        </button>
        <button type="button" onClick={onProcessAnother} className="btn btn-outline">
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          {t.tool.processAnother}
        </button>
      </div>

      {showEraser && onRefine && (
        <MagicEraser
          originalUrl={originalUrl}
          resultBlob={resultBlob}
          onApply={onRefine}
          onClose={() => setShowEraser(false)}
        />
      )}
    </div>
  )
}

export default ResultView
