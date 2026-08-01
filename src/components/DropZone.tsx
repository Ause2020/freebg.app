import {
  useCallback,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type KeyboardEvent,
} from 'react'
import { ImagePlus } from 'lucide-react'
import { useI18n } from '../i18n'
import {
  ACCEPT_ATTRIBUTE,
  ACCEPTED_MIME,
  HEIC_PATTERN,
  IMAGE_EXTENSION_PATTERN,
  MAX_FILE_SIZE_BYTES,
  MAX_FILE_SIZE_MB,
  formatFileSize,
} from '../lib/constants'

export type DropZoneProps = {
  onFiles: (files: File[]) => void
  disabled?: boolean
  compact?: boolean
  className?: string
}

function isAcceptedImage(file: File): boolean {
  if ((ACCEPTED_MIME as readonly string[]).includes(file.type)) return true
  // Some browsers report an empty MIME type; fall back to the extension.
  return file.type === '' && IMAGE_EXTENSION_PATTERN.test(file.name)
}

export function DropZone({
  onFiles,
  disabled = false,
  compact = false,
  className = '',
}: DropZoneProps) {
  const { t } = useI18n()
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFiles = useCallback(
    (fileList: FileList | null | undefined) => {
      if (!fileList || disabled) return

      const incoming = Array.from(fileList)
      const accepted: File[] = []
      let message: string | null = null

      for (const file of incoming) {
        if (HEIC_PATTERN.test(file.name) || file.type.includes('hei')) {
          message = t.tool.heicUnsupported
          continue
        }
        if (!isAcceptedImage(file)) {
          message = t.tool.invalidType
          continue
        }
        if (file.size > MAX_FILE_SIZE_BYTES) {
          message = t.tool.fileTooLarge(
            formatFileSize(file.size),
            `${MAX_FILE_SIZE_MB}MB`,
          )
          continue
        }
        accepted.push(file)
      }

      setError(message)
      if (accepted.length > 0) onFiles(accepted)
    },
    [disabled, onFiles, t],
  )

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (!disabled) setIsDragging(true)
  }

  const onDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
  }

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
    handleFiles(event.dataTransfer.files)
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files)
    event.target.value = ''
  }

  const openPicker = () => {
    if (!disabled) inputRef.current?.click()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openPicker()
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-describedby={error ? `${inputId}-error` : undefined}
        aria-label={`${t.tool.dropTitle} — ${t.tool.dropBrowse}`}
        onClick={openPicker}
        onKeyDown={onKeyDown}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={[
          'relative flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed text-center transition-all duration-200 outline-none',
          compact ? 'px-4 py-8' : 'px-6 py-14 sm:py-20',
          'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0a0e]',
          disabled
            ? 'cursor-not-allowed opacity-60'
            : 'hover:border-ink hover:bg-white dark:hover:border-white/60 dark:hover:bg-white/5',
          isDragging
            ? 'border-primary bg-primary/5 shadow-[6px_6px_0_0_var(--color-ink)] dark:shadow-[6px_6px_0_0_var(--color-accent)]'
            : 'border-ink/25 bg-white/80 dark:border-white/25 dark:bg-white/[0.03]',
          error ? 'border-red-400 dark:border-red-500/60' : '',
        ].join(' ')}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept={ACCEPT_ATTRIBUTE}
          multiple
          className="sr-only"
          disabled={disabled}
          onChange={onChange}
        />

        <div
          className={[
            'mb-4 flex rotate-3 items-center justify-center rounded-xl border-2 border-ink transition-colors dark:border-white/30',
            compact ? 'h-10 w-10' : 'h-14 w-14',
            isDragging ? 'bg-accent text-ink' : 'bg-primary text-white',
          ].join(' ')}
        >
          <ImagePlus className={compact ? 'h-5 w-5' : 'h-7 w-7'} aria-hidden="true" />
        </div>

        <p
          className={[
            'font-bold text-ink dark:text-white',
            compact ? 'text-sm' : 'text-base sm:text-lg',
          ].join(' ')}
        >
          {isDragging ? t.tool.dropActive : t.tool.dropTitle}
        </p>
        <p className="mt-1 text-sm text-ink/50 dark:text-white/50">
          {t.tool.dropBrowse}
        </p>
        {!compact && (
          <>
            <p className="mt-3 font-mono text-xs text-ink/40 dark:text-white/40">
              {t.tool.dropFormats}
            </p>
            <p className="mt-1 hidden font-mono text-xs text-ink/40 sm:block dark:text-white/40">
              {t.tool.pasteHint}
            </p>
          </>
        )}
      </div>

      {error && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="mt-3 text-center text-sm font-semibold text-red-600 dark:text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default DropZone
