import './page.scss'
// import ThemeChange from '~/components/Home/ThemeChange'
import Notification from '~/components/Home/Notification'
import Banner from '~/components/Home/Banner'

// async function getData() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`)
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }

export default async function Home() {
  // const data = await getData()

  return (
    <main className='main'>
      {/* <ThemeChange></ThemeChange> */}
      <Notification></Notification>
      <Banner>
        {/* <div>{data.hello}</div> */}
        <div>BEST SELLER</div>
        <div>BEST DISPENSARY TO BUY WEED ONLINE</div>
        <div>Vitamins & Supplements</div>
      </Banner>
    </main>
  )
}
