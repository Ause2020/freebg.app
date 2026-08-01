import { EXPORT_EXTENSION, type ExportFormat } from './constants'

export function baseName(fileName: string): string {
  return fileName.replace(/\.[^.]+$/, '') || 'image'
}

export function outputName(fileName: string, format: ExportFormat): string {
  return `${baseName(fileName)}-nobg.${EXPORT_EXTENSION[format]}`
}

export function triggerDownload(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  link.remove()
  // Give the browser a tick to start the download before releasing the blob.
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export async function downloadZip(
  entries: { name: string; blob: Blob }[],
  zipName = 'bgfree-images.zip',
): Promise<void> {
  const { default: JSZip } = await import('jszip')
  const zip = new JSZip()

  const used = new Set<string>()
  for (const entry of entries) {
    let name = entry.name
    let counter = 2
    while (used.has(name)) {
      const dot = entry.name.lastIndexOf('.')
      name =
        dot === -1
          ? `${entry.name}-${counter}`
          : `${entry.name.slice(0, dot)}-${counter}${entry.name.slice(dot)}`
      counter += 1
    }
    used.add(name)
    zip.file(name, entry.blob)
  }

  const blob = await zip.generateAsync({ type: 'blob' })
  triggerDownload(blob, zipName)
}
