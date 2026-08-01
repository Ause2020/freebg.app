/**
 * Rebuilds the optimised assets in `public/` from the originals in `assets-src/`.
 * Run with `npm run assets` after changing any source image.
 */
import { mkdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'assets-src')
const out = join(root, 'public')

const BRAND = '#6C5CE7'

async function samples() {
  await mkdir(join(out, 'samples'), { recursive: true })

  const jobs = [
    ['sample-portrait.png', 'portrait.jpg'],
    ['sample-product.png', 'product.jpg'],
  ]

  for (const [from, to] of jobs) {
    const info = await sharp(join(src, from))
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(join(out, 'samples', to))
    console.log(`  samples/${to} — ${Math.round(info.size / 1024)} KB`)
  }
}

async function icons() {
  const source = join(src, 'freebg-icon.png')

  for (const size of [192, 512]) {
    const info = await sharp(source)
      .resize(size, size, { fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toFile(join(out, `icon-${size}.png`))
    console.log(`  icon-${size}.png — ${Math.round(info.size / 1024)} KB`)
  }

  // Maskable icons get cropped to a circle by the OS, so inset the artwork
  // into the central 80% safe zone over a solid brand background.
  const inner = await sharp(source).resize(410, 410, { fit: 'cover' }).png().toBuffer()
  const info = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: BRAND,
    },
  })
    .composite([{ input: inner, top: 51, left: 51 }])
    .png({ compressionLevel: 9 })
    .toFile(join(out, 'icon-maskable-512.png'))
  console.log(`  icon-maskable-512.png — ${Math.round(info.size / 1024)} KB`)

  const favicon = await sharp(source)
    .resize(180, 180, { fit: 'cover' })
    .png({ compressionLevel: 9 })
    .toFile(join(out, 'apple-touch-icon.png'))
  console.log(`  apple-touch-icon.png — ${Math.round(favicon.size / 1024)} KB`)
}

async function openGraph() {
  // Social crawlers cap the file size they will fetch, so ship a compact JPEG.
  const info = await sharp(join(src, 'og-image.png'))
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(join(out, 'og-image.jpg'))
  console.log(`  og-image.jpg — ${Math.round(info.size / 1024)} KB`)
}

await samples()
await icons()
await openGraph()
console.log('assets rebuilt')
