import { BadgeCheck, Infinity, Lock, Sparkles } from 'lucide-react'
import { useI18n } from '../i18n'

const ICONS = [Lock, Infinity, BadgeCheck, Sparkles] as const

export function TrustBadges() {
  const { t } = useI18n()

  return (
    <ul
      className="mt-4 flex max-w-2xl flex-wrap items-center justify-center gap-2"
      aria-label={t.badge}
    >
      {t.trustBadges.map((label, index) => {
        const Icon = ICONS[index] ?? BadgeCheck
        return (
          <li
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink/15 bg-white px-3 py-1.5 text-xs font-bold text-ink shadow-[2px_2px_0_0_var(--color-ink)] dark:border-white/20 dark:bg-[#14141c] dark:text-white dark:shadow-[2px_2px_0_0_var(--color-accent)]"
          >
            <Icon className="h-3.5 w-3.5 shrink-0 text-primary dark:text-primary-light" aria-hidden="true" />
            {label}
          </li>
        )
      })}
    </ul>
  )
}

export default TrustBadges
