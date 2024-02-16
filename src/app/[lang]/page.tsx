import './page.scss'
import WhyChoseUs from '~/pages/Home/WhyChoseUs'
import Banner from '~/pages/Home/Banner'
import LocaleChange from '~/pages/Home/LocaleChange'

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  return (
    <main className='home-page'>
      <Banner lang={lang}></Banner>
      <WhyChoseUs></WhyChoseUs>
      <LocaleChange></LocaleChange>
    </main>
  )
}
