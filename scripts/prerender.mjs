import { mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')
const ssrDir = join(root, '.ssr')

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

function renderHead(head) {
  const lines = []

  lines.push(`<title>${escapeHtml(head.title)}</title>`)

  for (const tag of head.meta) {
    const attr = tag.name
      ? `name="${escapeHtml(tag.name)}"`
      : `property="${escapeHtml(tag.property)}"`
    lines.push(`<meta ${attr} content="${escapeHtml(tag.content)}" />`)
  }

  for (const link of head.links) {
    const hreflang = link.hreflang
      ? ` hreflang="${escapeHtml(link.hreflang)}"`
      : ''
    lines.push(
      `<link rel="${escapeHtml(link.rel)}"${hreflang} href="${escapeHtml(link.href)}" />`,
    )
  }

  for (const schema of head.jsonLd) {
    // </script> inside JSON would close the tag early.
    const json = JSON.stringify(schema).replace(/</g, '\\u003c')
    lines.push(
      `<script type="application/ld+json" data-seo-managed>${json}</script>`,
    )
  }

  return lines.map((line) => `    ${line}`).join('\n')
}

const HEAD_BLOCK = /<!--app-head-start-->[\s\S]*?<!--app-head-end-->/

function renderSitemap(routes, siteUrl) {
  const today = new Date().toISOString().slice(0, 10)

  const urls = routes
    .filter((route) => !route.noindex)
    .map((route) => {
      const loc = `${siteUrl}${route.path === '/' ? '/' : route.path}`
      const siblings = routes.filter((item) => item.key === route.key)
      const links = siblings
        .map(
          (sibling) =>
            `    <xhtml:link rel="alternate" hreflang="${sibling.locale}" href="${siteUrl}${sibling.path === '/' ? '/' : sibling.path}" />`,
        )
        .join('\n')

      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        links,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority.toFixed(1)}</priority>`,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
}

async function main() {
  const template = await readFile(join(distDir, 'index.html'), 'utf8')
  const entryUrl = pathToFileURL(join(ssrDir, 'entry-server.js')).href
  const { render, ROUTES, buildHead, SITE_URL } = await import(entryUrl)

  for (const route of ROUTES) {
    const head = buildHead(route)
    const appHtml = render(route.path)

    // Function replacements: `$&` and friends in the rendered markup would
    // otherwise be interpreted as replacement patterns.
    const html = template
      .replace('<html lang="en">', () => `<html lang="${head.htmlLang}">`)
      .replace(HEAD_BLOCK, () => renderHead(head).trimStart())
      .replace('<!--app-html-->', () => appHtml)

    const outDir =
      route.path === '/' ? distDir : join(distDir, route.path.replace(/^\//, ''))
    await mkdir(outDir, { recursive: true })
    await writeFile(join(outDir, 'index.html'), html, 'utf8')

    console.log(`  prerendered ${route.path}`)
  }

  await writeFile(
    join(distDir, 'sitemap.xml'),
    renderSitemap(ROUTES, SITE_URL),
    'utf8',
  )
  console.log('  wrote sitemap.xml')

  // The SPA fallback keeps the generic head and an empty root, so unknown URLs
  // render the 404 view from the client router instead of flashing the homepage.
  const fallback = template.replace('<!--app-html-->', '')
  await writeFile(join(distDir, '404.html'), fallback, 'utf8')

  await rm(ssrDir, { recursive: true, force: true })
  console.log('  wrote 404.html')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
