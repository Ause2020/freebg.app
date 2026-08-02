export const SITE_URL = 'https://freebg.app'
export const SITE_NAME = 'FreeBG'
export const SITE_TWITTER = '@freebgapp'
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzejble'
export const SOURCE_URL = 'https://github.com/Ause2020/freebg.app'

export type Locale = 'en' | 'es'

export const LOCALES: readonly Locale[] = ['en', 'es'] as const
export const DEFAULT_LOCALE: Locale = 'en'

/** BCP-47 tags used in <html lang> and hreflang. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en',
  es: 'es',
}

export const OG_LOCALES: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path === '/' ? '/' : path.replace(/\/$/, '')}`
}

/** Sister products in the same Free* family — footer / SEO cross-links. */
export type SisterSite = {
  id: 'freepng' | 'freepdf' | 'freebg'
  name: string
  href: Record<Locale, string>
}

export const SISTER_SITES: readonly SisterSite[] = [
  {
    id: 'freepng',
    name: 'FreePNG',
    href: { en: 'https://freepng.app/', es: 'https://freepng.app/es' },
  },
  {
    id: 'freepdf',
    name: 'FreePDF',
    href: { en: 'https://freepdf.app/', es: 'https://freepdf.app/es' },
  },
] as const
