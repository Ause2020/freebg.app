import type { Dictionary } from './types'

export const en: Dictionary = {
  nav: {
    home: 'Background Remover',
    guide: 'How-To Guide',
    productPhotos: 'Product Photos',
    profilePictures: 'Profile Pictures',
    privacy: 'Privacy',
    terms: 'Terms',
    contact: 'Contact',
    skipToTool: 'Skip to the background remover',
    menu: 'Menu',
    theme: 'Toggle dark mode',
  },
  tagline: 'Free • Unlimited • Private',
  badge: '100% Private – Images never leave your device',

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
    fullResolution: 'Full resolution · No watermark',
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
    legal: 'Legal',
    moreTools: 'More free tools',
    openSource: 'Source code',
    sourceNote: 'Open source (AGPL-3.0)',
    contact: 'Contact',
    rights: 'All rights reserved.',
    sisters: {
      freepng: 'FreePNG – convert, resize & compress images',
      freepdf: 'FreePDF – merge, split & compress PDFs',
      freebg: 'FreeBG – remove image backgrounds',
    },
  },

  faqHeading: 'Frequently asked questions',

  pages: {
    home: {
      title: 'Free Background Remover – No Watermark, Unlimited | FreeBG',
      description:
        'Remove image backgrounds free and unlimited. No watermark, no signup, no uploads. Full HD/4K resolution, processed privately in your browser.',
      h1: 'Remove Backgrounds Free. Unlimited. Private.',
      subtitle: 'Full resolution • Runs in your browser • No signup required',
      showTool: true,
      sections: [
        {
          heading: 'Why FreeBG is different',
          paragraphs: [
            'Most background removers upload your photo to a server, cap you at a handful of free images, then hand back a low-resolution preview with a watermark unless you pay. FreeBG does none of that.',
            'The AI model runs inside your browser tab. Your image is read from disk into memory, processed on your own CPU or GPU, and written back out as a transparent PNG. No server ever sees the file, which is why the tool can be genuinely unlimited and free.',
          ],
          bullets: [
            'Unlimited images — there is no quota to enforce, because there is no server bill to pay.',
            'Full original resolution, including 4K. No downscaled previews.',
            'No watermark, ever.',
            'No account, no email, no credit card.',
            'Works offline once the model is cached.',
          ],
        },
        {
          heading: 'What you can use it for',
          bullets: [
            'E-commerce product shots that need a clean white background.',
            'Profile pictures and headshots for LinkedIn, CVs and team pages.',
            'Transparent PNG logos and assets for slide decks and documents.',
            'Cut-outs for posters, thumbnails, collages and memes.',
            'Removing distracting backgrounds from photos before printing.',
          ],
        },
        {
          heading: 'More free browser tools',
          paragraphs: [
            'After you export a transparent PNG, you can convert, resize or compress it with FreePNG (https://freepng.app), or work with documents on FreePDF (https://freepdf.app) — same private, on-device approach.',
          ],
        },
        {
          heading: 'Quality and limits — honestly',
          paragraphs: [
            'FreeBG uses the IS-Net segmentation model, the same family of models behind many paid tools. It handles people, products, animals and vehicles very well, and copes with moderately fine detail such as hair.',
            'Very fine strands against a busy background, transparent glass and motion blur remain hard for any automatic tool. If an edge is not perfect, switching the background to white or a solid colour usually hides the difference completely.',
            'The first run downloads roughly 40 MB of model and runtime files. That download is cached by your browser, so every image after the first starts instantly.',
          ],
        },
      ],
      howTo: {
        name: 'How to remove a background with FreeBG',
        steps: [
          {
            name: 'Add your image',
            text: 'Drag a JPG, PNG or WEBP onto the drop zone, click to browse, or paste from your clipboard with Ctrl + V.',
          },
          {
            name: 'Run the AI',
            text: 'Press "Remove Background". The model runs locally in your browser and shows live progress.',
          },
          {
            name: 'Choose a background',
            text: 'Keep it transparent, or swap in white or any custom colour using the background options.',
          },
          {
            name: 'Download',
            text: 'Save the result at full original resolution as a PNG, JPG or WEBP. No watermark is added.',
          },
        ],
      },
      faq: [
        {
          q: 'Is FreeBG really free with no limits?',
          a: 'Yes. Processing runs on your own device, so serving you a thousand images costs us nothing. There is no quota, no trial and no paid tier gating the output quality.',
        },
        {
          q: 'Do you add a watermark?',
          a: 'No. The downloaded file is a clean, full-resolution image with no watermark, badge or metadata added by us.',
        },
        {
          q: 'Are my images uploaded to a server?',
          a: 'No. The AI model is downloaded to your browser and the image is processed there. You can verify this by opening your browser developer tools, switching to the Network tab, and confirming that no request contains your image. You can even disconnect from the internet after the model has loaded and the tool will keep working.',
        },
        {
          q: 'What resolution do I get back?',
          a: 'The same resolution you put in, including 4K and larger. Very large images are limited only by how much memory your device has available.',
        },
        {
          q: 'Which formats are supported?',
          a: 'JPG, PNG and WEBP are supported for input. You can download the result as a transparent PNG, or as JPG or WEBP when you pick a solid background colour. HEIC photos from iPhones need to be converted to JPG first, because browsers cannot decode HEIC natively.',
        },
        {
          q: 'Does it work on a phone?',
          a: 'Yes. The interface is designed for touch, and the AI runs on modern iOS and Android browsers. Processing is slower than on a desktop and very large images may fail on older phones with little memory.',
        },
        {
          q: 'Does it work offline?',
          a: 'Yes, after the first use. The model and app are cached, so you can remove backgrounds on a plane or with no signal.',
        },
        {
          q: 'How does this compare with remove.bg?',
          a: 'remove.bg produces excellent results but uploads your image, limits free downloads to low resolution and charges credits for full-size output. FreeBG trades a one-off model download for unlimited, full-resolution, private processing at no cost.',
        },
      ],
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
