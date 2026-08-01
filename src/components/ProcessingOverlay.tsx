import { Loader2, X } from 'lucide-react'
import { useI18n } from '../i18n'
import type { ProgressPhase } from '../lib/backgroundRemoval'

export type ProcessingOverlayProps = {
  percent: number
  phase: ProgressPhase
  loadingModel: boolean
  queueLabel?: string | null
  onCancel: () => void
}

export function ProcessingOverlay({
  percent,
  phase,
  loadingModel,
  queueLabel,
  onCancel,
}: ProcessingOverlayProps) {
  const { t } = useI18n()

  const phaseLabel: Record<ProgressPhase, string> = {
    idle: t.tool.preparing,
    runtime: t.tool.downloadingRuntime,
    model: t.tool.downloadingModel,
    assets: t.tool.downloadingAssets,
    preparing: t.tool.preparing,
    processing: t.tool.processing,
    done: t.tool.done,
  }

  const title = loadingModel ? t.tool.loadingModel : t.tool.processing

  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-white/95 px-6 backdrop-blur-sm dark:bg-[#0d0d13]/95"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <Loader2
        className="mb-4 h-10 w-10 animate-spin text-primary"
        aria-hidden="true"
      />
      <p className="text-base font-black text-ink dark:text-white">{title}</p>
      <p className="mt-1 text-sm text-ink/50 dark:text-white/50">
        {queueLabel ?? phaseLabel[phase]}
      </p>

      <div className="mt-5 w-full max-w-xs">
        <div
          className="h-2.5 overflow-hidden rounded-full border-2 border-ink/10 bg-ink/5 dark:border-white/10 dark:bg-white/5"
          role="progressbar"
          aria-valuenow={Math.round(percent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={title}
        >
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
            style={{ width: `${Math.max(4, Math.min(100, percent))}%` }}
          />
        </div>
        <p className="mt-2 text-center font-mono text-sm font-bold tabular-nums text-primary dark:text-primary-light">
          {Math.round(percent)}%
        </p>
      </div>

      {loadingModel && (
        <p className="mt-3 max-w-xs text-center text-xs text-ink/40 dark:text-white/40">
          ~40MB · {t.footer.heading}
        </p>
      )}

      <button
        type="button"
        onClick={onCancel}
        className="mt-5 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink dark:text-white/50 dark:hover:bg-white/10 dark:hover:text-white"
      >
        <X className="h-4 w-4" aria-hidden="true" />
        {t.tool.cancel}
      </button>
    </div>
  )
}

export default ProcessingOverlay
