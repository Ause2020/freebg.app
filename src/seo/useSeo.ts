import { useEffect } from 'react'
import type { RouteDef } from '../content/routes'
import { buildHead } from './head'

const MANAGED = 'data-seo-managed'

function upsertMeta(
  head: HTMLHeadElement,
  key: 'name' | 'property',
  value: string,
  content: string,
) {
  let el = head.querySelector<HTMLMetaElement>(`meta[${key}="${value}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(key, value)
    el.setAttribute(MANAGED, '')
    head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Keeps <head> in sync during client-side navigation. Prerendered HTML already
 * ships the correct tags, so this only matters after the first paint.
 */
export function useSeo(route: RouteDef): void {
  useEffect(() => {
    const data = buildHead(route)
    const head = document.head

    document.title = data.title
    document.documentElement.lang = data.htmlLang

    for (const tag of data.meta) {
      if (tag.name) upsertMeta(head, 'name', tag.name, tag.content)
      else if (tag.property) upsertMeta(head, 'property', tag.property, tag.content)
    }

    head
      .querySelectorAll(`link[rel="canonical"], link[rel="alternate"][hreflang]`)
      .forEach((el) => el.remove())

    for (const link of data.links) {
      const el = document.createElement('link')
      el.setAttribute('rel', link.rel)
      el.setAttribute('href', link.href)
      if (link.hreflang) el.setAttribute('hreflang', link.hreflang)
      el.setAttribute(MANAGED, '')
      head.appendChild(el)
    }

    head
      .querySelectorAll(`script[type="application/ld+json"][${MANAGED}]`)
      .forEach((el) => el.remove())

    for (const schema of data.jsonLd) {
      const el = document.createElement('script')
      el.type = 'application/ld+json'
      el.setAttribute(MANAGED, '')
      el.textContent = JSON.stringify(schema)
      head.appendChild(el)
    }
  }, [route])
}
