# FreeBG.app — Project Specification & Cursor Build Guide

**Domain:** freebg.app  
**Goal:** Free, unlimited, HD/4K background remover that runs 100% client-side (no uploads, no registration, no watermarks). Privacy-first. Optimized for AdSense later.

---

## 1. Core Vision & Value Proposition

- The tool appears **immediately** when the page loads (zero friction).
- Processing happens entirely in the user's browser (WebGPU / WASM).
- Images never leave the device.
- Full original resolution output (including 4K when the source allows).
- No daily limits, no watermarks, no signup.
- Clean, modern, fast UI focused on the tool itself.
- Strong SEO targeting: "free background remover", "remove background free no watermark", "quitar fondo gratis", "bg remover unlimited", "private background remover", etc.

---

## 2. Recommended Tech Stack (2026)

- **Framework:** Vite + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + some custom CSS for the canvas area
- **Background Removal Library:** `@imgly/background-removal` + `onnxruntime-web` (best quality/ease balance for client-side)
  - Models: `isnet_fp16` (default, good quality) and `isnet_quint8` (faster/lighter)
- **Alternatives if needed:** `@huggingface/transformers` + RMBG-1.4
- **UI extras:** `react-compare-image` or custom before/after slider, `jszip` (for future batch), `lucide-react` icons
- **Deployment:** Cloudflare Pages or Vercel (static)
- **Important headers for best performance:**
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
text> **Note on license:** `@imgly/background-removal` is AGPL. For a pure free AdSense tool it is commonly used, but be aware. If you want pure MIT later we can switch to a custom ONNX model.

---

## 3. MVP Feature List (Build in this order)

1. Landing page with the tool as the hero (drag & drop / click to upload)
2. Client-side background removal with progress indicator
3. Before/After comparison view
4. Download transparent PNG (full resolution)
5. Simple background replace (transparent / solid white / solid color)
6. Clear privacy messaging ("Runs 100% in your browser – your images never leave your device")
7. Basic responsive design + mobile support
8. SEO foundation (title, meta, Open Graph, structured data)
9. Loading states, error handling, model download progress
10. Very light footer with privacy note + future AdSense placeholders

**Later (Phase 2):**
- Batch processing + ZIP download
- Manual brush refinement
- Multiple model selection
- Spanish language support
- Blog / SEO content pages

---

## 4. Suggested Folder Structure
FreeBG/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroTool.tsx
│   │   ├── DropZone.tsx
│   │   ├── ProcessingOverlay.tsx
│   │   ├── ResultView.tsx
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── DownloadButton.tsx
│   │   ├── BackgroundOptions.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useBackgroundRemoval.ts
│   ├── lib/
│   │   └── backgroundRemoval.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── PROJECT.md          ← this file
text---

## 5. Sequential Build Prompts for Cursor

Copy and paste these prompts **one by one** into Cursor. Wait for each step to finish before moving to the next.

### Prompt 1 — Project Initialization
Create a new Vite + React + TypeScript project for freebg.app.
Requirements:

Use Vite + React 19 + TypeScript
Install and configure Tailwind CSS 4
Install: @imgly/background-removal onnxruntime-web lucide-react
Set up a clean basic structure with App.tsx, main.tsx and index.css
Configure vite.config.ts for optimal static build
Add the necessary COOP/COEP headers comment in vite config (we will set them on the host later)
Create a simple placeholder App that says "FreeBG – Free Background Remover"

text### Prompt 2 — Core Layout & Design System
Create the main layout and design system for freebg.app.
Design direction:

Clean, modern, minimal, professional tool aesthetic
Primary color: deep indigo / violet (#4F46E5)
Background: soft gray / white with subtle gradient
Dark mode ready (optional for later)
Excellent mobile experience
Large, obvious drop zone as the hero

Components to create:

Header (logo "FreeBG" + short tagline "Free • Unlimited • Private")
Footer (privacy note + "Runs 100% in your browser")
Basic responsive container

Use Tailwind. Make it look premium but not cluttered.
text### Prompt 3 — Drop Zone Component
Create a beautiful, accessible DropZone component.
Features:

Drag & drop + click to select
Accept image/* (jpg, png, webp, heic if possible)
Visual feedback on drag over
Show file name and size after selection
Maximum practical size warning (e.g. 20MB)
Clear "or click to browse" text
Make it the central element of the page

Export it cleanly so it can be used in the main HeroTool.
text### Prompt 4 — Background Removal Hook & Logic
Create a robust useBackgroundRemoval hook and supporting lib.
Requirements:

Use @imgly/background-removal
Default model: isnet_fp16 (good balance)
Show detailed progress (model download + processing)
Support WebGPU when available, fallback to WASM
Return the result as a Blob (PNG with transparency)
Proper error handling and cleanup of object URLs
Preload the model on first interaction or page load (with progress)
Keep the main thread free (consider Web Worker if needed later)

Make the API simple:
const { processImage, progress, status, result, error, reset } = useBackgroundRemoval()
text### Prompt 5 — Main Tool Experience (HeroTool)
Build the complete HeroTool component that combines everything.
Flow:

Empty state → DropZone
User selects image → show original preview + "Remove Background" button
Processing → nice progress overlay with percentage and status text
Result → Before/After view + download button + options to change background

States to handle cleanly: idle, loading-model, processing, success, error.
Make the experience feel instant and delightful.
text### Prompt 6 — Result View + Before/After + Download
Create the ResultView with:

Before/After comparison (slider preferred)
Big "Download PNG" button (full resolution, no watermark)
Option to set background: Transparent / White / Custom color
Ability to process another image easily
Show original dimensions and that it is full resolution

Use object URLs correctly and revoke them when no longer needed to avoid memory leaks.
text### Prompt 7 — Privacy & Trust Messaging
Add strong, visible privacy messaging throughout the UI:

Badge or pill near the tool: "100% Private – Images never leave your device"
Short explanation under the tool
Footer note reinforcing client-side processing

Tone: confident, transparent, technical enough to be credible but easy to understand.
text### Prompt 8 — SEO Foundation
Set up excellent SEO for freebg.app:

Proper <title> and meta description targeting main keywords
Open Graph + Twitter cards
Basic JSON-LD (SoftwareApplication)
Semantic HTML
Good heading structure (H1 = main benefit)
Favicon and basic public assets

Suggested title: "FreeBG – Free Unlimited Background Remover (No Watermark, Private)"
Suggested description: focus on free + unlimited + no upload + full HD/4K + privacy.
text### Prompt 9 — Polish, Loading States & Mobile
Polish the entire experience:

Beautiful loading states and skeleton
Smooth animations (keep them subtle)
Excellent mobile layout (tool must work great on phone)
Error messages that are helpful
Disable buttons while processing
Accessibility (keyboard, aria labels)
Performance: lazy load the heavy library if possible

text### Prompt 10 — Final README + Deployment Notes
Create a clear README.md with:

How to run locally
How to build
Environment notes
Deployment instructions for Cloudflare Pages / Vercel
Reminder about COOP/COEP headers for best WebGPU/WASM performance
Future roadmap (batch, brush, Spanish, etc.)

text---

## 6. UI/UX Guidelines

- The tool itself must be the first thing the user sees (above the fold).
- Primary action should be extremely obvious.
- Use generous white space.
- Progress must feel informative (not just a spinner).
- Never block the UI without feedback.
- Celebrate the result (nice download button, clear success state).

---

## 7. Key Copy (English first)

**Headline options:**
- Remove Backgrounds Free. Unlimited. Private.
- Free AI Background Remover – No Watermark, No Limits
- Your images never leave your device

**Subheadline:**
Full resolution • Runs in your browser • No signup required

---

## 8. Phase 2 Ideas (do not implement yet)

- Batch mode + ZIP
- Manual refinement brush
- Spanish version (`/es`)
- Multiple AI models selector
- Simple blog for SEO
- AdSense integration (carefully placed)