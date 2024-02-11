import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '~/components/Providers/ThemeProvider'
import Body from '~/components/Body'

export const metadata: Metadata = {
  title: "Qiuyingjian's Shopping Website",
  description: 'e-shop',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <ThemeProvider>
        <Body>
          <SpeedInsights></SpeedInsights>
          {children}
        </Body>
      </ThemeProvider>
    </html>
  )
}
