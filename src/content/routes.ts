import type { Locale } from './site'

/** Logical page identity, shared across locales for hreflang linking. */
export type PageKey =
  | 'home'
  | 'guide'
  | 'productPhotos'
  | 'profilePictures'
  | 'removeBgAlternative'
  | 'photoroomAlternative'
  | 'noUpload'
  | 'amazonWhite'
  | 'logo'
  | 'screenshot'
  | 'signature'
  | 'removeBgShutdown'
  | 'privacy'
  | 'terms'
  | 'contact'

export type RouteDef = {
  key: PageKey
  locale: Locale
  path: string
  /** Relative sitemap priority, 0–1. */
  priority: number
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'
  /** Excluded from sitemap and marked noindex when true. */
  noindex?: boolean
}

export const ROUTES: readonly RouteDef[] = [
  { key: 'home', locale: 'en', path: '/', priority: 1.0, changefreq: 'weekly' },
  { key: 'home', locale: 'es', path: '/es', priority: 0.9, changefreq: 'weekly' },

  {
    key: 'guide',
    locale: 'en',
    path: '/how-to-remove-background-from-image',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    key: 'guide',
    locale: 'es',
    path: '/es/como-quitar-el-fondo-de-una-imagen',
    priority: 0.8,
    changefreq: 'monthly',
  },

  {
    key: 'productPhotos',
    locale: 'en',
    path: '/product-photo-background-remover',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    key: 'productPhotos',
    locale: 'es',
    path: '/es/quitar-fondo-fotos-de-producto',
    priority: 0.8,
    changefreq: 'monthly',
  },

  {
    key: 'profilePictures',
    locale: 'en',
    path: '/profile-picture-background-remover',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    key: 'profilePictures',
    locale: 'es',
    path: '/es/quitar-fondo-foto-de-perfil',
    priority: 0.7,
    changefreq: 'monthly',
  },

  {
    key: 'removeBgAlternative',
    locale: 'en',
    path: '/remove-bg-alternative',
    priority: 0.9,
    changefreq: 'weekly',
  },
  {
    key: 'removeBgAlternative',
    locale: 'es',
    path: '/es/alternativa-a-remove-bg',
    priority: 0.9,
    changefreq: 'weekly',
  },

  {
    key: 'photoroomAlternative',
    locale: 'en',
    path: '/photoroom-alternative',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    key: 'photoroomAlternative',
    locale: 'es',
    path: '/es/alternativa-a-photoroom',
    priority: 0.8,
    changefreq: 'monthly',
  },

  {
    key: 'noUpload',
    locale: 'en',
    path: '/how-to-remove-background-without-uploading',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    key: 'noUpload',
    locale: 'es',
    path: '/es/quitar-fondo-sin-subir-imagen',
    priority: 0.8,
    changefreq: 'monthly',
  },

  {
    key: 'amazonWhite',
    locale: 'en',
    path: '/amazon-white-background',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    key: 'amazonWhite',
    locale: 'es',
    path: '/es/fondo-blanco-amazon',
    priority: 0.8,
    changefreq: 'monthly',
  },

  {
    key: 'logo',
    locale: 'en',
    path: '/remove-background-from-logo',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    key: 'logo',
    locale: 'es',
    path: '/es/quitar-fondo-logo',
    priority: 0.7,
    changefreq: 'monthly',
  },

  {
    key: 'screenshot',
    locale: 'en',
    path: '/remove-background-from-screenshot',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    key: 'screenshot',
    locale: 'es',
    path: '/es/quitar-fondo-captura',
    priority: 0.7,
    changefreq: 'monthly',
  },

  {
    key: 'signature',
    locale: 'en',
    path: '/remove-background-from-signature',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    key: 'signature',
    locale: 'es',
    path: '/es/quitar-fondo-firma',
    priority: 0.7,
    changefreq: 'monthly',
  },

  {
    key: 'removeBgShutdown',
    locale: 'en',
    path: '/remove-bg-shutting-down',
    priority: 0.9,
    changefreq: 'weekly',
  },
  {
    key: 'removeBgShutdown',
    locale: 'es',
    path: '/es/remove-bg-cierra',
    priority: 0.9,
    changefreq: 'weekly',
  },

  { key: 'privacy', locale: 'en', path: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { key: 'privacy', locale: 'es', path: '/es/privacidad', priority: 0.3, changefreq: 'yearly' },

  { key: 'terms', locale: 'en', path: '/terms', priority: 0.3, changefreq: 'yearly' },
  { key: 'terms', locale: 'es', path: '/es/terminos', priority: 0.3, changefreq: 'yearly' },

  { key: 'contact', locale: 'en', path: '/contact', priority: 0.4, changefreq: 'yearly' },
  { key: 'contact', locale: 'es', path: '/es/contacto', priority: 0.4, changefreq: 'yearly' },
] as const

export function findRoute(path: string): RouteDef | undefined {
  const normalized =
    path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path
  return ROUTES.find((route) => route.path === normalized)
}

export function routePath(key: PageKey, locale: Locale): string {
  const match = ROUTES.find(
    (route) => route.key === key && route.locale === locale,
  )
  return match?.path ?? '/'
}

/** All locale variants of a page, for hreflang alternates. */
export function alternates(key: PageKey): RouteDef[] {
  return ROUTES.filter((route) => route.key === key)
}
