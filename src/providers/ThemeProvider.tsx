'use client'
import { createContext, useState } from 'react'
import useStore from '~/store/useStore'
import { Theme, ThemeState, useThemeStore } from '~/store/useThemeStore'
import useDarkThemeListener from '~/hooks/useDarkThemeListener'

interface ThemeContextValue {
  theme: ThemeState
  setTheme: (theme: Theme) => void
}

const themeContextDefaultValue = {
  theme: Theme.LIGHT,
  setTheme: () => {},
}

export const ThemeContext = createContext<ThemeContextValue>(
  themeContextDefaultValue
)

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isDarkTheme = useDarkThemeListener()
  const themeState = useStore(useThemeStore, (state) => state)

  function checkTheme() {
    if (isDarkTheme) {
      return Theme.DARK
    } else {
      return Theme.LIGHT
    }
  }

  function ThemeContextValue(): ThemeContextValue {
    if (themeState) {
      return {
        theme:
          themeState.theme === Theme.AUTO ? checkTheme() : themeState.theme,
        setTheme: themeState.setTheme,
      }
    }
    return themeContextDefaultValue
  }

  return (
    <ThemeContext.Provider value={ThemeContextValue()}>
      {children}
    </ThemeContext.Provider>
  )
}
