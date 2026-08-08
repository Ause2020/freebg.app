import { Link } from 'react-router-dom'
import { ArrowRight, Clock3 } from 'lucide-react'
import { useI18n } from '../i18n'
import { routePath } from '../content/routes'
import type { GrowthLink, PageContent } from '../i18n/types'

function GrowthCard({
  item,
  comingSoonLabel,
  locale,
}: {
  item: GrowthLink
  comingSoonLabel: string
  locale: 'en' | 'es'
}) {
  const body = (
    <>
      <span className="text-sm font-bold text-ink dark:text-white">{item.title}</span>
      <span className="mt-1 text-xs leading-relaxed text-ink/55 dark:text-white/50">
        {item.description}
      </span>
      {item.comingSoon ? (
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-ink/40 dark:text-white/35">
          <Clock3 className="h-3 w-3" aria-hidden="true" />
          {comingSoonLabel}
        </span>
      ) : (
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary dark:text-primary-light">
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </span>
      )}
    </>
  )

  const className =
    'panel flex h-full flex-col p-4 transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--color-ink)] dark:hover:shadow-[3px_3px_0_0_var(--color-accent)]'

  if (item.comingSoon) {
    return (
      <li>
        <div className={`${className} opacity-80`}>{body}</div>
      </li>
    )
  }

  if (item.pageKey) {
    return (
      <li>
        <Link to={routePath(item.pageKey, locale)} className={className}>
          {body}
        </Link>
      </li>
    )
  }

  if (item.href) {
    return (
      <li>
        <Link to={item.href} className={className}>
          {body}
        </Link>
      </li>
    )
  }

  return null
}

export function GrowthSection({
  growth,
}: {
  growth: NonNullable<PageContent['growth']>
}) {
  const { t, locale } = useI18n()

  return (
    <section className="mt-12" aria-labelledby="growth-heading">
      <h2 id="growth-heading">{growth.heading}</h2>
      <p>{growth.intro}</p>
      <ul className="card-grid">
        {growth.links.map((item) => (
          <GrowthCard
            key={item.title}
            item={item}
            comingSoonLabel={t.footer.comingSoon}
            locale={locale}
          />
        ))}
      </ul>
    </section>
  )
}

export default GrowthSection
