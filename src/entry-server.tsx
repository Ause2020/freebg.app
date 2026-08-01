import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

export { ROUTES } from './content/routes'
export { buildHead } from './seo/head'
export { SITE_URL } from './content/site'

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </StrictMode>,
  )
}
