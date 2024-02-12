import './Banner.scss'
import Image from 'next/image'
import BannerBg from '@/img/conic-gradient.png'
import Banner1 from '@/img/banner1.png'
import Banner2 from '@/img/banner2.png'
import Banner3 from '@/img/banner3.png'
import Cubic from './Cubic'

export default function Banner() {
  return (
    <div className='banner'>
      <Image
        className='bg-img'
        src={BannerBg}
        alt='banner-bg'
        placeholder='blur'
      />
      <div className='content'>
        <div className='left-part'>
          <div className='subtitle'>BEST SELLER</div>
          <div className='title'>BEST DISPENSARY TO BUY WEED ONLINE</div>
          <div className='describes'>Vitamins & Supplements</div>
          <div className='discount'>
            <span>Get 25% off</span>
            <div className='vertical-line'></div>
            <span>Free Shipping</span>
          </div>
          <button className='shop-all'>Shop All</button>
        </div>
        <div className='right-part'>
          <div className='cubics'>
            <Cubic
              src={Banner2}
              trans={{ x: 200, y: 250 }}
              cubicWidth={296}
              bannerWidth={172}
              bannerTransY={100}
              style={{zIndex: 1}}
            ></Cubic>
            <Cubic
              src={Banner1}
              trans={{ x: 145, y: 0 }}
              cubicWidth={296}
              bannerWidth={211}
              bannerTransY={100}
            ></Cubic>
            <Cubic
              src={Banner3}
              trans={{ x: 0, y: 430 }}
              cubicWidth={436}
              bannerWidth={147}
              bannerTransY={100}
            ></Cubic>
          </div>
          <div className='cubics-mini'>
            <Cubic
              src={Banner2}
              trans={{ x: 100, y: 125 }}
              cubicWidth={143}
              bannerWidth={88}
              bannerTransY={50}
              style={{zIndex: 1}}
            ></Cubic>
            <Cubic
              src={Banner1}
              trans={{ x: 83, y: 40 }}
              cubicWidth={170}
              bannerWidth={108}
              bannerTransY={60}
            ></Cubic>
            <Cubic
              src={Banner3}
              trans={{ x: 0, y: 165 }}
              cubicWidth={180}
              bannerWidth={75}
              bannerTransY={50}
            ></Cubic>
          </div>
        </div>
      </div>
    </div>
  )
}
