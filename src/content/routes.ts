import type { Locale } from './site'

/** Logical page identity, shared across locales for hreflang linking. */
export type PageKey =
  | 'home'
  | 'guide'
  | 'productPhotos'
  | 'profilePictures'
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
