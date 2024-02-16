import './page.scss'
import WhyChoseUs from '~/components/Home/WhyChoseUs'
import Banner from '~/components/Home/Banner'
import LocaleChange from '~/components/Home/LocaleChange'

export default async function Home() {
  return (
    <main className='home-page'>
      <Banner></Banner>
      <WhyChoseUs></WhyChoseUs>
      <LocaleChange></LocaleChange>
    </main>
  )
}
