import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { routePath, type PageKey } from '../content/routes'
import { SISTER_SITES, SITE_NAME, SOURCE_URL } from '../content/site'

const TOOL_KEYS: PageKey[] = ['home', 'guide', 'productPhotos', 'profilePictures']
const LEGAL_KEYS: PageKey[] = ['privacy', 'terms', 'contact']

export function Footer() {
  const { t, locale } = useI18n()

  return (
    <footer className="mt-auto w-full border-t-2 border-ink/10 bg-white dark:border-white/10 dark:bg-[#0d0d13]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <p className="text-sm font-black text-ink dark:text-white">
            {t.footer.heading}
          </p>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-ink/60 sm:text-sm dark:text-white/50">
            {t.footer.body}
          </p>
        </div>

        <nav aria-label={t.footer.product}>
          <h2 className="eyebrow mb-3">{t.footer.product}</h2>
          <ul className="space-y-2">
            {TOOL_KEYS.map((key) => (
              <li key={key}>
                <Link
                  to={routePath(key, locale)}
                  className="text-sm font-medium text-ink/60 transition hover:text-primary dark:text-white/50 dark:hover:text-primary-light"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t.footer.moreTools}>
          <h2 className="eyebrow mb-3">{t.footer.moreTools}</h2>
          <ul className="space-y-2">
            {SISTER_SITES.map((site) => (
              <li key={site.id}>
                <a
                  href={site.href[locale]}
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink/60 transition hover:text-primary dark:text-white/50 dark:hover:text-primary-light"
                >
                  {t.footer.sisters[site.id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t.footer.legal}>
          <h2 className="eyebrow mb-3">{t.footer.legal}</h2>
          <ul className="space-y-2">
            {LEGAL_KEYS.map((key) => (
              <li key={key}>
                <Link
                  to={routePath(key, locale)}
                  className="text-sm font-medium text-ink/60 transition hover:text-primary dark:text-white/50 dark:hover:text-primary-light"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={SOURCE_URL}
                rel="noopener noreferrer"
                target="_blank"
                className="text-sm font-medium text-ink/60 transition hover:text-primary dark:text-white/50 dark:hover:text-primary-light"
              >
                {t.footer.openSource}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 border-t-2 border-ink/10 px-4 py-5 text-center sm:px-6 dark:border-white/10">
        <p className="font-mono text-xs text-ink/40 dark:text-white/35">
          © {new Date().getFullYear()} {SITE_NAME}. {t.footer.rights}
        </p>
        <p className="font-mono text-xs text-ink/40 dark:text-white/35">
          {t.footer.sourceNote}
        </p>
      </div>
    </footer>
  )
}

export default Footer
