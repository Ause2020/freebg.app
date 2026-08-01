import { HeroTool } from './HeroTool'
import { PrivacyBadge } from './PrivacyBadge'
import { ContactForm } from './ContactForm'
import { Faq } from './Faq'
import { HowToSteps } from './HowToSteps'
import { RelatedLinks } from './RelatedLinks'
import { Layout } from './Layout'
import { useI18n } from '../i18n'
import { useSeo } from '../seo/useSeo'
import type { RouteDef } from '../content/routes'

export function Page({ route }: { route: RouteDef }) {
  const { t } = useI18n()
  const page = t.pages[route.key]

  useSeo(route)

  return (
    <Layout route={route}>
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <header className="animate-fade-up mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="eyebrow">{t.tagline}</span>
          <h1 className="text-[1.75rem] leading-[1.1] font-black tracking-tight text-ink sm:text-4xl md:text-5xl dark:text-white">
            {page.h1}
          </h1>
          <p className="max-w-xl text-sm text-ink/60 sm:text-base dark:text-white/55">
            {page.subtitle}
          </p>
          {page.showTool && <PrivacyBadge />}
        </header>

        {page.showTool && (
          <section
            id="tool"
            aria-label={page.h1}
            className="mt-8 flex flex-col items-center sm:mt-10"
          >
            <HeroTool />
            <p className="mt-8 max-w-lg text-center text-sm leading-relaxed text-ink/50 dark:text-white/45">
              {t.privacyNote}
            </p>
          </section>
        )}

        {page.showContactForm && (
          <section
            id="contact-form"
            aria-label={page.h1}
            className="mt-8 sm:mt-10"
          >
            {page.intro && (
              <p className="mx-auto mb-6 max-w-xl text-center text-sm leading-relaxed text-ink/60 sm:text-base dark:text-white/55">
                {page.intro}
              </p>
            )}
            <ContactForm />
          </section>
        )}

        <div className="prose-content mx-auto mt-12 max-w-3xl">
          {!page.showContactForm && page.intro && (
            <p className="text-base leading-relaxed text-ink/70 dark:text-white/65">
              {page.intro}
            </p>
          )}

          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {page.howTo && <HowToSteps howTo={page.howTo} />}
          {page.faq && page.faq.length > 0 && (
            <Faq heading={t.faqHeading} items={page.faq} />
          )}

          {!page.showContactForm && <RelatedLinks current={route.key} />}
        </div>
      </div>
    </Layout>
  )
}

export default Page
