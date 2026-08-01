/**
 * Static preview server that resolves URLs the way Cloudflare Pages does:
 * `/privacy` → `dist/privacy/index.html`, with `404.html` as the fallback.
 * `vite preview` collapses every unknown path onto the homepage, which hides
 * prerendering bugs, so use this to verify a production build.
 */
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const port = Number(process.env.PORT ?? 4173)

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.wasm': 'application/wasm',
}

async function resolveFile(pathname) {
  const clean = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '')
  const target = join(dist, clean)

  const candidates = [
    target,
    join(target, 'index.html'),
    `${target}.html`,
  ]

  for (const candidate of candidates) {
    if (!candidate.startsWith(dist)) continue
    try {
      const info = await stat(candidate)
      if (info.isFile()) return candidate
    } catch {
      // try the next candidate
    }
  }
  return null
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://localhost:${port}`)
  let file = await resolveFile(url.pathname)
  let status = 200

  if (!file) {
    file = join(dist, '404.html')
    status = 404
  }

  const type = MIME[extname(file)] ?? 'application/octet-stream'
  res.writeHead(status, {
    'Content-Type': type,
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': file.endsWith('.html')
      ? 'no-cache'
      : 'public, max-age=31536000',
  })
  createReadStream(file).pipe(res)
})

server.listen(port, () => {
  console.log(`  serving dist/ on http://localhost:${port}`)
})
