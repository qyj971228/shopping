import './page.scss'
import WhyChoseUs from '~/components/pages/Home/WhyChoseUs'
import Banner from '~/components/pages/Home/Banner'

export default async function Home() {
  return (
    <main className='home-page'>
      <Banner></Banner>
      <WhyChoseUs></WhyChoseUs>
    </main>
  )
}
