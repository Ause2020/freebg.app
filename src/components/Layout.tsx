import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { ErrorBoundary } from './ErrorBoundary'
import { useI18n } from '../i18n'
import type { RouteDef } from '../content/routes'

export function Layout({
  route,
  children,
}: {
  route: RouteDef
  children: ReactNode
}) {
  const { t } = useI18n()

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#tool"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t.nav.skipToTool}
      </a>

      <Header route={route} />

      <main className="flex flex-1 flex-col">
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
