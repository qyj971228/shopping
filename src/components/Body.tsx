'use client'

import { useContext } from 'react'
import { ThemeContext } from './Provider/ThemeProvider'
import { Lexend } from 'next/font/google'
import c from 'classnames'

/**
 * the default font will be used when google fonts fails to load
 */
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
})

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { theme } = useContext(ThemeContext)

  return <body className={c(lexend.className, theme)}>{children}</body>
}
