'use client'
import { createContext, useState } from 'react'

interface Theme {
  theme: string
  toggle: () => void
}

export const ThemeContext = createContext<Theme>({
  theme: 'light',
  toggle: () => {},
})

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [theme, setTheme] = useState('light')

  function ThemeContextValue(): Theme {
    function dark() {
      setTheme('dark')
    }
    function light() {
      setTheme('light')
    }
    function toggle() {
      if (theme === 'dark') light()
      else dark()
    }
    return {
      theme,
      toggle,
    }
  }

  return (
    <html lang='en'>
      <body className={theme}>
        <ThemeContext.Provider value={ThemeContextValue()}>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  )
}
