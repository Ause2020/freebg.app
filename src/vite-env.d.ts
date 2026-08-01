/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Cloudflare Web Analytics token. Analytics stays off when unset. */
  readonly VITE_ANALYTICS_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
