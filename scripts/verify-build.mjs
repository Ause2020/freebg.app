/** Sanity checks on the prerendered output. Fails the build on regressions. */
import { readFile, stat } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const problems = []

function check(condition, message) {
  if (!condition) problems.push(message)
}

async function readPage(path) {
  const file =
    path === '/'
      ? join(dist, 'index.html')
      : join(dist, path.replace(/^\//, ''), 'index.html')
  return readFile(file, 'utf8')
}

const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8')
const paths = [...sitemap.matchAll(/<loc>https:\/\/freebg\.app(.*?)<\/loc>/g)].map(
  (match) => match[1] || '/',
)

check(paths.length >= 12, `sitemap only lists ${paths.length} URLs`)

for (const path of paths) {
  const html = await readPage(path)

  const titles = [...html.matchAll(/<title>(.*?)<\/title>/g)]
  check(titles.length === 1, `${path}: expected 1 <title>, found ${titles.length}`)

  const descriptions = [
    ...html.matchAll(/<meta name="description"/g),
  ]
  check(
    descriptions.length === 1,
    `${path}: expected 1 description, found ${descriptions.length}`,
  )

  const canonicals = [...html.matchAll(/rel="canonical" href="(.*?)"/g)]
  check(canonicals.length === 1, `${path}: expected 1 canonical`)
  check(
    canonicals[0]?.[1] === `https://freebg.app${path === '/' ? '/' : path}`,
    `${path}: canonical mismatch (${canonicals[0]?.[1]})`,
  )

  const hreflangs = [...html.matchAll(/hreflang="(.*?)"/g)].map((m) => m[1])
  check(
    hreflangs.includes('en') &&
      hreflangs.includes('es') &&
      hreflangs.includes('x-default'),
    `${path}: missing hreflang alternates (${hreflangs.join(',')})`,
  )

  const h1 = [...html.matchAll(/<h1[^>]*>/g)]
  check(h1.length === 1, `${path}: expected 1 <h1>, found ${h1.length}`)

  check(
    html.includes('application/ld+json'),
    `${path}: no structured data`,
  )

  // Prerendered markup must actually contain the rendered app, not an empty root.
  const start = html.indexOf('<div id="root">')
  const end = html.indexOf('</body>')
  const rootContent = start === -1 ? '' : html.slice(start, end)
  check(
    rootContent.length > 2000,
    `${path}: root looks empty (${rootContent.length} chars) — prerender did not run`,
  )
  check(
    rootContent.includes('<h1'),
    `${path}: prerendered markup has no <h1>`,
  )
}

for (const asset of [
  'sitemap.xml',
  'robots.txt',
  'manifest.webmanifest',
  'sw.js',
  'og-image.jpg',
  'icon-192.png',
  'icon-512.png',
  'samples/portrait.jpg',
  'samples/product.jpg',
  '_headers',
]) {
  try {
    const info = await stat(join(dist, asset))
    check(info.size > 0, `${asset} is empty`)
  } catch {
    problems.push(`missing asset: ${asset}`)
  }
}

if (problems.length > 0) {
  console.error('\nBuild verification failed:')
  for (const problem of problems) console.error(`  ✗ ${problem}`)
  process.exit(1)
}

console.log(`  verified ${paths.length} prerendered pages and static assets`)
