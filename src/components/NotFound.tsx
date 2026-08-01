import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { routePath } from '../content/routes'

export function NotFound() {
  const { t, locale } = useI18n()

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="mark-highlight text-6xl font-black">404</p>
      <h1 className="text-xl font-black text-ink dark:text-white">
        {t.errors.notFoundTitle}
      </h1>
      <p className="max-w-md text-sm text-ink/60 dark:text-white/55">
        {t.errors.notFoundBody}
      </p>
      <Link to={routePath('home', locale)} className="btn btn-primary mt-2">
        {t.errors.notFoundAction}
      </Link>
    </div>
  )
}

export default NotFound
