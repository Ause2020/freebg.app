import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { createPortal } from 'react-dom'
import { Eraser, Loader2, Minus, Paintbrush, Plus, Redo2, Undo2, X } from 'lucide-react'
import { useI18n } from '../i18n'
import {
  cloneImageData,
  composeRefinedResult,
  MAX_HISTORY_STEPS,
  stampBrushLine,
  setupWorkingCanvases,
  type RefineMode,
  type WorkingCanvases,
} from '../lib/refine'

export type MagicEraserProps = {
  originalUrl: string
  resultBlob: Blob
  onApply: (blob: Blob) => void
  onClose: () => void
}

const MIN_BRUSH = 8
const MAX_BRUSH = 140
const BRUSH_STEP = 8

export function MagicEraser({ originalUrl, resultBlob, onApply, onClose }: MagicEraserProps) {
  const { t } = useI18n()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasesRef = useRef<WorkingCanvases | null>(null)
  const historyRef = useRef<ImageData[]>([])
  const historyIndexRef = useRef(0)
  const drawingRef = useRef(false)
  const lastPointRef = useRef<{ x: number; y: number } | null>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  const [mode, setMode] = useState<RefineMode>('erase')
  const [brushSize, setBrushSize] = useState(50)
  const [ready, setReady] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const [applying, setApplying] = useState(false)
  const [historyTick, setHistoryTick] = useState(0)

  useEffect(() => {
    let cancelled = false
    const canvasEl = canvasRef.current
    if (!canvasEl) return

    setupWorkingCanvases(originalUrl, resultBlob, canvasEl)
      .then((canvases) => {
        if (cancelled) return
        canvasesRef.current = canvases
        historyRef.current = [cloneImageData(canvases.initialImageData)]
        historyIndexRef.current = 0
        setBrushSize(Math.round(Math.min(canvases.width, canvases.height) * 0.08))
        setReady(true)
      })
      .catch(() => {
        if (!cancelled) setLoadError(true)
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const getPoint = useCallback((event: ReactPointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    const stage = stageRef.current
    const canvases = canvasesRef.current
    if (!canvas || !stage || !canvases) return null
    const canvasRect = canvas.getBoundingClientRect()
    const stageRect = stage.getBoundingClientRect()
    const scaleX = canvases.width / canvasRect.width
    const scaleY = canvases.height / canvasRect.height
    return {
      // Canvas-space coords used by the brush stamp.
      x: (event.clientX - canvasRect.left) * scaleX,
      y: (event.clientY - canvasRect.top) * scaleY,
      // Stage-space coords used to position the on-screen cursor ring.
      // Absolute children are positioned against the stage's padding box,
      // while getBoundingClientRect() returns the border box — so we must
      // subtract clientLeft/clientTop (the border widths) or the ring
      // sits ~2px off whenever the stage has a border.
      displayX: event.clientX - stageRect.left - stage.clientLeft,
      displayY: event.clientY - stageRect.top - stage.clientTop,
      displayScale: canvasRect.width / canvases.width,
    }
  }, [])

  const pushHistory = useCallback(() => {
    const canvases = canvasesRef.current
    if (!canvases) return
    const snapshot = canvases.previewCtx.getImageData(0, 0, canvases.width, canvases.height)
    const trimmed = historyRef.current.slice(0, historyIndexRef.current + 1)
    trimmed.push(snapshot)
    while (trimmed.length > MAX_HISTORY_STEPS) trimmed.shift()
    historyRef.current = trimmed
    historyIndexRef.current = trimmed.length - 1
    setHistoryTick((tick) => tick + 1)
  }, [])

  const updateCursor = (point: {
    displayX: number
    displayY: number
    displayScale: number
  }) => {
    const cursor = cursorRef.current
    if (!cursor) return
    // Position with left/top so the Tailwind -translate-x/y-1/2 classes
    // keep the ring centred on the pointer. Overwriting `transform`
    // would wipe that centering and leave the ring's top-left corner
    // sitting on the mouse — which is the offset the user was seeing.
    const diameter = brushSize * 2 * point.displayScale
    cursor.style.left = `${point.displayX}px`
    cursor.style.top = `${point.displayY}px`
    cursor.style.width = `${diameter}px`
    cursor.style.height = `${diameter}px`
    cursor.style.opacity = '1'
  }

  const onPointerDown = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!ready) return
    const point = getPoint(event)
    if (!point) return
    canvasRef.current?.setPointerCapture(event.pointerId)
    drawingRef.current = true
    lastPointRef.current = { x: point.x, y: point.y }
    updateCursor(point)
    stampBrushLine(canvasesRef.current!, mode, { x: point.x, y: point.y }, { x: point.x, y: point.y }, brushSize)
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    const point = getPoint(event)
    if (!point) return

    updateCursor(point)

    if (!drawingRef.current || !ready) return
    const from = lastPointRef.current ?? { x: point.x, y: point.y }
    stampBrushLine(canvasesRef.current!, mode, from, { x: point.x, y: point.y }, brushSize)
    lastPointRef.current = { x: point.x, y: point.y }
  }

  const endStroke = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return
    drawingRef.current = false
    lastPointRef.current = null
    canvasRef.current?.releasePointerCapture(event.pointerId)
    pushHistory()
  }

  const applySnapshot = (index: number) => {
    const canvases = canvasesRef.current
    const snapshot = historyRef.current[index]
    if (!canvases || !snapshot) return
    canvases.previewCtx.putImageData(snapshot, 0, 0)
    historyIndexRef.current = index
    setHistoryTick((tick) => tick + 1)
  }

  const undo = () => {
    if (historyIndexRef.current === 0) return
    applySnapshot(historyIndexRef.current - 1)
  }

  const redo = () => {
    if (historyIndexRef.current >= historyRef.current.length - 1) return
    applySnapshot(historyIndexRef.current + 1)
  }

  const resetEdits = () => {
    applySnapshot(0)
    historyRef.current = [historyRef.current[0]]
    historyIndexRef.current = 0
    setHistoryTick((tick) => tick + 1)
  }

  const handleApply = async () => {
    const canvases = canvasesRef.current
    if (!canvases) return
    setApplying(true)
    try {
      const current = canvases.previewCtx.getImageData(0, 0, canvases.width, canvases.height)
      const blob = await composeRefinedResult(canvases, current)
      onApply(blob)
      onClose()
    } catch {
      setApplying(false)
    }
  }

  const canUndo = historyIndexRef.current > 0
  const canRedo = historyIndexRef.current < historyRef.current.length - 1
  void historyTick

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex flex-col bg-ink/60 backdrop-blur-sm dark:bg-black/75"
      role="dialog"
      aria-modal="true"
      aria-label={t.tool.refineTitle}
    >
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col p-3 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-black text-white">
              <Paintbrush className="h-5 w-5 text-accent" aria-hidden="true" />
              {t.tool.refineTitle}
            </h2>
            <p className="mt-0.5 hidden text-sm text-white/60 sm:block">{t.tool.refineHint}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.tool.discard}
            className="rounded-lg border-2 border-white/20 p-2 text-white transition hover:bg-white/10"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div
          ref={stageRef}
          className="bg-checker relative mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-2xl border-2 border-white/15"
        >
          {!ready && !loadError && (
            <Loader2 className="h-8 w-8 animate-spin text-white" aria-hidden="true" />
          )}
          {loadError && (
            <p className="max-w-xs px-4 text-center text-sm font-medium text-white">
              {t.errors.generic}
            </p>
          )}
          <canvas
            ref={canvasRef}
            className={`max-h-full max-w-full touch-none ${ready ? 'cursor-none' : 'invisible'}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerEnter={(event) => {
              const point = getPoint(event)
              if (point) updateCursor(point)
            }}
            onPointerUp={endStroke}
            onPointerLeave={(event) => {
              endStroke(event)
              if (cursorRef.current) cursorRef.current.style.opacity = '0'
            }}
            onPointerCancel={endStroke}
          />
          {ready && (
            <div
              ref={cursorRef}
              data-brush-cursor=""
              aria-hidden="true"
              className={`pointer-events-none absolute top-0 left-0 box-border -translate-x-1/2 -translate-y-1/2 rounded-full border-2 opacity-0 ${
                mode === 'erase' ? 'border-red-400' : 'border-accent'
              }`}
            />
          )}
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setMode('erase')}
              aria-pressed={mode === 'erase'}
              className={`btn btn-sm ${mode === 'erase' ? 'btn-accent' : 'btn-outline'}`}
            >
              <Eraser className="h-4 w-4" aria-hidden="true" />
              {t.tool.eraseMode}
            </button>
            <button
              type="button"
              onClick={() => setMode('restore')}
              aria-pressed={mode === 'restore'}
              className={`btn btn-sm ${mode === 'restore' ? 'btn-accent' : 'btn-outline'}`}
            >
              <Paintbrush className="h-4 w-4" aria-hidden="true" />
              {t.tool.restoreMode}
            </button>

            <div className="mx-1 hidden h-6 w-px bg-white/20 sm:block" />

            <button
              type="button"
              onClick={undo}
              disabled={!canUndo}
              aria-label={t.tool.undo}
              className="btn btn-sm btn-outline"
            >
              <Undo2 className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={redo}
              disabled={!canRedo}
              aria-label={t.tool.redo}
              className="btn btn-sm btn-outline"
            >
              <Redo2 className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={resetEdits}
              disabled={!canUndo}
              className="btn btn-sm btn-outline"
            >
              {t.tool.resetEdits}
            </button>

            <div className="flex flex-1 items-center justify-end gap-2">
              <span className="hidden font-mono text-xs text-white/60 sm:inline">
                {t.tool.brushSize}
              </span>
              <button
                type="button"
                onClick={() => setBrushSize((size) => Math.max(MIN_BRUSH, size - BRUSH_STEP))}
                aria-label="-"
                className="btn btn-sm btn-outline px-2"
              >
                <Minus className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <input
                type="range"
                min={MIN_BRUSH}
                max={MAX_BRUSH}
                value={brushSize}
                onChange={(event) => setBrushSize(Number(event.target.value))}
                aria-label={t.tool.brushSize}
                className="w-24 accent-accent sm:w-32"
              />
              <button
                type="button"
                onClick={() => setBrushSize((size) => Math.min(MAX_BRUSH, size + BRUSH_STEP))}
                aria-label="+"
                className="btn btn-sm btn-outline px-2"
              >
                <Plus className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-white/50 sm:text-left">
            {mode === 'erase' ? t.tool.eraseModeHint : t.tool.restoreModeHint}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button type="button" onClick={onClose} className="btn btn-outline">
              {t.tool.discard}
            </button>
            <button
              type="button"
              onClick={() => void handleApply()}
              disabled={!ready || applying}
              className="btn btn-accent"
            >
              {applying ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Paintbrush className="h-4 w-4" aria-hidden="true" />
              )}
              {applying ? t.tool.applyingEdits : t.tool.applyEdits}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default MagicEraser
