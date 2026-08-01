import { ShieldCheck } from 'lucide-react'
import { useI18n } from '../i18n'

export function PrivacyBadge() {
  const { t } = useI18n()

  return (
    <p className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-accent px-3 py-1.5 text-xs font-bold text-ink sm:text-sm dark:border-white/30">
      <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
      {t.badge}
    </p>
  )
}

export default PrivacyBadge
