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
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </main>
  )
}
