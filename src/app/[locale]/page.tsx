import './page.scss'
import WhyChoseUs from '~/pages/Home/WhyChoseUs'
import Banner from '~/pages/Home/Banner'
import LocaleChange from '~/pages/Home/LocaleChange'

export default async function Home() {
  return (
    <main className='home-page'>
      <Banner></Banner>
      <WhyChoseUs></WhyChoseUs>
      <LocaleChange></LocaleChange>
    </main>
  )
}
