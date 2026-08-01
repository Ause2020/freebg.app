import { useEffect } from 'react'

/** Accepts images pasted anywhere on the page with Ctrl/Cmd + V. */
export function usePasteImage(
  onImage: (files: File[]) => void,
  enabled = true,
): void {
  useEffect(() => {
    if (!enabled) return

    const onPaste = (event: ClipboardEvent) => {
      const items = event.clipboardData?.items
      if (!items) return

      const files: File[] = []
      for (const item of items) {
        if (item.kind !== 'file') continue
        const file = item.getAsFile()
        if (file && file.type.startsWith('image/')) {
          const named =
            file.name && file.name !== 'image.png'
              ? file
              : new File([file], `pasted-${Date.now()}.png`, { type: file.type })
          files.push(named)
        }
      }

      if (files.length > 0) {
        event.preventDefault()
        onImage(files)
      }
    }

    window.addEventListener('paste', onPaste)
    return () => window.removeEventListener('paste', onPaste)
  }, [enabled, onImage])
}
