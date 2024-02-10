import './page.scss'
// import ThemeChange from '~/components/Home/ThemeChange'
import Notification from '~/components/Home/Notification'
import Banner from '~/components/Home/Banner'

export default function Home() {
  return (
    <main className='main'>
      {/* <ThemeChange></ThemeChange> */}
      <Notification></Notification>
      <Banner>
        <div>BEST SELLER</div>
        <div>BEST DISPENSARY TO BUY WEED ONLINE</div>
        <div>Vitamins & Supplements</div>
      </Banner>
    </main>
  )
}
