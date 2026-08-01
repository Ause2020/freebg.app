import { useI18n } from '../i18n'
import type { ExportFormat } from '../lib/constants'

export type BackgroundMode = 'transparent' | 'white' | 'custom'

export type ExportOptionsProps = {
  mode: BackgroundMode
  customColor: string
  format: ExportFormat
  onModeChange: (mode: BackgroundMode) => void
  onColorChange: (color: string) => void
  onFormatChange: (format: ExportFormat) => void
  disabled?: boolean
}

const FORMATS: ExportFormat[] = ['png', 'jpeg', 'webp']

const FORMAT_LABEL: Record<ExportFormat, string> = {
  png: 'PNG',
  jpeg: 'JPG',
  webp: 'WEBP',
}

function OptionButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        'rounded-lg border-2 px-3 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0a0e]',
        active
          ? 'border-ink bg-accent text-ink dark:border-white/40'
          : 'border-ink/15 bg-white text-ink/60 hover:border-ink/30 dark:border-white/15 dark:bg-white/5 dark:text-white/60 dark:hover:border-white/30',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export function ExportOptions({
  mode,
  customColor,
  format,
  onModeChange,
  onColorChange,
  onFormatChange,
  disabled = false,
}: ExportOptionsProps) {
  const { t } = useI18n()

  const modes: { id: BackgroundMode; label: string }[] = [
    { id: 'transparent', label: t.tool.transparent },
    { id: 'white', label: t.tool.white },
    { id: 'custom', label: t.tool.customColor },
  ]

  return (
    <div
      className={`grid w-full max-w-xl gap-4 sm:grid-cols-2 ${disabled ? 'pointer-events-none opacity-60' : ''}`}
    >
      <fieldset>
        <legend className="eyebrow mb-2">{t.tool.background}</legend>
        <div className="flex flex-wrap gap-2">
          {modes.map((item) => (
            <OptionButton
              key={item.id}
              active={mode === item.id}
              onClick={() => onModeChange(item.id)}
            >
              {item.label}
            </OptionButton>
          ))}
          {mode === 'custom' && (
            <label className="inline-flex items-center gap-2 rounded-lg border-2 border-ink/15 bg-white px-3 py-1.5 text-sm text-ink/70 dark:border-white/15 dark:bg-white/5 dark:text-white/70">
              <span className="sr-only">{t.tool.customColor}</span>
              <input
                type="color"
                value={customColor}
                onChange={(event) => onColorChange(event.target.value)}
                className="h-7 w-10 cursor-pointer rounded border-0 bg-transparent p-0"
              />
              <span className="font-mono text-xs uppercase">{customColor}</span>
            </label>
          )}
        </div>
      </fieldset>

      <fieldset>
        <legend className="eyebrow mb-2">{t.tool.format}</legend>
        <div className="flex flex-wrap gap-2">
          {FORMATS.map((item) => (
            <OptionButton
              key={item}
              active={format === item}
              onClick={() => onFormatChange(item)}
            >
              {FORMAT_LABEL[item]}
            </OptionButton>
          ))}
        </div>
        {format === 'jpeg' && mode === 'transparent' && (
          <p className="mt-2 text-xs font-medium text-amber-600 dark:text-amber-400">
            JPG → {t.tool.white}
          </p>
        )}
      </fieldset>
    </div>
  )
}

export default ExportOptions
