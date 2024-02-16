import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import '~/app/globals.css'
import ThemeProvider from '~/providers/ThemeProvider'
import Body from '~/components/Body'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export const metadata: Metadata = {
  title: "Qiuyingjian's Shopping Website",
  description: 'e-shop',
}

export default function RootLayout({
  params: { lang },
  children,
}: Readonly<{
  params: { lang: string }
  children: React.ReactNode
}>) {
  return (
    <html lang={lang}>
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
