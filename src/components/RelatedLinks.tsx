import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useI18n } from '../i18n'
import { routePath, type PageKey } from '../content/routes'
import { SISTER_SITES } from '../content/site'

const CANDIDATES: PageKey[] = [
  'home',
  'guide',
  'productPhotos',
  'profilePictures',
]

export function RelatedLinks({ current }: { current: PageKey }) {
  const { t, locale } = useI18n()
  const others = CANDIDATES.filter((key) => key !== current)

  return (
    <div className="mt-12 space-y-8">
      {others.length > 0 && (
        <nav aria-label={t.footer.product}>
          <ul className="grid gap-3 sm:grid-cols-3">
            {others.map((key) => (
              <li key={key}>
                <Link
                  to={routePath(key, locale)}
                  className="panel flex h-full flex-col justify-between gap-2 p-4 transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--color-ink)] dark:hover:shadow-[3px_3px_0_0_var(--color-accent)]"
                >
                  <span className="text-sm font-bold text-ink dark:text-white">
                    {t.pages[key].h1}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-primary dark:text-primary-light">
                    {t.nav[key]}
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <nav aria-label={t.footer.moreTools}>
        <h2 className="!mt-0 mb-4 text-lg font-extrabold tracking-tight text-ink dark:text-white">
          {t.footer.moreTools}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {SISTER_SITES.map((site) => (
            <li key={site.id}>
              <a
                href={site.href[locale]}
                rel="noopener noreferrer"
                className="panel flex h-full flex-col justify-between gap-2 p-4 transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--color-ink)] dark:hover:shadow-[3px_3px_0_0_var(--color-accent)]"
              >
                <span className="text-sm font-bold text-ink dark:text-white">
                  {t.footer.sisters[site.id]}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-primary dark:text-primary-light">
                  {site.name}
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default RelatedLinks
