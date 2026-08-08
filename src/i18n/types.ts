import type { PageKey } from '../content/routes'

export type Section = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  subsections?: {
    heading: string
    paragraphs?: string[]
    bullets?: string[]
  }[]
}

export type FaqItem = {
  q: string
  a: string
}

export type HowTo = {
  name: string
  steps: { name: string; text: string }[]
}

export type GrowthLink = {
  title: string
  description: string
  /** Internal PageKey when the article already exists. */
  pageKey?: PageKey
  /** External or future path; ignored when pageKey is set. */
  href?: string
  /** Shown as coming soon (no link). */
  comingSoon?: boolean
}

export type PageContent = {
  /** <title> */
  title: string
  /** meta description */
  description: string
  h1: string
  subtitle: string
  intro?: string
  sections: Section[]
  faq?: FaqItem[]
  howTo?: HowTo
  /** Renders the background removal tool near the top. */
  showTool: boolean
  /** Renders the contact form (Formspree). */
  showContactForm?: boolean
  /** Optional growth / future articles block (home). */
  growth?: {
    heading: string
    intro: string
    links: GrowthLink[]
  }
}

export type Dictionary = {
  nav: {
    home: string
    guide: string
    productPhotos: string
    profilePictures: string
    privacy: string
    terms: string
    contact: string
    skipToTool: string
    menu: string
    theme: string
  }
  contactForm: {
    name: string
    email: string
    message: string
    submit: string
    sending: string
    success: string
    error: string
    required: string
  }
  tagline: string
  badge: string
  trustBadges: string[]
  /** Localized SoftwareApplication featureList for JSON-LD. */
  featureList: string[]
  ogImageAlt: string
  tool: {
    dropTitle: string
    dropActive: string
    dropBrowse: string
    dropFormats: string
    pasteHint: string
    orTrySample: string
    sample: string
    samplePortrait: string
    samplePortraitAlt: string
    sampleProduct: string
    sampleProductAlt: string
    remove: string
    tryAgain: string
    chooseAnother: string
    processAnother: string
    cancel: string
    clear: string
    loadingModel: string
    processing: string
    downloadingRuntime: string
    downloadingModel: string
    downloadingAssets: string
    preparing: string
    done: string
    fileTooLarge: (size: string, max: string) => string
    invalidType: string
    heicUnsupported: string
    compare: string
    before: string
    after: string
    dragToCompare: string
    fullResolution: string
    background: string
    transparent: string
    white: string
    customColor: string
    format: string
    download: string
    batchTitle: string
    batchHint: string
    batchDownloadZip: string
    batchProcessing: (done: number, total: number) => string
    queued: string
    failed: string
    removeFromList: string
    refine: string
    refineTitle: string
    refineHint: string
    eraseMode: string
    eraseModeHint: string
    restoreMode: string
    restoreModeHint: string
    brushSize: string
    undo: string
    redo: string
    resetEdits: string
    discard: string
    applyEdits: string
    applyingEdits: string
  }
  errors: {
    network: string
    memory: string
    gpu: string
    decode: string
    generic: string
    boundaryTitle: string
    boundaryBody: string
    boundaryAction: string
    notFoundTitle: string
    notFoundBody: string
    notFoundAction: string
  }
  privacyNote: string
  footer: {
    heading: string
    body: string
    product: string
    legal: string
    moreTools: string
    openSource: string
    sourceNote: string
    contact: string
    rights: string
    comingSoon: string
    sisters: {
      freepng: string
      freepdf: string
      freebg: string
    }
  }
  faqHeading: string
  pages: Record<PageKey, PageContent>
}
