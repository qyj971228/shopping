import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import '@/globals.css'
import ThemeProvider from '~/providers/ThemeProvider'
import Body from '~/components/Body'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export const metadata: Metadata = {
  title: "Qiuyingjian's Shopping Website",
  description: 'e-shop',
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <ThemeProvider>
        <Body>
          <SpeedInsights></SpeedInsights>
          <Header></Header>
          {children}
          <Footer></Footer>
        </Body>
      </ThemeProvider>
    </html>
  )
}
