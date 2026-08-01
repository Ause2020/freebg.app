import { Component, type ErrorInfo, type ReactNode } from 'react'
import { useI18n } from '../i18n'

type Labels = {
  title: string
  body: string
  action: string
}

type Props = {
  labels: Labels
  children: ReactNode
}

type State = {
  hasError: boolean
}

class Boundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('FreeBG crashed:', error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    const { labels } = this.props
    return (
      <div
        role="alert"
        className="flex min-h-svh flex-col items-center justify-center gap-3 px-6 text-center"
      >
        <h1 className="text-xl font-black text-ink dark:text-white">
          {labels.title}
        </h1>
        <p className="max-w-md text-sm text-ink/60 dark:text-white/55">
          {labels.body}
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="btn btn-primary mt-2"
        >
          {labels.action}
        </button>
      </div>
    )
  }
}

export function ErrorBoundary({ children }: { children: ReactNode }) {
  const { t } = useI18n()

  return (
    <Boundary
      labels={{
        title: t.errors.boundaryTitle,
        body: t.errors.boundaryBody,
        action: t.errors.boundaryAction,
      }}
    >
      {children}
    </Boundary>
  )
}

export default ErrorBoundary
