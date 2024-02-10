import './page.scss'
// import ThemeChange from '~/components/Home/ThemeChange'
import Notification from '~/components/Home/Notification'
import Banner from '~/components/Home/Banner'

export default function Home() {
  return (
    <main className='main'>
      {/* <ThemeChange></ThemeChange> */}
      <Notification></Notification>
      <Banner></Banner>
    </main>
  )
}
