import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n'
import { routePath, type PageKey } from '../content/routes'

const CANDIDATES: PageKey[] = [
  'home',
  'guide',
  'productPhotos',
  'profilePictures',
]

export function RelatedLinks({ current }: { current: PageKey }) {
  const { t, locale } = useI18n()
  const others = CANDIDATES.filter((key) => key !== current)

  if (others.length === 0) return null

  return (
    <nav aria-label={t.footer.product} className="mt-12">
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
  )
}

export default RelatedLinks
