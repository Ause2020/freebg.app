import type { Dictionary } from './types'

export const en: Dictionary = {
  nav: {
    home: 'Background Remover',
    guide: 'How-To Guide',
    productPhotos: 'Product Photos',
    profilePictures: 'Profile Pictures',
    removeBgAlternative: 'remove.bg Alternative',
    photoroomAlternative: 'Photoroom Alternative',
    noUpload: 'No Upload',
    amazonWhite: 'Amazon White Background',
    logo: 'Logo',
    screenshot: 'Screenshot',
    signature: 'Signature',
    removeBgShutdown: 'remove.bg Closing',
    privacy: 'Privacy',
    terms: 'Terms',
    contact: 'Contact',
    skipToTool: 'Skip to the background remover',
    menu: 'Menu',
    theme: 'Toggle dark mode',
  },
  tagline: 'Free • Unlimited • Private',
  badge: '100% Private – Images never leave your device',
  trustBadges: [
    '100% Private – Images never leave your device',
    'Unlimited free use',
    'No watermark',
    'HD & 4K ready',
  ],
  featureList: [
    'On-device background removal – no upload',
    'Free background remover no watermark',
    'Unlimited free use',
    'Full resolution HD and 4K output',
    'Private background remover in your browser',
    'Batch processing with ZIP download',
    'Works offline after first load',
  ],
  ogImageAlt:
    'freebg.app free HD background remover – unlimited, no watermark, private in-browser tool',

  contactForm: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send message',
    sending: 'Sending…',
    success: 'Thanks — your message is on its way. We will get back to you soon.',
    error: 'Something went wrong sending your message. Please try again in a moment.',
    required: 'Please fill in all fields.',
  },

  tool: {
    dropTitle: 'Drop an image here',
    dropActive: 'Drop your image here',
    dropBrowse: 'or click to browse',
    dropFormats: 'JPG, PNG, WEBP · Max 25MB',
    pasteHint: 'You can also paste an image with Ctrl + V',
    orTrySample: 'No image handy?',
    sample: 'Try a sample',
    samplePortrait: 'Portrait sample',
    samplePortraitAlt:
      'Sample portrait photo for testing the free background remover no watermark',
    sampleProduct: 'Product sample',
    sampleProductAlt:
      'Sample product photo for testing the private background remover online',
    remove: 'Remove Background',
    tryAgain: 'Try again',
    chooseAnother: 'Choose another',
    processAnother: 'Process another',
    cancel: 'Cancel',
    clear: 'Clear selection',
    loadingModel: 'Loading AI model',
    processing: 'Removing background',
    downloadingRuntime: 'Downloading runtime…',
    downloadingModel: 'Downloading AI model…',
    downloadingAssets: 'Downloading assets…',
    preparing: 'Preparing…',
    done: 'Done',
    fileTooLarge: (size, max) =>
      `That file is ${size}. The maximum size is ${max}.`,
    invalidType: 'Please choose a JPG, PNG or WEBP image.',
    heicUnsupported:
      'Your browser cannot open HEIC files. On iPhone, set Camera → Formats → Most Compatible, or convert the photo to JPG first.',
    compare: 'Compare before and after',
    before: 'Before',
    after: 'After',
    dragToCompare: 'Drag the slider to compare before and after',
    fullResolution: 'Full resolution – no quality loss',
    background: 'Background',
    transparent: 'Transparent',
    white: 'White',
    customColor: 'Custom colour',
    format: 'Format',
    download: 'Download',
    batchTitle: 'Batch queue',
    batchHint: 'Add several images and download them all as a ZIP.',
    batchDownloadZip: 'Download all as ZIP',
    batchProcessing: (done, total) => `Processing ${done} of ${total}…`,
    queued: 'Queued',
    failed: 'Failed',
    removeFromList: 'Remove from list',
    refine: 'Refine result',
    refineTitle: 'Magic eraser',
    refineHint: 'Brush over the image to touch up small mistakes — no editing skills needed.',
    eraseMode: 'Erase',
    eraseModeHint: 'Paint over leftover background to remove it.',
    restoreMode: 'Restore',
    restoreModeHint: 'Paint to bring back parts that were removed by mistake.',
    brushSize: 'Brush size',
    undo: 'Undo',
    redo: 'Redo',
    resetEdits: 'Reset',
    discard: 'Discard',
    applyEdits: 'Apply changes',
    applyingEdits: 'Applying…',
  },

  errors: {
    network:
      'The AI model could not be downloaded. Check your connection and try again.',
    memory:
      'This image is too large for your device to process. Try a smaller version.',
    gpu:
      'Graphics acceleration failed. Reload the page to retry with the compatibility engine.',
    decode:
      'That image could not be opened. It may be corrupted or in an unsupported format.',
    generic: 'Background removal failed. Please try another image.',
    boundaryTitle: 'Something went wrong',
    boundaryBody:
      'The page hit an unexpected error. Your images were never uploaded, so nothing was exposed.',
    boundaryAction: 'Reload the page',
    notFoundTitle: 'Page not found',
    notFoundBody:
      'The page you are looking for does not exist. The background remover is still one click away.',
    notFoundAction: 'Go to the background remover',
  },

  privacyNote:
    'Processing happens entirely on your device using browser-based AI. Your images are never uploaded, stored or shared — close the tab and they are gone.',

  footer: {
    heading: 'Runs 100% in your browser',
    body:
      'FreeBG removes backgrounds locally with on-device AI (WebGPU or WebAssembly). Nothing is uploaded to a server, so your photos stay on your device. No accounts, no watermarks, no daily limits.',
    product: 'Tools',
    useCases: 'Use cases',
    legal: 'Legal',
    moreTools: 'More free tools',
    openSource: 'Source code',
    sourceNote: 'Open source (AGPL-3.0)',
    contact: 'Contact',
    rights: 'All rights reserved.',
    comingSoon: 'Coming soon',
    sisters: {
      freepng: 'FreePNG – convert, resize & compress images',
      freepdf: 'FreePDF – merge, split & compress PDFs',
      freebg: 'FreeBG – remove image backgrounds',
    },
  },

  faqHeading: 'Frequently asked questions',

  pages: {
    home: {
      title:
        'Free Background Remover – Unlimited, No Watermark, Private (HD/4K) | freebg.app',
      description:
        'Remove image backgrounds free forever. No signup, no limits, no watermark. Runs 100% in your browser – photos never leave your device. Full HD & 4K support.',
      h1: 'Free Background Remover – Unlimited & Private',
      subtitle: 'No upload. No watermark. No registration. Full resolution.',
      intro:
        'freebg.app is a free background remover no watermark and no signup required. Remove background unlimited free, in full HD or 4K, with a private background remover that never uploads your photos. If you need a background remover no upload — or simply a free HD background remover that keeps quality intact — drop an image above and download a transparent PNG in seconds.',
      showTool: true,
      sections: [
        {
          heading: 'How it works',
          paragraphs: [
            'Unlike cloud editors, freebg.app is a background remover no upload by design. When you drop a photo, your browser loads a compact AI segmentation model (once) and runs it locally with WebGPU or WebAssembly. The pixels stay in your tab’s memory the whole time: decode → segment → export. Nothing is posted to freebg.app servers for analysis.',
            'That client-side pipeline is why you can remove background unlimited free. There is no per-image API bill on our side, so there is no fair-use quota, daily cap, or “preview only” trap. Progress indicators show when the model is downloading and when your image is being processed, so you always know what the tool is doing.',
            'After processing you get a before/after comparison and a prominent download button. Export keeps full resolution – no quality loss – whether you came in with a phone snapshot or a 4K product shot.',
          ],
        },
        {
          heading: 'Why freebg.app is different',
          paragraphs: [
            'Popular tools such as remove.bg and Photoroom are polished, but their free tiers usually upload your file, watermark the result, or downscale HD output until you buy credits. freebg.app is built as a free background remover no watermark alternative: unlimited free use, original resolution, and privacy by architecture — not by a checkbox in the settings.',
            'Because inference happens on-device, freebg.app can stay a private background remover without accounts, credit cards, or email gates. You get a free HD background remover experience that matches how people actually work: paste from the clipboard, batch a folder, refine edges with the magic eraser, then download a clean PNG.',
          ],
          bullets: [
            'Unlimited free use — remove background unlimited free with no daily quota.',
            'No watermark on previews or downloads, ever.',
            'Background remover no upload — your photos never leave your device.',
            'Full HD & 4K ready at the original pixel dimensions.',
            'Works offline after the model is cached in your browser.',
          ],
        },
        {
          heading: 'Privacy first: your images never leave your browser',
          paragraphs: [
            'Privacy is not a slogan here; it is the product constraint. A private background remover should not require trusting a third-party GPU farm with client work, kids’ photos, unreleased products, or ID-adjacent headshots. With freebg.app, the model comes to you. Close the tab and the image buffers are gone.',
            'You can verify the background remover no upload claim yourself: open DevTools → Network while you process an image and confirm that no request body contains your photo. After the first model download you can even go offline and keep working. That is the difference between “we promise not to look” and “we physically cannot see the file.”',
          ],
        },
        {
          heading: 'Perfect for',
          paragraphs: [
            'Whether you need marketplace-ready cut-outs or a quick social crop, freebg.app is a free HD background remover aimed at real workflows — not just demos.',
          ],
          subsections: [
            {
              heading: 'E-commerce product photos',
              paragraphs: [
                'Export pure white or transparent backgrounds for Amazon, Shopify, eBay and Etsy listings. Batch-process catalogues without burning credits on every SKU.',
              ],
            },
            {
              heading: 'Social media & creators',
              paragraphs: [
                'Clean thumbnails, stickers, YouTube art and story assets in seconds. Keep full resolution so crops still look sharp on retina screens.',
              ],
            },
            {
              heading: 'Designers & marketers',
              paragraphs: [
                'Drop subjects onto decks, ads and mockups as transparent PNGs. No watermark to scrub out before a client review.',
              ],
            },
            {
              heading: 'Profile pictures & headshots',
              paragraphs: [
                'Replace messy rooms with white, soft grey or brand colour for LinkedIn, CVs and team pages — without uploading your face to a cloud editor.',
              ],
            },
          ],
        },
        {
          heading: 'Supported formats and quality',
          paragraphs: [
            'Input: JPG, PNG and WEBP up to 25 MB. Output: transparent PNG by default (true alpha), or JPG/WEBP when you choose a solid background. The free HD background remover path preserves the original width and height, including 4K and larger frames limited only by device memory.',
            'Edges are produced by an IS-Net-class segmentation model — strong on people, products, animals and vehicles. Ultra-fine hair, glass and heavy blur remain hard for every automatic tool; switching to a solid fill or using the on-page refine brush usually solves what matters for publishing.',
            'After you export, continue with FreePNG (https://freepng.app) to convert, resize or compress, or FreePDF (https://freepdf.app) for documents — same private, on-device family of tools.',
          ],
          bullets: [
            'Transparent PNG keeps real alpha for compositing.',
            'Full resolution – no quality loss and no forced downscale.',
            'Batch queue with ZIP download for catalogue work.',
            'First run downloads ~40 MB of model assets, then caches them.',
          ],
        },
      ],
      howTo: {
        name: 'How to remove a background with freebg.app',
        steps: [
          {
            name: 'Add your image',
            text: 'Drag a JPG, PNG or WEBP onto the drop zone, click to browse, or paste from your clipboard with Ctrl + V. Nothing is uploaded.',
          },
          {
            name: 'Run the AI',
            text: 'Press "Remove Background". Watch the progress indicator while the model loads (first time) and while your image is processed locally.',
          },
          {
            name: 'Compare before and after',
            text: 'Use the slider to inspect edges, optionally refine with the magic eraser, then pick transparent, white or a custom colour.',
          },
          {
            name: 'Download at full resolution',
            text: 'Save as PNG, JPG or WEBP with full resolution – no quality loss and no watermark.',
          },
        ],
      },
      faq: [
        {
          q: 'Is freebg.app really a remove background unlimited free tool?',
          a: 'Yes. Processing runs on your device, so there is no server-side quota. You can remove background unlimited free — no trial clock, no credit packs and no paid tier gating resolution.',
        },
        {
          q: 'Is this a free background remover no watermark?',
          a: 'Yes. Downloads are clean full-resolution files with no watermark, badge or promotional overlay added by us.',
        },
        {
          q: 'Is freebg.app a private background remover / background remover no upload?',
          a: 'Yes. The AI model downloads to your browser and your image is processed there. It is a background remover no upload: you can confirm in the Network tab that the photo is never sent, and you can disconnect after the model loads and keep working.',
        },
        {
          q: 'Do I get a free HD background remover result, including 4K?',
          a: 'Yes. Output matches your input dimensions, including HD and 4K. Very large images are limited only by available memory on your device. Full resolution – no quality loss.',
        },
        {
          q: 'Which formats are supported?',
          a: 'JPG, PNG and WEBP for input. Download a transparent PNG, or JPG/WEBP when you pick a solid background. Convert HEIC from iPhones to JPG first — browsers cannot decode HEIC natively.',
        },
        {
          q: 'Do I need to register or create an account?',
          a: 'No. There is no signup, email wall or credit card. Open the page, drop an image, download the result.',
        },
        {
          q: 'Does it work on a phone and offline?',
          a: 'Yes on modern iOS and Android browsers (slower than desktop). After the first use the model is cached, so you can work offline on a plane or without signal.',
        },
        {
          q: 'How does freebg.app compare with remove.bg or Photoroom?',
          a: 'Those products are excellent cloud tools, but free tiers often upload images, watermark results or limit free resolution. freebg.app trades a one-time ~40 MB model download for unlimited, private, full-resolution processing at no cost — a strong free background remover no watermark alternative when privacy and volume matter.',
        },
      ],
      growth: {
        heading: 'Guides & comparisons',
        intro:
          'Guides and comparison pages you can open now — each one includes the same private tool above the fold.',
        links: [
          {
            title: 'How to remove a background from an image',
            description:
              'Step-by-step guide to a background remover no upload workflow at full resolution.',
            pageKey: 'guide',
          },
          {
            title: 'Product photo background remover',
            description:
              'White and transparent backgrounds for ecommerce catalogues — unlimited and free.',
            pageKey: 'productPhotos',
          },
          {
            title: 'Profile picture background remover',
            description:
              'Clean headshots for LinkedIn and CVs with a private background remover.',
            pageKey: 'profilePictures',
          },
          {
            title: 'Best free alternative to remove.bg',
            description:
              'What changes when remove.bg moves to Canva — and a no-upload HD replacement.',
            pageKey: 'removeBgAlternative',
          },
          {
            title: 'Photoroom alternative',
            description:
              'Cut-outs without the app, the account or the watermark.',
            pageKey: 'photoroomAlternative',
          },
          {
            title: 'How to remove a background without uploading',
            description:
              'Why on-device AI beats cloud uploads for sensitive photos and client work.',
            pageKey: 'noUpload',
          },
          {
            title: 'Amazon white background',
            description:
              'Pure RGB 255 white for marketplace main images — unlimited and local.',
            pageKey: 'amazonWhite',
          },
          {
            title: 'remove.bg is shutting down',
            description:
              'What happens on 1 December 2026 to the site, credits and API.',
            pageKey: 'removeBgShutdown',
          },
        ],
      },
    },

    guide: {
      title: 'How to Remove the Background From an Image (Free Guide)',
      description:
        'Step-by-step guide to removing image backgrounds for free, at full resolution and without uploading your photo. Works on desktop and mobile.',
      h1: 'How to remove the background from an image',
      subtitle:
        'A practical, no-nonsense guide — plus the free tool to do it right here.',
      intro:
        'Removing a background used to mean an hour with the pen tool in Photoshop. Today an AI segmentation model does the same job in a couple of seconds, and it can run entirely inside your browser. Here is how to do it well, and what to do when the automatic result is not perfect.',
      showTool: true,
      sections: [
        {
          heading: 'Start with a good source image',
          paragraphs: [
            'The single biggest quality factor is the original photo, not the tool. AI segmentation looks for the boundary between subject and background, so anything that makes that boundary obvious will improve your result.',
          ],
          bullets: [
            'Good, even lighting on the subject — avoid heavy shadows falling across the edges.',
            'Reasonable contrast between subject and background. A black jacket on a black sofa is the hardest possible case.',
            'Sharp focus on the subject. Motion blur destroys edge detail that cannot be recovered.',
            'The highest resolution you have. Downscale afterwards if you need to, never before.',
          ],
        },
        {
          heading: 'Pick the right output background',
          paragraphs: [
            'A transparent PNG is the most flexible option and the right choice when you will place the cut-out onto another design. But transparency also exposes every imperfect edge pixel.',
            'If the cut-out is going onto a solid colour anyway — a white product listing, a branded slide, a coloured poster — export it directly onto that colour. Soft or slightly imperfect edges blend into the fill and become invisible.',
          ],
        },
        {
          heading: 'Choose the right file format',
          bullets: [
            'PNG — the only option that keeps real transparency. Larger files. Use it for logos, overlays and anything you will composite later.',
            'JPG — smallest files, no transparency. Ideal for product photos on a white background where file size matters.',
            'WEBP — modern format, roughly 30% smaller than PNG at similar quality, supports transparency. Well supported by every current browser.',
          ],
        },
        {
          heading: 'When the automatic result is not perfect',
          paragraphs: [
            'Every automatic tool struggles with the same things: individual strands of hair against a detailed background, transparent or reflective materials such as glass and water, chain-link fences and other fine repeated structures, and heavy motion blur.',
          ],
          bullets: [
            'Switch to a solid background colour — this hides the vast majority of edge artefacts instantly.',
            'Crop tighter so the subject fills more of the frame, then run it again.',
            'Re-shoot against a contrasting background if the image matters and you can.',
            'For a small number of critical images, use the automatic cut-out as a starting mask and clean it up in an editor.',
          ],
        },
        {
          heading: 'A note on privacy',
          paragraphs: [
            'Most free background removers upload your image to their servers. That is fine for a photo of a coffee mug, and a genuine problem for ID documents, medical images, client work under NDA, or photos of children.',
            'FreeBG processes images locally in your browser, so the file never leaves your device. If you handle sensitive images, prefer any tool that can demonstrate this — you can verify it yourself in the browser Network tab.',
          ],
        },
      ],
      howTo: {
        name: 'How to remove the background from an image for free',
        steps: [
          {
            name: 'Open the tool',
            text: 'Open FreeBG in any modern browser. There is nothing to install and no account to create.',
          },
          {
            name: 'Add your photo',
            text: 'Drag the image onto the drop zone, click to browse your files, or paste a copied image with Ctrl + V.',
          },
          {
            name: 'Remove the background',
            text: 'Click "Remove Background" and wait a few seconds while the AI model runs on your device.',
          },
          {
            name: 'Compare and adjust',
            text: 'Drag the before/after slider to check the edges, then choose a transparent, white or custom-colour background.',
          },
          {
            name: 'Download the result',
            text: 'Download as PNG, JPG or WEBP at the original full resolution, with no watermark.',
          },
        ],
      },
      faq: [
        {
          q: 'How long does it take?',
          a: 'A few seconds per image on a modern computer once the model has loaded. The very first run also downloads about 40 MB of model files, which takes longer depending on your connection.',
        },
        {
          q: 'Can I remove backgrounds from several images at once?',
          a: 'Yes. Add multiple files and FreeBG will process them in a queue, then let you download everything as a single ZIP.',
        },
        {
          q: 'Will it work on my phone?',
          a: 'Yes, on current versions of Safari, Chrome and Firefox. Processing takes longer than on a laptop and extremely large images may run out of memory on older devices.',
        },
        {
          q: 'Do I need Photoshop for a better result?',
          a: 'Usually not. For difficult edges, exporting onto a solid background colour solves the problem far more quickly than manual masking.',
        },
      ],
    },

    productPhotos: {
      title: 'Product Photo Background Remover – Free White Background',
      description:
        'Turn product photos into clean white or transparent backgrounds for Amazon, Shopify, eBay and Etsy. Free, unlimited, full resolution, no uploads.',
      h1: 'Product photo background remover',
      subtitle:
        'Clean white or transparent backgrounds for your listings — free and unlimited.',
      intro:
        'Marketplace listings convert better with consistent, distraction-free product images, and most marketplaces require a pure white background for the main image. FreeBG gives you that in seconds per photo, at full resolution, for an entire catalogue, without per-image credits.',
      showTool: true,
      sections: [
        {
          heading: 'What the marketplaces actually require',
          bullets: [
            'Amazon — the main image must be on a pure white background (RGB 255, 255, 255), with the product filling around 85% of the frame.',
            'eBay — a plain white or very light background is strongly recommended for the gallery image.',
            'Shopify and Etsy — no hard requirement, but consistent backgrounds across a collection look far more professional.',
            'Google Shopping — no watermarks, borders or promotional text on the product image.',
          ],
          paragraphs: [
            'Exporting straight onto white with FreeBG produces exactly the pure white that these rules ask for, which a photo of a white backdrop rarely does on its own.',
          ],
        },
        {
          heading: 'A workflow that scales to a whole catalogue',
          bullets: [
            'Shoot everything under the same lighting so colour stays consistent between products.',
            'Drop the whole batch into the tool and let the queue process them one after another.',
            'Choose the white background option so every image gets an identical, exact white.',
            'Export as JPG for listing images — smaller files, faster page loads, better rankings.',
            'Download the ZIP and upload the folder straight to your store.',
          ],
        },
        {
          heading: 'Why local processing matters for sellers',
          paragraphs: [
            'A product catalogue is commercially sensitive. Unreleased products, supplier packaging and pricing sheets in the frame are all things you may not want sitting on a third-party server, and many free tools reserve broad rights over uploaded content in their terms.',
            'Because FreeBG never transmits your files, there is nothing to leak, retain or license. Your photos stay on the machine you edited them on.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is the white background pure white?',
          a: 'Yes. Selecting the white background option fills with exact RGB 255, 255, 255, which is what Amazon and other marketplaces specify.',
        },
        {
          q: 'How many photos can I process?',
          a: 'As many as you like. There is no quota, because the processing happens on your computer rather than on our servers.',
        },
        {
          q: 'Does it handle reflective or transparent products?',
          a: 'Glass, jewellery and highly reflective metal are the hardest cases for any automatic tool. Exporting onto white usually produces a perfectly usable listing image regardless, since the background behind the transparent areas is white too.',
        },
        {
          q: 'Can I keep a shadow under the product?',
          a: 'Not automatically — the model removes everything it identifies as background, including cast shadows. If shadows matter for your brand, composite the cut-out over a shadow layer in an editor afterwards.',
        },
      ],
    },

    profilePictures: {
      title: 'Profile Picture Background Remover – Free & Private',
      description:
        'Remove the background from a headshot for LinkedIn, CVs and team pages. Free, unlimited, full resolution and processed privately in your browser.',
      h1: 'Profile picture background remover',
      subtitle:
        'A clean, professional headshot in seconds — without uploading your face to anyone.',
      intro:
        'A cluttered kitchen behind you undermines an otherwise good headshot. Replacing that background with a clean colour is the single fastest way to make a profile photo look deliberate and professional, and it takes about five seconds.',
      showTool: true,
      sections: [
        {
          heading: 'Which background colour to choose',
          bullets: [
            'White — safe, neutral and works everywhere. The default choice for CVs and corporate directories.',
            'Light grey or soft blue — slightly warmer than white and still conservative. Popular for LinkedIn.',
            'Your brand colour — excellent for team pages, speaker bios and conference profiles where consistency matters.',
            'Transparent PNG — use this when the photo will be placed onto a design you control.',
          ],
        },
        {
          heading: 'Getting the best result from a headshot',
          bullets: [
            'Face a window. Soft, even, front-on daylight beats any indoor lighting you own.',
            'Put some distance between you and the wall behind you to reduce harsh shadows on the edges.',
            'Avoid hair colours that closely match the background — the edge becomes much harder to detect.',
            'Frame from mid-chest up, and leave a little headroom so the crop is flexible later.',
          ],
        },
        {
          heading: 'Why you should care where your face is processed',
          paragraphs: [
            'A photo of your face is biometric data. Under GDPR it is a special category of personal data when it is used to identify you, and it is exactly the kind of file worth keeping off third-party servers by default.',
            'FreeBG never transmits the image. The model comes to your browser rather than your face going to a server, which means there is no copy of your photo anywhere to be retained, sold or breached.',
          ],
        },
      ],
      faq: [
        {
          q: 'Does it handle hair well?',
          a: 'Generally yes, for typical portraits. Loose flyaway strands against a busy background are the hardest case; exporting onto a solid colour rather than transparency hides almost all of the remaining imperfection.',
        },
        {
          q: 'Can I use this for a passport or ID photo?',
          a: 'It produces the clean background such photos require, but official documents have strict rules on head size, expression, shadows and print dimensions. Always check the issuing authority\'s specification before submitting.',
        },
        {
          q: 'Will it work with glasses?',
          a: 'Yes. Frames are handled well. Strong reflections in the lenses can occasionally confuse the edge detection, so shoot with the light slightly to one side if you can.',
        },
        {
          q: 'Is my photo stored anywhere?',
          a: 'No. It is read into your browser\'s memory, processed there, and discarded when you close the tab. Nothing is transmitted, logged or retained.',
        },
      ],
    },

    removeBgAlternative: {
      title:
        'remove.bg Alternative – Free, Unlimited, No Upload | freebg.app',
      description:
        'Free remove.bg alternative after the Canva move. Unlimited HD cut-outs, no watermark, no signup. Photos stay in your browser.',
      h1: 'A free remove.bg alternative that never uploads your photo',
      subtitle:
        'Unlimited HD downloads, no watermark, no Canva account. The tool is right above.',
      intro:
        'remove.bg is moving into Canva. Its standalone site stops on 1 December 2026 at 9:00 a.m. CET, unused credits expire the same morning, and the self-serve API moves to Leonardo.Ai. If you need a remove.bg alternative that stays a simple web tool — free, unlimited and private — drop an image above. freebg.app runs the cut-out in your browser so the file never leaves your device.',
      showTool: true,
      sections: [
        {
          heading: 'What is changing at remove.bg',
          paragraphs: [
            'Canva acquired remove.bg in 2021. In 2026 it is folding the consumer product into Canva and retiring the standalone website. That is a real problem if you liked a one-purpose page: open, drop, download. Canva is a design suite. Leonardo.Ai is an API platform. Neither is “paste a product shot and get a transparent PNG with no account.”',
            'If you still hold pay-as-you-go credits, spend them before 1 December 2026. remove.bg’s own terms say unused credits expire that day and are not refunded or transferred to Canva.',
          ],
        },
        {
          heading: 'freebg.app vs remove.bg',
          paragraphs: [
            'remove.bg set the quality bar for cloud cut-outs. It also uploads every image, meters HD downloads, and now requires you to follow the brand into another product. freebg.app is the opposite architecture: the model downloads once (~40 MB), then your CPU or GPU does the work. That is why this remove.bg alternative can stay unlimited and free.',
          ],
          bullets: [
            'Upload — remove.bg sends the file to a server. freebg.app never does.',
            'Price — remove.bg credits expire; freebg.app has no credits, ever.',
            'Watermark / resolution — freebg.app exports original pixels, including HD and 4K, with no watermark.',
            'Account — none here. Canva/remove.bg want you inside their platform.',
            'Batch — queue images locally and download a ZIP. No per-image invoice.',
            'Offline — after the first model download, this tab keeps working without a network.',
          ],
        },
        {
          heading: 'When you should still use Canva or remove.bg',
          paragraphs: [
            'Use Canva if you already live there and need the cut-out inside a larger design. Use a cloud API if you process tens of thousands of images on a server. Use freebg.app when you want a private, unlimited, no-watermark remove.bg alternative for catalogues, client work, kids’ photos or anything you would rather not put on someone else’s GPU.',
          ],
        },
        {
          heading: 'How to switch in under a minute',
          paragraphs: [
            'There is nothing to migrate. Bookmarks that pointed at remove.bg can point here. Paste or drop the same JPG, PNG or WEBP files you used before. Download a transparent PNG, or export straight onto white for Amazon-style listings. If you also need resize or compress after the cut-out, continue on FreePNG.',
          ],
        },
      ],
      howTo: {
        name: 'How to replace remove.bg with a no-upload tool',
        steps: [
          {
            name: 'Open this page',
            text: 'Stay here — the background remover is the block above. No Canva account and no credit pack.',
          },
          {
            name: 'Add the same images you used on remove.bg',
            text: 'Drag, browse or paste. Several files go into a local queue.',
          },
          {
            name: 'Remove the background on your device',
            text: 'The AI runs in this tab. Watch the progress bar; nothing is posted to a server.',
          },
          {
            name: 'Download HD output',
            text: 'Save PNG, JPG or WEBP at the original resolution, with no watermark.',
          },
        ],
      },
      faq: [
        {
          q: 'Is remove.bg really shutting down?',
          a: 'The standalone website is scheduled to stop on 1 December 2026 at 9:00 a.m. CET. Background removal moves into Canva; the self-serve API moves to Leonardo.Ai. Enterprise API contracts are a separate case — check remove.bg’s own FAQ.',
        },
        {
          q: 'Will my remove.bg credits transfer to Canva?',
          a: 'No. Unused PAYG and other credits expire on 1 December 2026 and are not refunded. Spend the balance before that morning if you still have one.',
        },
        {
          q: 'Is freebg.app a full-quality remove.bg alternative?',
          a: 'It uses an on-device IS-Net-class model. People, products, animals and vehicles come out well. Hair, glass and motion blur are hard for every automatic tool, including paid cloud ones. Export onto white or use the refine brush when an edge is imperfect.',
        },
        {
          q: 'Do I need an account to download HD?',
          a: 'No. HD and 4K are not gated. There is no free-preview watermark.',
        },
        {
          q: 'Are my images uploaded like on remove.bg?',
          a: 'No. This is a background remover no upload. Confirm in DevTools → Network: your photo is not in any request body.',
        },
        {
          q: 'Can I use the result commercially?',
          a: 'Yes. We add no watermark and claim no licence over your files. You still need the rights to the original photo.',
        },
      ],
    },

    photoroomAlternative: {
      title:
        'Photoroom Alternative – Free, No Watermark, Private | freebg.app',
      description:
        'Free Photoroom alternative for cut-outs. No app, no signup, no watermark. Unlimited HD in your browser — photos never leave your device.',
      h1: 'A free Photoroom alternative for simple, private cut-outs',
      subtitle:
        'No app install. No credits. Full resolution in the browser.',
      intro:
        'Photoroom is a strong product studio: backgrounds, shadows, batches and a polished mobile app. That power is also the lock-in — accounts, uploads and a paid plan when you outgrow the free tier. If you only need a Photoroom alternative for “remove background, download PNG,” freebg.app does that job with no app and no upload.',
      showTool: true,
      sections: [
        {
          heading: 'What Photoroom is good at',
          paragraphs: [
            'Photoroom shines when you want a full listing studio: generated scenes, branded shadows, team templates and a phone-first workflow. If that is your daily job, keep paying for it. This page is for the other case: you opened Photoroom (or a clone) just to knock out a background and hit a watermark, a resize, or an upload you did not want.',
          ],
        },
        {
          heading: 'freebg.app vs Photoroom',
          bullets: [
            'Install — Photoroom wants the app or a logged-in web workspace. freebg.app is this page.',
            'Upload — Photoroom processes in the cloud. freebg.app is a private background remover: pixels stay in the tab.',
            'Cost — Photoroom’s free tier is a funnel. freebg.app has one tier: unlimited and free.',
            'Watermark / HD — downloads here are clean and match the original resolution, including 4K.',
            'Batch — local queue + ZIP, no credit burn per SKU.',
            'Studio features — Photoroom wins on AI scenes and brand kits. We do not pretend otherwise.',
          ],
        },
        {
          heading: 'Who this Photoroom alternative is for',
          subsections: [
            {
              heading: 'Sellers who only need a white background',
              paragraphs: [
                'Export onto exact white (RGB 255, 255, 255) for Amazon-style main images, or keep transparency for Shopify overlays. Process a folder without a monthly seat.',
              ],
            },
            {
              heading: 'Designers who refuse another SaaS',
              paragraphs: [
                'Drop a subject, download a transparent PNG, finish in Figma, Canva or Photoshop. No watermark to scrub before a client review.',
              ],
            },
            {
              heading: 'Anyone sending faces or unreleased products',
              paragraphs: [
                'A headshot or a pre-launch SKU does not belong on a third-party GPU by default. On-device inference is the conservative choice.',
              ],
            },
          ],
        },
        {
          heading: 'Quality, honestly',
          paragraphs: [
            'Photoroom’s cloud models are tuned for merch and portraits and can beat a single in-browser model on hair, jewellery and glass. For everyday products, people and pets, an IS-Net-class local model is good enough to publish. Soft edges disappear if you export onto a solid fill. The refine brush covers leftover patches.',
            'After the cut-out, resize or compress on FreePNG if the marketplace has a file-size cap.',
          ],
        },
      ],
      howTo: {
        name: 'How to remove a background without Photoroom',
        steps: [
          {
            name: 'Stay on this page',
            text: 'No app store, no email gate. The drop zone is above.',
          },
          {
            name: 'Add one image or a batch',
            text: 'JPG, PNG or WEBP. Paste from the clipboard if the file is already copied.',
          },
          {
            name: 'Run the local model',
            text: 'First run caches about 40 MB. After that, each cut-out starts immediately.',
          },
          {
            name: 'Download a clean file',
            text: 'Transparent PNG, or JPG/WEBP on white or a custom colour. Full resolution, no watermark.',
          },
        ],
      },
      faq: [
        {
          q: 'Is this a real Photoroom alternative or just a landing page?',
          a: 'The same tool as the homepage runs above. It is a focused cut-out, not a Photoroom clone with scenes and brand kits.',
        },
        {
          q: 'Does Photoroom upload my photos?',
          a: 'Yes — cloud editing requires the file on their servers. freebg.app does not upload the image. You can verify that in the Network tab.',
        },
        {
          q: 'Will I get a watermark on the free plan?',
          a: 'There is no free plan here. Every download is unwatermarked.',
        },
        {
          q: 'Can I batch like Photoroom?',
          a: 'Yes, locally. Add several files, wait for the queue, download a ZIP.',
        },
        {
          q: 'Does it work on iPhone?',
          a: 'Yes in Safari or Chrome. Convert HEIC to JPG first (Camera → Formats → Most Compatible), or the browser cannot open the file.',
        },
        {
          q: 'Can I keep Photoroom for design and use this for volume?',
          a: 'Yes. Many people keep a paid studio for campaigns and use a no-upload tool for bulk SKUs and sensitive shots.',
        },
      ],
    },

    noUpload: {
      title:
        'How to Remove a Background Without Uploading | freebg.app',
      description:
        'Remove a background without uploading the photo. On-device AI, no account, no watermark. Full HD and 4K stay on your device.',
      h1: 'How to remove a background without uploading your photo',
      subtitle:
        'On-device AI. Nothing leaves this tab. Full resolution download.',
      intro:
        'Most “free background removers” are upload forms with a GPU on the other end. That is fine for a coffee mug. It is a bad default for ID-adjacent headshots, kids, client work under NDA, or an unreleased product. A background remover no upload flips the model: the AI comes to your browser, the pixels never leave.',
      showTool: true,
      sections: [
        {
          heading: 'Why “no upload” is not a slogan',
          paragraphs: [
            'If the file crosses the network, you are trusting logs, backups, staff access, subprocessors and a terms-of-service clause you did not read. GDPR treats a face as biometric data when it identifies you. Marketplace catalogues leak launch dates. School photos should not train someone else’s model.',
            'freebg.app is a private background remover by architecture. Decode, segment and export happen in this tab with WebGPU or WebAssembly. Close the tab and the buffers are gone.',
          ],
        },
        {
          heading: 'How to verify that nothing was uploaded',
          bullets: [
            'Open DevTools → Network before you drop the file.',
            'Process the image. You should see the one-time model/runtime download, not a POST that contains your photo.',
            'After the model is cached, disconnect Wi-Fi and run another image. If it still works, the pixels never needed a server.',
            'Nothing in the address bar should look like an upload API for your bitmap.',
          ],
        },
        {
          heading: 'Step-by-step: cut-out without the cloud',
          paragraphs: [
            'Use the tool above. Drag a JPG, PNG or WEBP, or paste with Ctrl + V. Click Remove Background. Compare before and after, optionally paint leftovers with the magic eraser, then download a transparent PNG at the original size. That is the whole workflow — the same one described on our how-to guide, minus any third-party server.',
          ],
        },
        {
          heading: 'When a cloud tool is still the right call',
          paragraphs: [
            'Upload-based editors can win on the hardest hair, glass and jewellery, and they scale to huge server batches. Use them for public marketing assets you would post anyway. Prefer no-upload for anything you would not attach to a random email.',
            'If you came here from a remove.bg or Photoroom comparison, the same on-device engine is on those pages too.',
          ],
        },
      ],
      howTo: {
        name: 'How to remove a background without uploading',
        steps: [
          {
            name: 'Keep the file on your device',
            text: 'Do not email it to a web app. Drop it on the zone above so it is only read into memory.',
          },
          {
            name: 'Let the model download once',
            text: 'About 40 MB of AI assets are cached by the browser. That is the only required network step.',
          },
          {
            name: 'Process locally',
            text: 'Watch the progress indicator. Segmentation runs on your CPU or GPU inside this tab.',
          },
          {
            name: 'Optional: go offline and retry',
            text: 'After the cache is warm, disconnect and process a second image to prove the background remover no upload claim.',
          },
          {
            name: 'Download the PNG',
            text: 'Full resolution, no watermark. Close the tab when you are done — nothing remains on a server because nothing was sent.',
          },
        ],
      },
      faq: [
        {
          q: 'Is a background remover no upload actually possible?',
          a: 'Yes. In-browser ONNX / WebAssembly models have been good enough for everyday cut-outs for years. The trade-off is a first-visit download and more load on your device.',
        },
        {
          q: 'Can you see my image anyway?',
          a: 'No. It is never transmitted to freebg.app. We could not store or train on it if we wanted to.',
        },
        {
          q: 'Does “no upload” mean it works offline?',
          a: 'After the first visit, yes. The model and app are cached. The first visit still needs a network to fetch those files.',
        },
        {
          q: 'What about the sample images?',
          a: 'Samples are public files on this site. Your own photo is not sent when you use the drop zone.',
        },
        {
          q: 'Is this the same as a VPN or “incognito upload”?',
          a: 'No. Incognito still uploads. A VPN still uploads. No upload means the bitmap never becomes an HTTP body.',
        },
        {
          q: 'Which formats stay local?',
          a: 'JPG, PNG and WEBP. HEIC must be converted on-device first because browsers cannot decode it natively.',
        },
        {
          q: 'Can I do this on a phone?',
          a: 'Yes on current Safari and Chrome. Very large 4K files may run out of memory on older phones.',
        },
      ],
    },

    amazonWhite: {
      title:
        'Amazon White Background Remover – Free RGB 255 | freebg.app',
      description:
        'Make Amazon-ready white backgrounds free. Pure RGB 255, 255, 255, no upload, no watermark. Unlimited HD for Shopify and eBay too.',
      h1: 'Amazon white background – free, exact white, no upload',
      subtitle:
        'RGB 255, 255, 255. Full resolution. No credits per SKU.',
      intro:
        'Amazon’s main image rules are picky: the product on a pure white background, filling most of the frame, no watermark, no promo text. A photo of a “white” backdrop is almost never RGB 255, 255, 255. Drop a shot above, choose White, download. That is an Amazon white background without uploading your catalogue.',
      showTool: true,
      sections: [
        {
          heading: 'What Amazon actually checks',
          bullets: [
            'Main image: pure white background (RGB 255, 255, 255).',
            'Product should fill about 85% of the frame and be fully visible.',
            'No watermarks, badges, inset pictures or promotional copy on the file.',
            'Google Shopping and many 3P tools reject the same junk.',
          ],
          paragraphs: [
            'eBay prefers a plain light background. Shopify and Etsy are looser, but a consistent white set still converts better. Exporting onto exact white here beats photographing a wrinkled sweep.',
          ],
        },
        {
          heading: 'A catalogue workflow that does not burn credits',
          paragraphs: [
            'Cloud tools charge per image once you leave the free tier. Because this runs on your machine, you can process a season of SKUs in one sitting. Shoot under the same light, drop the batch, pick White, download the ZIP, upload to Seller Central or Shopify.',
            'Need a smaller JPG after the cut-out? Compress on FreePNG so listing pages load faster.',
          ],
        },
        {
          heading: 'Why sellers should care about no-upload',
          paragraphs: [
            'Unreleased products, supplier cartons and price stickers in the frame are commercially sensitive. Many free removers claim broad rights over anything you upload. Here the file never leaves the tab — the same private path as our product-photo page, tuned for marketplace white.',
          ],
        },
      ],
      howTo: {
        name: 'How to make an Amazon white background',
        steps: [
          {
            name: 'Drop the product photo',
            text: 'JPG, PNG or WEBP. Add several SKUs if you want a queue.',
          },
          {
            name: 'Remove the background',
            text: 'The model runs locally. Wait for the progress bar.',
          },
          {
            name: 'Choose White',
            text: 'That fill is exact RGB 255, 255, 255 — the Amazon main-image spec.',
          },
          {
            name: 'Download JPG or PNG',
            text: 'JPG is usually smaller for listings. No watermark is added.',
          },
        ],
      },
      faq: [
        {
          q: 'Is the white really Amazon white?',
          a: 'Yes. The White option fills with RGB 255, 255, 255, which is what Amazon specifies for the main image.',
        },
        {
          q: 'Will this pass Seller Central?',
          a: 'It solves the background colour rule. You still need correct crop, focus and no text on the image. Always re-read the current Amazon image help page for your category.',
        },
        {
          q: 'Can I keep a soft shadow?',
          a: 'Not automatically. The model treats cast shadows as background. Composite a shadow later if your brand needs it.',
        },
        {
          q: 'Glass and jewellery?',
          a: 'Hard for every automatic tool. Exporting onto white still produces a usable listing because transparent areas become white too.',
        },
        {
          q: 'Shopify and eBay as well?',
          a: 'Yes. Same white file works on Shopify, eBay, Etsy and Google Shopping.',
        },
        {
          q: 'Is there a per-image fee?',
          a: 'No. Unlimited SKUs, no account.',
        },
      ],
    },

    logo: {
      title:
        'Remove Background From a Logo – Free Transparent PNG | freebg.app',
      description:
        'Remove a logo background free. Transparent PNG, no watermark, no upload. Keep brand files on your device — HD and original size.',
      h1: 'Remove the background from a logo – free transparent PNG',
      subtitle:
        'No upload of brand assets. Full resolution. No watermark.',
      intro:
        'A logo on a white rectangle looks amateur the moment you drop it on a dark slide or a website. You want a real transparent PNG. Cloud removers also mean your trademark file sits on someone else’s disk. This page is a background remover no upload for marks, wordmarks and icons.',
      showTool: true,
      sections: [
        {
          heading: 'What works well',
          bullets: [
            'Solid wordmarks and icons on a plain studio or paper background.',
            'Sticker-style logos photographed on a desk (crop tight first).',
            'App icons and badges you only have as a flattened JPG.',
          ],
          paragraphs: [
            'Vector SVG is still better when you have the source. Use this tool when the only file you were sent is a photo or a PNG with a box around it.',
          ],
        },
        {
          heading: 'What to watch',
          paragraphs: [
            'Thin script, knockout type and drop shadows confuse every segmentation model. If the mark is black on white, you may get a cleaner result in a vector tracer. If it is a coloured badge on a busy photo, crop so the logo fills the frame, run it, then refine leftover pixels with the brush.',
            'Do not upload brand guidelines packs to random “free logo background” sites. Here the file stays in the tab. After export, resize or convert on FreePNG if you need a favicon or a small header asset.',
          ],
        },
      ],
      howTo: {
        name: 'How to remove a logo background',
        steps: [
          {
            name: 'Crop tight',
            text: 'Give the model as little desk, screenshot chrome or poster as possible.',
          },
          {
            name: 'Drop the file above',
            text: 'PNG or JPG. Nothing is sent to a server.',
          },
          {
            name: 'Keep transparency',
            text: 'Leave the background on Transparent so you get a real alpha PNG.',
          },
          {
            name: 'Check edges',
            text: 'Use the before/after slider and the refine brush on leftover corners.',
          },
        ],
      },
      faq: [
        {
          q: 'Will it turn a JPG logo into a real transparent PNG?',
          a: 'Yes. Output is a PNG with an alpha channel when you leave the background on Transparent.',
        },
        {
          q: 'Should I use this instead of Illustrator?',
          a: 'No, if you have vectors. Yes, if the only asset is a photo or a flattened export.',
        },
        {
          q: 'Can I do a whole brand pack?',
          a: 'Add multiple files and download a ZIP. Still local, still unlimited.',
        },
        {
          q: 'Is my trademark uploaded?',
          a: 'No. Same no-upload pipeline as the rest of freebg.app.',
        },
        {
          q: 'Fine text looks chewed',
          a: 'Export onto the colour you will actually place it on, or trace it in a vector tool. Automatic cut-outs struggle with hairline type.',
        },
        {
          q: 'SVG input?',
          a: 'Browsers do not treat SVG as a bitmap drop. Export a high-resolution PNG from your design app first, or keep the SVG.',
        },
      ],
    },

    screenshot: {
      title:
        'Remove Background From a Screenshot – Free PNG | freebg.app',
      description:
        'Remove a screenshot background free. Isolate UI, windows or phone screens. No upload, no watermark, full resolution PNG.',
      h1: 'Remove the background from a screenshot',
      subtitle:
        'Isolate a window, phone or UI. Nothing leaves the browser.',
      intro:
        'Docs, landing pages and app-store assets often need one window or phone — not the messy desktop behind it. A screenshot background remover should not upload product UI you have not shipped. Drop the capture above; keep the chrome you want, lose the wallpaper.',
      showTool: true,
      sections: [
        {
          heading: 'Best source captures',
          bullets: [
            'A single window with a clear edge against the wallpaper.',
            'A phone or laptop mockup that is not cropped through the bezel.',
            'Dark UI on a light desktop, or the reverse — contrast helps.',
          ],
          paragraphs: [
            'OS shadows and rounded corners are the hard part. If the model eats a shadow you wanted, restore it with the brush or drop the PNG onto a new shadow in Figma. If it leaves wallpaper in the corners, erase those patches.',
          ],
        },
        {
          heading: 'When not to use a cut-out',
          paragraphs: [
            'If you need a pixel-perfect device frame, a designed mockup kit is cleaner. Use this when you have a real capture and ten minutes, not a design system. For slides and Notion docs, a slightly soft edge on a solid slide colour disappears.',
          ],
        },
      ],
      howTo: {
        name: 'How to cut a screenshot off the desktop',
        steps: [
          {
            name: 'Capture one subject',
            text: 'One window or one device. Hide extra panels first.',
          },
          {
            name: 'Drop the PNG or JPG',
            text: 'Processing stays in this tab — useful for unreleased UI.',
          },
          {
            name: 'Compare edges',
            text: 'Check rounded corners and the OS shadow on the slider.',
          },
          {
            name: 'Export transparent or solid',
            text: 'Transparent for mockups; a brand colour for slides.',
          },
        ],
      },
      faq: [
        {
          q: 'Will it keep rounded window corners?',
          a: 'Usually yes when contrast is decent. Refine if a corner is squared off.',
        },
        {
          q: 'Can I isolate a region of the UI, not the whole window?',
          a: 'Crop first, then run the tool. It looks for one main subject.',
        },
        {
          q: 'Retina screenshots?',
          a: 'Full resolution is kept. Very large 5K captures may strain older laptops.',
        },
        {
          q: 'Is unpublished UI uploaded?',
          a: 'No. That is the point of a screenshot workflow on freebg.app.',
        },
        {
          q: 'Browser chrome in the shot',
          a: 'Crop the address bar out before you drop the file if you only want the page.',
        },
        {
          q: 'Video stills?',
          a: 'A single frame as JPG/PNG works. We do not process video files.',
        },
      ],
    },

    signature: {
      title:
        'Remove Background From a Signature – Free Transparent PNG | freebg.app',
      description:
        'Remove a signature background free. Scan to transparent PNG for email, contracts and PDFs. No upload, no watermark.',
      h1: 'Remove the background from a signature',
      subtitle:
        'Scan or photo to transparent PNG. Stays on your device.',
      intro:
        'A wet-ink signature on lined paper does not belong in an email footer as a grey rectangle. You need ink on a transparent PNG. Signatures are also identity data — do not upload them to a random cloud cutter. Drop a scan above and keep the file local.',
      showTool: true,
      sections: [
        {
          heading: 'How to photograph the signature',
          bullets: [
            'White or very light unlined paper. Lines become “ink” to the model.',
            'Even daylight; avoid a hard shadow from your hand.',
            'Fill the frame. A tiny scribble in a huge photo leaves junk at the edges.',
            'JPG or PNG. Phone HEIC: convert to JPG first.',
          ],
        },
        {
          heading: 'After the cut-out',
          paragraphs: [
            'If faint paper texture remains, export onto white for a contract PDF, or paint it out with the eraser. For email, a small transparent PNG is enough — shrink it on FreePNG so it does not dwarf the message. For a reusable PDF stamp, keep the full-resolution PNG and place it in FreePDF or your editor.',
            'A scanned signature can be abused if it leaks. Because nothing is uploaded, closing the tab is the whole retention policy.',
          ],
        },
      ],
      howTo: {
        name: 'How to make a transparent signature PNG',
        steps: [
          {
            name: 'Sign on blank paper',
            text: 'Dark ink, no lines, good light.',
          },
          {
            name: 'Drop the photo or scan',
            text: 'The model runs in the browser. The signature is not posted.',
          },
          {
            name: 'Keep transparency',
            text: 'Or choose white if the PNG is going straight onto a paper-like PDF.',
          },
          {
            name: 'Download and store it yourself',
            text: 'We never see the file, so we cannot recover it later.',
          },
        ],
      },
      faq: [
        {
          q: 'Will blue or black ink survive?',
          a: 'Yes in typical scans. Very pale pencil is a poor source — resign with a darker pen.',
        },
        {
          q: 'Lined notebook paper?',
          a: 'Lines often remain. Use blank paper or erase the rules after the cut-out.',
        },
        {
          q: 'Is this legally “my signature”?',
          a: 'It is a picture of your mark. Contract rules depend on your jurisdiction. This tool only removes paper.',
        },
        {
          q: 'Do you store signatures?',
          a: 'No. They never reach our servers.',
        },
        {
          q: 'Email size',
          a: 'Resize the PNG after export. A 4000 px signature is unnecessary in Gmail.',
        },
        {
          q: 'Multiple signatures at once?',
          a: 'Yes — batch and ZIP, still local.',
        },
      ],
    },

    removeBgShutdown: {
      title:
        'remove.bg Is Shutting Down (1 Dec 2026) – What To Do | freebg.app',
      description:
        'remove.bg standalone site closes 1 December 2026. Credits expire. API moves to Leonardo. Free no-upload alternative you can use today.',
      h1: 'remove.bg is shutting down on 1 December 2026',
      subtitle:
        'Site, credits and self-serve API all change that morning. A free local tool is above.',
      intro:
        'Canva is retiring the standalone remove.bg website on 1 December 2026 at 9:00 a.m. CET. Unused credits expire the same morning. The self-serve API moves to Leonardo.Ai. If you want a page that still does one job — drop image, download PNG — use the tool above. Details below are from remove.bg’s own FAQ and terms, not rumours.',
      showTool: true,
      sections: [
        {
          heading: 'The three things that happen on 1 December',
          bullets: [
            'The standalone site stops. Consumer cut-outs move into Canva.',
            'Unused credits (PAYG, rollover, promos) expire and are not refunded or moved to Canva.',
            'Self-serve API access moves to Leonardo.Ai. Existing enterprise API contracts are a separate case — read remove.bg’s FAQ.',
          ],
          paragraphs: [
            'If you still have a credit balance, spend it before that morning or write it off. Do not buy a new pack in late November unless you will burn it.',
          ],
        },
        {
          heading: 'What to use instead of the standalone site',
          paragraphs: [
            'Stay in Canva if the cut-out is one step inside a larger design. Move the API to Leonardo if you already integrate Canva’s stack. Switch to a no-upload tool like freebg.app if you wanted the old remove.bg tab: unlimited HD, no account, photos on your device. Our remove.bg alternative page has the side-by-side.',
            'Bookmark this site. There is nothing to export from remove.bg except the habit of dropping a file.',
          ],
        },
        {
          heading: 'Why this page exists',
          paragraphs: [
            'Search is filling up with “remove.bg shutting down” posts that bury the date under a sign-up wall. You should be able to read the facts and try a replacement in the same view. We are not Canva; we do not have your credits; we cannot transfer them.',
          ],
        },
      ],
      howTo: {
        name: 'How to leave remove.bg before 1 December 2026',
        steps: [
          {
            name: 'Spend or accept lost credits',
            text: 'Use remaining PAYG credits on remove.bg before 1 December 2026, 9:00 a.m. CET.',
          },
          {
            name: 'Cancel billing you do not need',
            text: 'Stop monthly plans so you are not charged for a product that is about to vanish.',
          },
          {
            name: 'Pick a replacement workflow',
            text: 'Canva for suite work, Leonardo for API, freebg.app for private unlimited cut-outs.',
          },
          {
            name: 'Test a real file here',
            text: 'Drop a product shot above. Download HD with no watermark and no account.',
          },
        ],
      },
      faq: [
        {
          q: 'Is remove.bg really shutting down?',
          a: 'The standalone website is scheduled to be unavailable from 1 December 2026 at 9:00 a.m. CET. Background removal continues inside Canva. Confirm on remove.bg’s FAQ — dates can be restated by Canva.',
        },
        {
          q: 'Do credits become Canva Pro credits?',
          a: 'No. Unused credits expire that day and are non-refundable per remove.bg’s terms.',
        },
        {
          q: 'What happens to the API?',
          a: 'Self-serve API moves to Leonardo.Ai from 1 December 2026. Enterprise contracts may continue — check the contract and remove.bg’s API page.',
        },
        {
          q: 'Is freebg.app affiliated with Canva or remove.bg?',
          a: 'No. It is an independent, open-source, in-browser tool.',
        },
        {
          q: 'Can you import my remove.bg history?',
          a: 'No. We never received those files. Keep your own originals.',
        },
        {
          q: 'Will this site stay a simple tool?',
          a: 'Yes. No Canva account, no credit pack, no upload.',
        },
      ],
    },

    privacy: {
      title: 'Privacy Policy | FreeBG',
      description:
        'How FreeBG handles your data: images are processed entirely in your browser and never uploaded. Full privacy policy.',
      h1: 'Privacy Policy',
      subtitle: 'Short version: your images never reach us, because they never leave your browser.',
      showTool: false,
      sections: [
        {
          heading: 'Your images',
          paragraphs: [
            'FreeBG performs all background removal locally, inside your web browser, using an AI model that is downloaded to your device. Images you open with the tool are never transmitted to FreeBG or to any third party.',
            'We do not receive, view, store, log, back up or process your images in any form. When you close or reload the page, the image is discarded from memory. You can verify this yourself by opening your browser\'s developer tools and inspecting the Network tab while using the tool.',
          ],
        },
        {
          heading: 'What we do collect',
          paragraphs: [
            'We use privacy-friendly, aggregate website analytics to understand how many people visit and which pages they read. This analytics does not use cookies, does not fingerprint your device, and does not build a profile of you across websites.',
          ],
          bullets: [
            'Page URL visited, referrer, approximate country, browser and device type.',
            'No cookies, no cross-site tracking identifiers, no personal data.',
          ],
        },
        {
          heading: 'Third-party services',
          paragraphs: [
            'The AI model and runtime files are downloaded from a content delivery network the first time you use the tool. That request necessarily exposes your IP address to the CDN provider, as any web request does. It contains no information about your images.',
            'If you use the contact form, your name, email address and message are sent to Formspree so we can receive and reply to your enquiry. Formspree processes that submission under its own privacy policy. Do not include images or sensitive personal data in the form.',
            'If advertising is displayed on this site in future, third-party advertising providers may set cookies or use device identifiers in accordance with their own policies. This page will be updated before any such change takes effect, and consent will be requested where the law requires it.',
          ],
        },
        {
          heading: 'Local storage on your device',
          paragraphs: [
            'The AI model files and application assets are cached in your browser storage so the tool loads quickly and works offline. Your interface preferences, such as dark mode, are also stored locally. This data stays on your device and can be cleared at any time through your browser settings.',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'Because we do not collect personal data through the background remover, there is generally nothing for us to access, correct, export or delete on your behalf for that use. If you contact us through the form, you can ask us to delete that message. For any question about this policy, use the contact form and we will respond.',
          ],
        },
        {
          heading: 'Children',
          paragraphs: [
            'This service is not directed at children under 13, and we do not knowingly collect personal information from anyone.',
          ],
        },
        {
          heading: 'Changes to this policy',
          paragraphs: [
            'If this policy changes materially, the updated version will be published on this page with a revised effective date.',
          ],
        },
      ],
    },

    terms: {
      title: 'Terms of Service | FreeBG',
      description:
        'The terms that apply when you use the FreeBG background remover. Free to use, provided as-is, no rights taken over your images.',
      h1: 'Terms of Service',
      subtitle: 'Plain terms for a free tool that runs on your own device.',
      showTool: false,
      sections: [
        {
          heading: 'Acceptance',
          paragraphs: [
            'By using FreeBG you agree to these terms. If you do not agree with them, please do not use the service.',
          ],
        },
        {
          heading: 'The service',
          paragraphs: [
            'FreeBG is a free browser-based tool that removes backgrounds from images using an AI model executed on your own device. No account is required and no fee is charged.',
            'Because processing happens locally, the quality, speed and success of any given operation depend on your device, browser and the image itself.',
          ],
        },
        {
          heading: 'Your content',
          paragraphs: [
            'You retain all rights to the images you process. We claim no ownership, licence or right of any kind over them, and since they are never transmitted to us, we could not exercise such rights even if we wanted to.',
            'You are responsible for ensuring you have the right to use and edit any image you process, and for complying with applicable law when doing so.',
          ],
        },
        {
          heading: 'Acceptable use',
          bullets: [
            'Do not use the service to create material that is unlawful, defamatory, or that infringes the rights of others.',
            'Do not use it to produce deceptive imagery intended to defraud or impersonate.',
            'Do not attempt to disrupt the site or its distribution infrastructure.',
          ],
        },
        {
          heading: 'No warranty',
          paragraphs: [
            'The service is provided "as is" and "as available", without warranties of any kind, express or implied, including fitness for a particular purpose. We do not guarantee that results will meet your requirements or that the service will be uninterrupted or error-free.',
            'Always keep your original files. We are not able to recover anything, because we never receive anything.',
          ],
        },
        {
          heading: 'Limitation of liability',
          paragraphs: [
            'To the maximum extent permitted by law, we are not liable for any indirect, incidental or consequential damages, or for any loss of data or profits, arising from your use of the service.',
          ],
        },
        {
          heading: 'Open source and licensing',
          paragraphs: [
            'The FreeBG web application is open source and distributed under the GNU Affero General Public License v3.0, as required by the background removal library it builds upon. The source code is publicly available, and you are free to inspect, modify and self-host it under the terms of that licence.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'These terms may be updated from time to time. Continued use of the service after a change constitutes acceptance of the revised terms.',
          ],
        },
      ],
    },

    contact: {
      title: 'Contact | FreeBG',
      description:
        'Contact the FreeBG team. Send a message through the form — no email client required.',
      h1: 'Contact',
      subtitle: 'Questions, feedback or partnership ideas — send us a message.',
      showTool: false,
      showContactForm: true,
      intro:
        'We read every message. Use the form below and we will reply as soon as we can. Please do not attach or paste personal images here — the background remover already runs privately in your browser.',
      sections: [],
    },
  },
}
