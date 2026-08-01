import { Plus } from 'lucide-react'
import type { FaqItem } from '../i18n/types'

export function Faq({ heading, items }: { heading: string; items: FaqItem[] }) {
  return (
    <section aria-labelledby="faq-heading" className="mt-12">
      <h2 id="faq-heading" className="!mt-0">
        {heading}
      </h2>

      <div className="panel divide-y-2 divide-ink/10 overflow-hidden dark:divide-white/10">
        {items.map((item, index) => (
          <details key={item.q} className="group">
            <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-4 text-sm font-bold text-ink transition hover:bg-ink/[0.03] sm:text-base dark:text-white dark:hover:bg-white/5">
              <span className="font-mono text-xs text-primary dark:text-primary-light">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex-1">{item.q}</span>
              <Plus
                className="h-4 w-4 shrink-0 text-ink/40 transition-transform group-open:rotate-45 dark:text-white/40"
                aria-hidden="true"
              />
            </summary>
            <p className="px-4 pb-4 pl-11 text-sm leading-relaxed text-ink/60 dark:text-white/55">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default Faq
