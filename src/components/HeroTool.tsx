import { useCallback, useEffect, useState } from 'react'
import { AlertCircle, Sparkles } from 'lucide-react'
import { DropZone } from './DropZone'
import { ProcessingOverlay } from './ProcessingOverlay'
import { ResultView } from './ResultView'
import { BatchResults } from './BatchResults'
import { useBackgroundRemover } from '../hooks/useBackgroundRemover'
import { usePasteImage } from '../hooks/usePasteImage'
import { useI18n } from '../i18n'
import { formatFileSize } from '../lib/constants'

const SAMPLES = [
  {
    path: '/samples/portrait.jpg',
    labelKey: 'samplePortrait' as const,
    altKey: 'samplePortraitAlt' as const,
  },
  {
    path: '/samples/product.jpg',
    labelKey: 'sampleProduct' as const,
    altKey: 'sampleProductAlt' as const,
  },
]

export function HeroTool() {
  const { t } = useI18n()
  const {
    jobs,
    status,
    percent,
    phase,
    errorCode,
    completedCount,
    addFiles,
    removeJob,
    processAll,
    cancel,
    reset,
    preload,
    updateResult,
  } = useBackgroundRemover()

  const [loadingSample, setLoadingSample] = useState(false)

  const isBusy = status === 'loading-model' || status === 'processing'

  usePasteImage(addFiles, !isBusy)

  // Warm the model during idle time so the first run feels instant.
  useEffect(() => {
    const warm = () => {
      void preload()
    }
    const idleId =
      typeof window !== 'undefined' && 'requestIdleCallback' in window
        ? window.requestIdleCallback(warm, { timeout: 4000 })
        : null
    const timeoutId = idleId === null ? window.setTimeout(warm, 2000) : null

    return () => {
      if (idleId !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId !== null) window.clearTimeout(timeoutId)
    }
  }, [preload])

  const handleFiles = useCallback(
    (files: File[]) => {
      addFiles(files)
      void preload()
    },
    [addFiles, preload],
  )

  const loadSample = async (path: string) => {
    setLoadingSample(true)
    try {
      const response = await fetch(path)
      const blob = await response.blob()
      const name = path.split('/').pop() ?? 'sample.jpg'
      handleFiles([new File([blob], name, { type: blob.type || 'image/jpeg' })])
    } catch {
      // Ignore — the sample is a convenience, not a required path.
    } finally {
      setLoadingSample(false)
    }
  }

  const errorMessage = errorCode ? t.errors[errorCode] : null
  const isBatch = jobs.length > 1
  const single = jobs[0]

  if (jobs.length === 0) {
    return (
      <div className="animate-fade-up flex w-full max-w-2xl flex-col items-center">
        <DropZone onFiles={handleFiles} />

        <div className="mt-4 flex flex-col items-center gap-3">
          <span className="text-sm text-ink/50 dark:text-white/50">
            {t.tool.orTrySample}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SAMPLES.map((sample) => (
              <button
                key={sample.path}
                type="button"
                disabled={loadingSample}
                onClick={() => void loadSample(sample.path)}
                className="group flex flex-col items-center gap-1.5 rounded-xl border-2 border-ink/10 bg-white p-2 text-xs font-bold text-ink transition hover:-translate-y-0.5 hover:border-primary dark:border-white/15 dark:bg-[#14141c] dark:text-white dark:hover:border-primary-light"
                aria-label={t.tool[sample.labelKey]}
              >
                <img
                  src={sample.path}
                  alt={t.tool[sample.altKey]}
                  width={72}
                  height={72}
                  loading="lazy"
                  className="h-[72px] w-[72px] rounded-lg object-cover"
                />
                <span className="text-primary dark:text-primary-light">
                  {t.tool[sample.labelKey]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Batch flow
  if (isBatch) {
    return (
      <div className="animate-fade-up relative flex w-full max-w-3xl flex-col items-center gap-5">
        <div className="panel relative w-full p-4">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-sm font-black text-ink dark:text-white">
              {t.tool.batchTitle} ({jobs.length})
            </h2>
            <p className="text-xs text-ink/50 dark:text-white/50">
              {t.tool.batchHint}
            </p>
          </div>

          <BatchResults
            jobs={jobs}
            onRemove={removeJob}
            onRefine={updateResult}
            disabled={isBusy}
          />

          {isBusy && (
            <ProcessingOverlay
              percent={percent}
              phase={phase}
              loadingModel={status === 'loading-model'}
              queueLabel={
                status === 'processing'
                  ? t.tool.batchProcessing(completedCount + 1, jobs.length)
                  : null
              }
              onCancel={cancel}
            />
          )}
        </div>

        {errorMessage && (
          <p
            role="alert"
            className="flex items-start gap-2 rounded-lg border-2 border-red-300 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 dark:border-red-500/40 dark:bg-red-950/40 dark:text-red-300"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {errorMessage}
          </p>
        )}

        <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={() => void processAll()}
            disabled={isBusy || status === 'done'}
            className="btn btn-primary"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {t.tool.remove}
          </button>
          <button
            type="button"
            onClick={reset}
            disabled={isBusy}
            className="btn btn-outline"
          >
            {t.tool.processAnother}
          </button>
        </div>
      </div>
    )
  }

  // Single-image success
  if (single?.status === 'done' && single.resultBlob && single.resultUrl) {
    return (
      <div className="animate-fade-up w-full max-w-3xl">
        <ResultView
          originalUrl={single.previewUrl}
          resultBlob={single.resultBlob}
          resultUrl={single.resultUrl}
          fileName={single.file.name}
          onProcessAnother={reset}
          onRefine={(blob) => updateResult(single.id, blob)}
        />
      </div>
    )
  }

  // Single-image preview / processing / error
  return (
    <div className="animate-fade-up relative w-full max-w-2xl">
      <div className="panel relative overflow-hidden">
        <div className="bg-checker">
          <img
            src={single.previewUrl}
            alt={single.file.name}
            className="mx-auto max-h-[280px] w-full object-contain p-3 sm:max-h-[420px] sm:p-4"
          />
        </div>

        <div className="flex flex-col items-center gap-3 border-t-2 border-ink/10 px-4 py-5 dark:border-white/10">
          <div className="w-full text-center">
            <p className="mx-auto max-w-full truncate text-sm font-bold text-ink dark:text-white">
              {single.file.name}
            </p>
            <p className="font-mono text-xs text-ink/50 dark:text-white/50">
              {formatFileSize(single.file.size)}
            </p>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="animate-fade-in flex w-full max-w-md items-start gap-2 rounded-lg border-2 border-red-300 bg-red-50 px-3 py-2 text-left text-sm font-medium text-red-700 dark:border-red-500/40 dark:bg-red-950/40 dark:text-red-300"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => void processAll()}
              disabled={isBusy}
              aria-busy={isBusy}
              className="btn btn-primary"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {single.status === 'error' ? t.tool.tryAgain : t.tool.remove}
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={isBusy}
              className="btn btn-outline"
            >
              {t.tool.chooseAnother}
            </button>
          </div>
        </div>

        {isBusy && (
          <ProcessingOverlay
            percent={percent}
            phase={phase}
            loadingModel={status === 'loading-model'}
            onCancel={cancel}
          />
        )}
      </div>
    </div>
  )
}

export default HeroTool
