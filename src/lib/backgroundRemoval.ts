export type ProgressCallback = (
  key: string,
  current: number,
  total: number,
) => void

/** Stable progress phases so the UI can localise the label. */
export type ProgressPhase =
  | 'idle'
  | 'runtime'
  | 'model'
  | 'assets'
  | 'preparing'
  | 'processing'
  | 'done'

export type RemovalProgress = {
  /** 0–100 overall progress estimate */
  percent: number
  phase: ProgressPhase
}

export type RemovalErrorCode =
  | 'network'
  | 'memory'
  | 'gpu'
  | 'decode'
  | 'generic'

export class RemovalError extends Error {
  readonly code: RemovalErrorCode

  constructor(code: RemovalErrorCode, cause?: unknown) {
    super(`Background removal failed: ${code}`)
    this.name = 'RemovalError'
    this.code = code
    this.cause = cause
  }
}

export type ImageSource = File | Blob | ImageData | ArrayBuffer | Uint8Array

const DEFAULT_MODEL = 'isnet_fp16' as const

type ImglyModule = typeof import('@imgly/background-removal')
type Config = import('@imgly/background-removal').Config

let imglyModulePromise: Promise<ImglyModule> | null = null

/** Lazy-load the heavy background-removal + ONNX runtime bundle. */
export function loadBackgroundRemoval(): Promise<ImglyModule> {
  if (!imglyModulePromise) {
    imglyModulePromise = import('@imgly/background-removal').catch((error) => {
      imglyModulePromise = null
      throw new RemovalError('network', error)
    })
  }
  return imglyModulePromise
}

export function supportsWebGpu(): boolean {
  return typeof navigator !== 'undefined' && 'gpu' in navigator
}

function createRemovalConfig(onProgress?: ProgressCallback): Config {
  return {
    model: DEFAULT_MODEL,
    device: supportsWebGpu() ? 'gpu' : 'cpu',
    output: {
      format: 'image/png',
      quality: 1,
    },
    progress: onProgress,
  }
}

export function phaseForKey(key: string): ProgressPhase {
  const lower = key.toLowerCase()
  if (lower.includes('wasm') || lower.includes('ort')) return 'runtime'
  if (
    lower.includes('model') ||
    lower.includes('isnet') ||
    lower.includes('onnx')
  ) {
    return 'model'
  }
  if (lower.includes('fetch') || lower.includes('download')) return 'assets'
  return 'preparing'
}

export function classifyError(err: unknown): RemovalErrorCode {
  if (err instanceof RemovalError) return err.code

  const raw = err instanceof Error ? `${err.name} ${err.message}` : String(err ?? '')
  const lower = raw.toLowerCase()

  if (
    lower.includes('network') ||
    lower.includes('fetch') ||
    lower.includes('load failed') ||
    lower.includes('failed to load')
  ) {
    return 'network'
  }
  if (
    lower.includes('out of memory') ||
    lower.includes('memory') ||
    lower.includes('allocation')
  ) {
    return 'memory'
  }
  if (lower.includes('webgpu') || lower.includes('gpu') || lower.includes('adapter')) {
    return 'gpu'
  }
  if (
    lower.includes('decode') ||
    lower.includes('unsupported image') ||
    lower.includes('image source')
  ) {
    return 'decode'
  }
  return 'generic'
}

/** Fail fast with a clear message when the browser cannot decode the file. */
export async function assertDecodable(file: Blob): Promise<void> {
  try {
    const bitmap = await createImageBitmap(file)
    bitmap.close()
  } catch (error) {
    throw new RemovalError('decode', error)
  }
}

/** Preload model + WASM assets so the first removal feels instant. */
export async function preloadModel(
  onProgress?: ProgressCallback,
): Promise<void> {
  const { preload } = await loadBackgroundRemoval()
  try {
    await preload(createRemovalConfig(onProgress))
  } catch (error) {
    throw new RemovalError(classifyError(error), error)
  }
}

/** Remove the background from an image. Resolves to a transparent PNG blob. */
export async function removeImageBackground(
  image: ImageSource,
  onProgress?: ProgressCallback,
): Promise<Blob> {
  const { removeBackground } = await loadBackgroundRemoval()
  try {
    return await removeBackground(image, createRemovalConfig(onProgress))
  } catch (error) {
    throw new RemovalError(classifyError(error), error)
  }
}

export function revokeObjectUrl(url: string | null | undefined): void {
  if (url) URL.revokeObjectURL(url)
}
