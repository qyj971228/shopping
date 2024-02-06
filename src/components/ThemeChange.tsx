'use client'
import { useContext } from 'react'
import { ThemeContext } from '~/components/ThemeProvider'

export default function ThemeChange() {
  const { theme, toggle } = useContext(ThemeContext)

  return <button onClick={() => toggle()}>{theme}</button>
}
