import { EXPORT_MIME, type ExportFormat } from './constants'

export type ExportOptions = {
  /** CSS colour to composite behind the cut-out, or null to keep transparency. */
  background: string | null
  format: ExportFormat
  quality?: number
}

export type ImageSize = { width: number; height: number }

export async function readImageSize(source: Blob): Promise<ImageSize> {
  const bitmap = await createImageBitmap(source)
  const size = { width: bitmap.width, height: bitmap.height }
  bitmap.close()
  return size
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  mime: string,
  quality?: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob)
        else reject(new Error('Could not encode the image'))
      },
      mime,
      quality,
    )
  })
}

/**
 * Composite the transparent cut-out onto a background and encode it.
 * Returns the source blob untouched when no work is required.
 */
export async function exportImage(
  source: Blob,
  { background, format, quality = 0.92 }: ExportOptions,
): Promise<Blob> {
  const needsBackground = background !== null
  const needsReencode = format !== 'png'

  if (!needsBackground && !needsReencode) return source

  const bitmap = await createImageBitmap(source)
  const canvas = document.createElement('canvas')
  canvas.width = bitmap.width
  canvas.height = bitmap.height

  const ctx = canvas.getContext('2d')
  if (!ctx) {
    bitmap.close()
    throw new Error('Could not create a canvas context')
  }

  // JPEG has no alpha channel, so it always needs an opaque base colour.
  const fill = background ?? (format === 'jpeg' ? '#ffffff' : null)
  if (fill) {
    ctx.fillStyle = fill
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  ctx.drawImage(bitmap, 0, 0)
  bitmap.close()

  const blob = await canvasToBlob(
    canvas,
    EXPORT_MIME[format],
    format === 'png' ? undefined : quality,
  )

  canvas.width = 0
  canvas.height = 0

  return blob
}
