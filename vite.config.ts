import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// -----------------------------------------------------------------------------
// Cross-origin isolation note
//
// COOP/COEP (`same-origin` + `require-corp`) unlock SharedArrayBuffer, which lets
// onnxruntime-web use multi-threaded WASM. They also break third-party embeds
// that do not opt in — including Google AdSense — so they are NOT enabled by
// default. Modern browsers use the WebGPU path anyway, and the WASM fallback
// still works single-threaded.
//
// To trade ad compatibility for CPU speed, add the two headers in
// `public/_headers` (Cloudflare Pages) or `vercel.json` (Vercel).
// -----------------------------------------------------------------------------

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 3000,
  },
  optimizeDeps: {
    exclude: ['@imgly/background-removal'],
  },
  ssr: {
    // Never pull the ONNX runtime into the prerender bundle.
    external: ['@imgly/background-removal', 'onnxruntime-web', 'jszip'],
  },
})
