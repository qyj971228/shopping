import ThemeChange from '~/components/Home/ThemeChange'
import './page.scss'
import EventBanner from '~/components/Home/EventBanner'
export default function Home() {
  return (
    <main className='main'>
      <EventBanner></EventBanner>
      <div>this is home page</div>
      <ThemeChange></ThemeChange>
    </main>
  )
}
