/**
 * Core pixel logic for the "magic eraser" touch-up tool.
 *
 * Editing happens on a downsized "working" canvas so brushing stays smooth
 * on any device, while the final export is always composited at the full
 * original resolution so quality is never lost.
 */

export const MAX_WORKING_DIMENSION = 1100
export const MAX_HISTORY_STEPS = 15

export type RefineMode = 'erase' | 'restore'

export type WorkingCanvases = {
  width: number
  height: number
  /** Full-resolution dimensions of the source images. */
  fullWidth: number
  fullHeight: number
  preview: HTMLCanvasElement
  previewCtx: CanvasRenderingContext2D
  original: HTMLCanvasElement
  originalCtx: CanvasRenderingContext2D
  fullCutout: ImageBitmap
  fullOriginal: ImageBitmap
  /** Immutable snapshot of the working-resolution cutout before any edits. */
  initialImageData: ImageData
}

async function loadBitmap(source: string | Blob): Promise<ImageBitmap> {
  if (typeof source === 'string') {
    const response = await fetch(source)
    const blob = await response.blob()
    return createImageBitmap(blob)
  }
  return createImageBitmap(source)
}

function createCanvas(width: number, height: number): {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
} {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) throw new Error('Canvas 2D context unavailable')
  return { canvas, ctx }
}

export async function setupWorkingCanvases(
  originalSource: string,
  cutoutSource: Blob,
  previewCanvas: HTMLCanvasElement,
): Promise<WorkingCanvases> {
  const [fullOriginal, fullCutout] = await Promise.all([
    loadBitmap(originalSource),
    loadBitmap(cutoutSource),
  ])

  const fullWidth = fullCutout.width
  const fullHeight = fullCutout.height
  const scale = Math.min(1, MAX_WORKING_DIMENSION / Math.max(fullWidth, fullHeight))
  const width = Math.max(1, Math.round(fullWidth * scale))
  const height = Math.max(1, Math.round(fullHeight * scale))

  const preview = previewCanvas
  preview.width = width
  preview.height = height
  const previewCtx = preview.getContext('2d', { willReadFrequently: true })
  if (!previewCtx) throw new Error('Canvas 2D context unavailable')
  previewCtx.imageSmoothingEnabled = true
  previewCtx.drawImage(fullCutout, 0, 0, width, height)

  const { canvas: original, ctx: originalCtx } = createCanvas(width, height)
  originalCtx.imageSmoothingEnabled = true
  originalCtx.drawImage(fullOriginal, 0, 0, width, height)

  const initialImageData = previewCtx.getImageData(0, 0, width, height)

  return {
    width,
    height,
    fullWidth,
    fullHeight,
    preview,
    previewCtx,
    original,
    originalCtx,
    fullCutout,
    fullOriginal,
    initialImageData,
  }
}

export function cloneImageData(data: ImageData): ImageData {
  return new ImageData(new Uint8ClampedArray(data.data), data.width, data.height)
}

/** Draws one brush stamp at (x, y) in working-canvas coordinates. */
export function stampBrush(
  canvases: WorkingCanvases,
  mode: RefineMode,
  x: number,
  y: number,
  radius: number,
): void {
  const { previewCtx, original } = canvases

  if (mode === 'erase') {
    previewCtx.save()
    previewCtx.globalCompositeOperation = 'destination-out'
    const gradient = previewCtx.createRadialGradient(x, y, 0, x, y, radius)
    gradient.addColorStop(0, 'rgba(0,0,0,1)')
    gradient.addColorStop(0.7, 'rgba(0,0,0,1)')
    gradient.addColorStop(1, 'rgba(0,0,0,0)')
    previewCtx.fillStyle = gradient
    previewCtx.beginPath()
    previewCtx.arc(x, y, radius, 0, Math.PI * 2)
    previewCtx.fill()
    previewCtx.restore()
    return
  }

  previewCtx.save()
  previewCtx.globalCompositeOperation = 'source-over'
  previewCtx.beginPath()
  previewCtx.arc(x, y, radius, 0, Math.PI * 2)
  previewCtx.clip()
  const left = Math.max(0, Math.floor(x - radius))
  const top = Math.max(0, Math.floor(y - radius))
  const size = Math.ceil(radius * 2)
  previewCtx.drawImage(original, left, top, size, size, left, top, size, size)
  previewCtx.restore()
}

/** Draws stamps along a line so fast pointer movement leaves no gaps. */
export function stampBrushLine(
  canvases: WorkingCanvases,
  mode: RefineMode,
  from: { x: number; y: number },
  to: { x: number; y: number },
  radius: number,
): void {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const distance = Math.hypot(dx, dy)
  const spacing = Math.max(2, radius / 4)
  const steps = Math.max(1, Math.ceil(distance / spacing))

  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps
    stampBrush(canvases, mode, from.x + dx * t, from.y + dy * t, radius)
  }
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

/**
 * Composites the edited working-resolution preview back onto the
 * full-resolution source images, producing a final full-quality PNG blob.
 */
export async function composeRefinedResult(
  canvases: WorkingCanvases,
  currentImageData: ImageData,
): Promise<Blob> {
  const { fullWidth, fullHeight, fullCutout, fullOriginal, initialImageData, width, height } =
    canvases

  const { canvas: outCanvas, ctx: outCtx } = createCanvas(fullWidth, fullHeight)
  outCtx.drawImage(fullCutout, 0, 0, fullWidth, fullHeight)
  const outData = outCtx.getImageData(0, 0, fullWidth, fullHeight)

  const { ctx: origCtx } = createCanvas(fullWidth, fullHeight)
  origCtx.drawImage(fullOriginal, 0, 0, fullWidth, fullHeight)
  const origData = origCtx.getImageData(0, 0, fullWidth, fullHeight)

  const out = outData.data
  const orig = origData.data
  const before = initialImageData.data
  const after = currentImageData.data

  for (let fy = 0; fy < fullHeight; fy += 1) {
    const wy = Math.min(height - 1, Math.floor((fy * height) / fullHeight))
    for (let fx = 0; fx < fullWidth; fx += 1) {
      const wx = Math.min(width - 1, Math.floor((fx * width) / fullWidth))
      const wIdx = (wy * width + wx) * 4 + 3
      const alphaBefore = before[wIdx]
      const alphaAfter = after[wIdx]

      if (alphaAfter === alphaBefore) continue

      const fIdx = (fy * fullWidth + fx) * 4

      if (alphaAfter > alphaBefore) {
        const restoreT = (alphaAfter - alphaBefore) / 255
        out[fIdx] = lerp(out[fIdx], orig[fIdx], restoreT)
        out[fIdx + 1] = lerp(out[fIdx + 1], orig[fIdx + 1], restoreT)
        out[fIdx + 2] = lerp(out[fIdx + 2], orig[fIdx + 2], restoreT)
        out[fIdx + 3] = Math.max(out[fIdx + 3], alphaAfter)
      } else {
        const ratio = alphaBefore > 0 ? alphaAfter / alphaBefore : 0
        out[fIdx + 3] = Math.round(out[fIdx + 3] * ratio)
      }
    }
  }

  outCtx.putImageData(outData, 0, 0)

  return new Promise((resolve, reject) => {
    outCanvas.toBlob((blob) => {
      if (blob) resolve(blob)
      else reject(new Error('Failed to export refined image'))
    }, 'image/png')
  })
}

export function disposeWorkingCanvases(canvases: WorkingCanvases): void {
  canvases.fullCutout.close()
  canvases.fullOriginal.close()
}
