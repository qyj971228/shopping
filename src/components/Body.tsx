'use client'

import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { theme } = useContext(ThemeContext)

  return <body className={theme}>{children}</body>
}
