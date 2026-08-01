import { useCallback, useEffect, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { useI18n } from '../i18n'

export type BeforeAfterSliderProps = {
  beforeSrc: string
  afterSrc: string
  className?: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  className = '',
}: BeforeAfterSliderProps) {
  const { t } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, next)))
  }, [])

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!dragging.current) return
      updateFromClientX(event.clientX)
    }
    const onUp = () => {
      dragging.current = false
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [updateFromClientX])

  const nudge = (delta: number) => {
    setPosition((current) => Math.min(100, Math.max(0, current + delta)))
  }

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl border-2 border-ink/10 bg-checker dark:border-white/10 ${className}`}
      onPointerDown={(event) => {
        dragging.current = true
        event.currentTarget.setPointerCapture?.(event.pointerId)
        updateFromClientX(event.clientX)
      }}
    >
      <img
        src={afterSrc}
        alt={t.tool.after}
        draggable={false}
        className="absolute inset-0 h-full w-full object-contain"
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={t.tool.before}
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_6px_rgba(0,0,0,0.35)]"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        aria-hidden="true"
      >
        <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-accent text-ink shadow-[2px_2px_0_0_var(--color-ink)]">
          <MoveHorizontal className="h-4 w-4" />
        </span>
      </div>

      <div
        role="slider"
        tabIndex={0}
        aria-label={t.tool.compare}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)}%`}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault()
            nudge(-5)
          } else if (event.key === 'ArrowRight') {
            event.preventDefault()
            nudge(5)
          } else if (event.key === 'Home') {
            event.preventDefault()
            setPosition(0)
          } else if (event.key === 'End') {
            event.preventDefault()
            setPosition(100)
          }
        }}
        className="absolute inset-0 z-20 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      />

      <span className="pointer-events-none absolute top-3 left-3 z-30 rounded-md bg-black/55 px-2 py-1 text-xs font-medium text-white">
        {t.tool.before}
      </span>
      <span className="pointer-events-none absolute top-3 right-3 z-30 rounded-md bg-black/55 px-2 py-1 text-xs font-medium text-white">
        {t.tool.after}
      </span>
    </div>
  )
}

export default BeforeAfterSlider
