'use client'
import { createContext, useState } from 'react'
import useStore from '~/hooks/store/useStore'
import { useThemeStore } from '~/hooks/store/useThemeStore'

interface ThemeContextValue {
  theme: string
  toggle: () => void
}

const themeContextDefaultValue = {
  theme: 'light',
  toggle: () => {},
}

export const ThemeContext = createContext<ThemeContextValue>(
  themeContextDefaultValue
)

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const themeState = useStore(useThemeStore, (state) => state)

  function ThemeContextValue(): ThemeContextValue {
    return themeState
      ? {
          theme: themeState.theme,
          toggle: themeState.toggle,
        }
      : themeContextDefaultValue
  }

  return (
    <ThemeContext.Provider value={ThemeContextValue()}>
      {children}
    </ThemeContext.Provider>
  )
}
