import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Moon, Scissors, Sun, X } from 'lucide-react'
import { useI18n } from '../i18n'
import { useTheme } from '../hooks/useTheme'
import { alternates, routePath, type PageKey, type RouteDef } from '../content/routes'
import { LOCALE_TAGS } from '../content/site'

const NAV_KEYS: PageKey[] = ['home', 'guide', 'productPhotos', 'profilePictures']

export function Header({ route }: { route: RouteDef }) {
  const { t, locale } = useI18n()
  const { theme, toggle, mounted } = useTheme()
  const [open, setOpen] = useState(false)

  const otherLocale = alternates(route.key).find(
    (item) => item.locale !== locale,
  )

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-ink/10 bg-paper/90 backdrop-blur-sm dark:border-white/10 dark:bg-[#0a0a0e]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          to={routePath('home', locale)}
          className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span className="flex h-8 w-8 shrink-0 -rotate-3 items-center justify-center rounded-lg border-2 border-ink bg-primary text-white shadow-[2px_2px_0_0_var(--color-ink)] dark:border-white/30 dark:shadow-[2px_2px_0_0_var(--color-accent)]">
            <Scissors className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="flex flex-col items-start gap-0.5">
            <span className="text-lg leading-none font-black tracking-tight text-ink sm:text-xl dark:text-white">
              BG<span className="text-primary dark:text-primary-light">Free</span>
            </span>
            <span className="hidden font-mono text-[0.65rem] font-medium tracking-wide text-ink/50 sm:block dark:text-white/50">
              {t.tagline}
            </span>
          </span>
        </Link>

        <nav
          aria-label={t.nav.menu}
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              to={routePath(key, locale)}
              aria-current={route.key === key ? 'page' : undefined}
              className={[
                'rounded-lg px-3 py-2 text-sm font-semibold transition',
                route.key === key
                  ? 'bg-ink text-white dark:bg-white dark:text-ink'
                  : 'text-ink/70 hover:bg-ink/5 hover:text-ink dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white',
              ].join(' ')}
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {otherLocale && (
            <Link
              to={otherLocale.path}
              hrefLang={LOCALE_TAGS[otherLocale.locale]}
              className="rounded-lg border-2 border-ink/15 px-2.5 py-1.5 font-mono text-xs font-bold uppercase text-ink/70 transition hover:border-ink/30 hover:text-ink dark:border-white/15 dark:text-white/70 dark:hover:border-white/30 dark:hover:text-white"
            >
              {otherLocale.locale}
            </Link>
          )}

          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.theme}
            className="rounded-lg p-2 text-ink/70 transition hover:bg-ink/5 hover:text-ink dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {mounted && theme === 'dark' ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            className="rounded-lg p-2 text-ink/70 transition hover:bg-ink/5 hover:text-ink lg:hidden dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label={t.nav.menu}
          className="border-t-2 border-ink/10 bg-paper px-4 py-2 lg:hidden dark:border-white/10 dark:bg-[#0a0a0e]"
        >
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              to={routePath(key, locale)}
              onClick={() => setOpen(false)}
              aria-current={route.key === key ? 'page' : undefined}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80 transition hover:bg-ink/5 dark:text-white/80 dark:hover:bg-white/10"
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
