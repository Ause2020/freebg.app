import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { useI18n } from '../i18n'
import { FORMSPREE_ENDPOINT } from '../content/site'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const { t } = useI18n()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [validationError, setValidationError] = useState<string | null>(null)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setValidationError(null)

    if (!name.trim() || !email.trim() || !message.trim()) {
      setValidationError(t.contactForm.required)
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `FreeBG contact from ${name.trim()}`,
          _gotcha: '',
        }),
      })

      if (!response.ok) {
        setStatus('error')
        return
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="panel animate-fade-up mx-auto flex w-full max-w-xl flex-col items-center gap-3 px-6 py-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-primary dark:text-primary-light" aria-hidden="true" />
        <p className="text-base font-bold text-ink dark:text-white">{t.contactForm.success}</p>
        <button
          type="button"
          className="btn btn-outline btn-sm mt-2"
          onClick={() => setStatus('idle')}
        >
          {t.contactForm.submit}
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(event) => void onSubmit(event)}
      className="panel mx-auto w-full max-w-xl space-y-4 p-5 sm:p-6"
      noValidate
    >
      {/* Honeypot — leave empty; bots that fill it get ignored by Formspree. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label htmlFor="contact-name" className="eyebrow mb-2 block">
          {t.contactForm.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={status === 'sending'}
          className="w-full rounded-xl border-2 border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-primary dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-primary-light"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="eyebrow mb-2 block">
          {t.contactForm.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === 'sending'}
          className="w-full rounded-xl border-2 border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-primary dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-primary-light"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="eyebrow mb-2 block">
          {t.contactForm.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          disabled={status === 'sending'}
          className="w-full resize-y rounded-xl border-2 border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-primary dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:border-primary-light"
        />
      </div>

      {(validationError || status === 'error') && (
        <p role="alert" className="text-sm font-semibold text-red-600 dark:text-red-400">
          {validationError ?? t.contactForm.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-primary w-full sm:w-auto"
      >
        {status === 'sending' ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-4 w-4" aria-hidden="true" />
        )}
        {status === 'sending' ? t.contactForm.sending : t.contactForm.submit}
      </button>
    </form>
  )
}

export default ContactForm
