import {
  LOCALE_TAGS,
  OG_LOCALES,
  SITE_NAME,
  SITE_TWITTER,
  SITE_URL,
  SOURCE_URL,
  absoluteUrl,
  type Locale,
} from '../content/site'
import { ROUTES, alternates, routePath, type RouteDef } from '../content/routes'
import { getDictionary } from '../i18n'

export type MetaTag = {
  name?: string
  property?: string
  content: string
}

export type LinkTag = {
  rel: string
  href: string
  hreflang?: string
}

export type HeadData = {
  htmlLang: string
  title: string
  description: string
  canonical: string
  meta: MetaTag[]
  links: LinkTag[]
  jsonLd: Record<string, unknown>[]
}

const OG_IMAGE = `${SITE_URL}/og-image.jpg`

function softwareApplicationSchema(locale: Locale): Record<string, unknown> {
  const t = getDictionary(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    alternateName: ['freebg.app', 'FreeBG', 'Free Background Remover'],
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any modern web browser',
    url: absoluteUrl(routePath('home', locale)),
    description: t.pages.home.description,
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: t.featureList,
    softwareLicense: 'https://www.gnu.org/licenses/agpl-3.0.html',
    codeRepository: SOURCE_URL,
    inLanguage: LOCALE_TAGS[locale],
  }
}

function webSiteSchema(locale: Locale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: absoluteUrl(routePath('home', locale)),
    inLanguage: LOCALE_TAGS[locale],
  }
}

function faqSchema(
  faq: { q: string; a: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

function howToSchema(
  howTo: { name: string; steps: { name: string; text: string }[] },
  canonical: string,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    totalTime: 'PT1M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${canonical}#step-${index + 1}`,
    })),
  }
}

function breadcrumbSchema(route: RouteDef): Record<string, unknown> | null {
  if (route.key === 'home') return null
  const t = getDictionary(route.locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: SITE_NAME,
        item: absoluteUrl(routePath('home', route.locale)),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t.pages[route.key].h1,
        item: absoluteUrl(route.path),
      },
    ],
  }
}

export function buildHead(route: RouteDef): HeadData {
  const t = getDictionary(route.locale)
  const page = t.pages[route.key]
  const canonical = absoluteUrl(route.path)

  const meta: MetaTag[] = [
    { name: 'description', content: page.description },
    { name: 'robots', content: route.noindex ? 'noindex, follow' : 'index, follow' },
    { name: 'theme-color', content: '#6C5CE7' },

    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: OG_IMAGE },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: t.ogImageAlt },
    { property: 'og:locale', content: OG_LOCALES[route.locale] },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: SITE_TWITTER },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: OG_IMAGE },
    { name: 'twitter:image:alt', content: t.ogImageAlt },
  ]

  for (const other of ROUTES) {
    if (other.locale !== route.locale && other.key === route.key) {
      meta.push({
        property: 'og:locale:alternate',
        content: OG_LOCALES[other.locale],
      })
    }
  }

  const links: LinkTag[] = [{ rel: 'canonical', href: canonical }]

  const siblings = alternates(route.key)
  for (const sibling of siblings) {
    links.push({
      rel: 'alternate',
      hreflang: LOCALE_TAGS[sibling.locale],
      href: absoluteUrl(sibling.path),
    })
  }
  const defaultSibling = siblings.find((item) => item.locale === 'en')
  if (defaultSibling) {
    links.push({
      rel: 'alternate',
      hreflang: 'x-default',
      href: absoluteUrl(defaultSibling.path),
    })
  }

  const jsonLd: Record<string, unknown>[] = []
  if (route.key === 'home') {
    jsonLd.push(softwareApplicationSchema(route.locale))
    jsonLd.push(webSiteSchema(route.locale))
  }
  if (page.faq && page.faq.length > 0) {
    jsonLd.push(faqSchema(page.faq))
  }
  if (page.howTo) {
    jsonLd.push(howToSchema(page.howTo, canonical))
  }
  const breadcrumb = breadcrumbSchema(route)
  if (breadcrumb) jsonLd.push(breadcrumb)

  return {
    htmlLang: LOCALE_TAGS[route.locale],
    title: page.title,
    description: page.description,
    canonical,
    meta,
    links,
    jsonLd,
  }
}
