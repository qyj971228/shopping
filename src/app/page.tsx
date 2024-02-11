import './page.scss'
// import ThemeChange from '~/components/Home/ThemeChange'
import Notification from '~/components/pages/Home/Notification'
import Banner from '~/components/pages/Home/Banner'
import { GET } from '~/utils/fetch'

export default async function Home() {
  const data = await GET('/api')

  return (
    <main className='main'>
      {/* <ThemeChange></ThemeChange> */}
      <Notification></Notification>
      <Banner>
        {data && <div>{data.hello}</div>}
        <div>BEST SELLER</div>
        <div>BEST DISPENSARY TO BUY WEED ONLINE</div>
        <div>Vitamins & Supplements</div>
      </Banner>
    </main>
  )
}
