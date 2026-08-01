export const MAX_FILE_SIZE_MB = 25
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024

export const ACCEPTED_MIME = ['image/jpeg', 'image/png', 'image/webp'] as const
export const ACCEPT_ATTRIBUTE = 'image/jpeg,image/png,image/webp'

export const HEIC_PATTERN = /\.(heic|heif)$/i
export const IMAGE_EXTENSION_PATTERN = /\.(jpe?g|png|webp)$/i

export type ExportFormat = 'png' | 'jpeg' | 'webp'

export const EXPORT_MIME: Record<ExportFormat, string> = {
  png: 'image/png',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
}

export const EXPORT_EXTENSION: Record<ExportFormat, string> = {
  png: 'png',
  jpeg: 'jpg',
  webp: 'webp',
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
