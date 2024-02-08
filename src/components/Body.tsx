'use client'

import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import c from 'classnames'

export default function ThemeProvider({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className: string
}>) {
  const { theme } = useContext(ThemeContext)

  return <body className={c(className, theme)}>{children}</body>
}
