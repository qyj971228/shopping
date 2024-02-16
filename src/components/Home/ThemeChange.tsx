'use client'
import { useContext } from 'react'
import { ThemeContext } from '~/providers/ThemeProvider'
import { Theme } from '~/store/useThemeStore'

export default function ThemeChange() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <ul>
      <span>{theme}</span>
      <li><button onClick={() => setTheme(Theme.LIGHT)}>light</button></li>
      <li><button onClick={() => setTheme(Theme.DARK)}>dark</button></li>
      <li><button onClick={() => setTheme(Theme.AUTO)}>auto</button></li>
    </ul>
  )
}
