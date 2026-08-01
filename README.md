# FreeBG.app

Free, unlimited, full-resolution background remover that runs **100% in the browser**. No uploads, no accounts, no watermarks.

**Live:** [freebg.app](https://freebg.app)

The AI model is downloaded to the visitor's device and executed there. Nothing is ever transmitted to a server, which is why the tool can be genuinely unlimited and free — there is no per-image cost to recover.

---

## Features

- Drag & drop, file picker, or paste from the clipboard (`Ctrl` / `Cmd` + `V`)
- Client-side removal via `@imgly/background-removal` + ONNX Runtime Web (WebGPU, with a WASM fallback)
- Batch queue with ZIP download
- Before/after comparison slider (mouse, touch and keyboard)
- Background replacement: transparent, white, or any custom colour
- Export as PNG, JPG or WEBP at the original resolution
- Sample images so visitors can try the tool without uploading anything
- Light/dark theme with no flash on first paint
- Works offline after the first visit (service worker + cached model)
- Prerendered static HTML for every route, in English and Spanish

---

## Requirements

Node.js **20.19+** or **22.12+**. Vite 6 is pinned in this repo, which also runs on Node 20.17.

```bash
npm install
npm run dev
```

---

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server (no prerendering) |
| `npm run build` | Typecheck → client build → SSR build → prerender → verify |
| `npm run serve` | Serves `dist/` exactly like the production host |
| `npm run verify` | Asserts every page has real HTML, one canonical, hreflang and JSON-LD |
| `npm run assets` | Regenerates optimised images in `public/` from `assets-src/` |
| `npm run lint` | oxlint |
| `npm run typecheck` | `tsc -b` |

> Use `npm run serve`, not `vite preview`, to test a production build. `vite preview` collapses every unknown path onto the homepage, which masks prerendering and routing bugs.

---

## How prerendering works

The site is a static SPA that ships real HTML for every route, so crawlers and social scrapers never depend on JavaScript.

1. `vite build` produces the client bundle and `dist/index.html`, which contains `<!--app-head-start-->…<!--app-head-end-->` and `<!--app-html-->` markers.
2. `vite build --ssr src/entry-server.tsx` compiles a Node-side renderer into `.ssr/`.
3. `scripts/prerender.mjs` renders every route from `src/content/routes.ts`, injects the per-route `<head>`, and writes `dist/<path>/index.html`. It also emits `sitemap.xml` and the `404.html` fallback.
4. `scripts/verify-build.mjs` fails the build if any page is missing markup or SEO tags.

### Adding a page

1. Add a `RouteDef` to `src/content/routes.ts` (one entry per locale).
2. Add the matching `PageContent` to `src/i18n/en.ts` and `src/i18n/es.ts`.

Routing, navigation, hreflang alternates, the sitemap and the prerender list all derive from those two files — there is nothing else to wire up.

---

## Internationalisation

English lives at the root, Spanish under `/es`. Every page declares `hreflang` alternates plus `x-default`, and the language switcher in the header links to the current page's counterpart rather than dumping the visitor on the homepage.

---

## Deployment

The output in `dist/` is fully static. Any host works; these two are free.

### Cloudflare Pages (recommended)

- Build command: `npm run build`
- Output directory: `dist`
- `public/_headers` is copied into `dist/` and applies caching plus security headers automatically.

Cloudflare Pages resolves `/privacy` to `/privacy/index.html` natively, which is what the prerender step produces.

### Vercel

`vercel.json` sets the same headers and enables `cleanUrls`.

- Build command: `npm run build`
- Output directory: `dist`

### Analytics (optional)

Set `VITE_ANALYTICS_TOKEN` to a Cloudflare Web Analytics token to enable cookieless, aggregate analytics. When the variable is unset, no beacon is loaded at all — which is why the privacy policy can claim there are no cookies.

---

## Cross-origin isolation: a deliberate trade-off

`Cross-Origin-Opener-Policy: same-origin` + `Cross-Origin-Embedder-Policy: require-corp` unlock `SharedArrayBuffer`, which lets ONNX Runtime use multi-threaded WASM on the CPU path.

They are **intentionally not enabled**, because cross-origin isolation also blocks third-party embeds that do not opt in — including Google AdSense, the intended way to keep this project free to run.

The practical impact is small: modern browsers use the WebGPU path, which does not require isolation, and the WASM fallback still works single-threaded. You will see a console warning from ONNX Runtime about `numThreads`; that is expected.

To make the opposite trade, add both headers to the `/*` block in `public/_headers` (or `vercel.json`) and re-test ad rendering.

---

## Project structure

```
public/            static assets, headers, service worker, samples
assets-src/        image originals; `npm run assets` optimises them into public/
scripts/
  prerender.mjs      renders every route + sitemap + 404 fallback
  verify-build.mjs   post-build SEO and markup assertions
  serve.mjs          production-faithful static server
  generate-assets.mjs
src/
  content/         site constants and the route registry
  i18n/            en/es dictionaries and page copy
  seo/             head builder shared by prerender and client navigation
  components/      UI
  hooks/           background removal queue, theme, clipboard paste
  lib/             model wrapper, export/encoding, download, analytics
  entry-client.tsx / entry-server.tsx
```

---

## Privacy

No image ever leaves the device. You can verify this in the browser's Network tab, or by disconnecting from the internet after the model has loaded — the tool keeps working.

---

## Licence

Distributed under the **GNU AGPL v3.0** (see [`LICENSE`](./LICENSE)).

`@imgly/background-removal` is AGPL-3.0. Because this application is offered to users over a network, the AGPL's network clause requires that the complete corresponding source be made available to those users. That is why this repository is public and why the footer links to it on every page. If you fork or self-host FreeBG, keep that link pointing at *your* source.
