import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './content/routes'
import { I18nProvider } from './i18n'
import { Page } from './components/Page'
import { NotFound } from './components/NotFound'
import { DEFAULT_LOCALE } from './content/site'

export function App() {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <I18nProvider locale={route.locale}>
              <Page route={route} />
            </I18nProvider>
          }
        />
      ))}
      <Route
        path="*"
        element={
          <I18nProvider locale={DEFAULT_LOCALE}>
            <NotFound />
          </I18nProvider>
        }
      />
    </Routes>
  )
}

export default App
