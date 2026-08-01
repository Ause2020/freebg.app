import type { HowTo } from '../i18n/types'

export function HowToSteps({ howTo }: { howTo: HowTo }) {
  return (
    <section aria-labelledby="howto-heading" className="mt-12">
      <h2 id="howto-heading" className="!mt-0">
        {howTo.name}
      </h2>

      <ol className="grid gap-4 sm:grid-cols-2">
        {howTo.steps.map((step, index) => (
          <li
            key={step.name}
            id={`step-${index + 1}`}
            className="panel flex gap-3 p-4"
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 -rotate-3 items-center justify-center rounded-lg border-2 border-ink bg-accent font-mono text-sm font-black text-ink dark:border-white/30"
            >
              {index + 1}
            </span>
            <div>
              <h3 className="text-sm font-bold text-ink dark:text-white">
                {step.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/60 dark:text-white/55">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default HowToSteps
