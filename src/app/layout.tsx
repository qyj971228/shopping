import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import ThemeProvider from '~/components/ThemeProvider'
import Body from '~/components/Body'

export const metadata: Metadata = {
  title: "Qiuyingjian's Shopping Website",
  description: 'e-shop',
}

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <ThemeProvider>
        <Body className={lexend.className}>{children}</Body>
      </ThemeProvider>
    </html>
  )
}
