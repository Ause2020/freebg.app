import { createContext, useContext, type ReactNode } from 'react'
import { DEFAULT_LOCALE, type Locale } from '../content/site'
import type { Dictionary } from './types'
import { en } from './en'
import { es } from './es'

export const dictionaries: Record<Locale, Dictionary> = { en, es }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
}

type I18nValue = {
  locale: Locale
  t: Dictionary
}

const I18nContext = createContext<I18nValue>({
  locale: DEFAULT_LOCALE,
  t: dictionaries[DEFAULT_LOCALE],
})

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  return (
    <I18nContext.Provider value={{ locale, t: getDictionary(locale) }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nValue {
  return useContext(I18nContext)
}

export type { Dictionary } from './types'
