import './Banner.scss'
import Image from 'next/image'
import BannerBg from '@/img/conic-gradient.png'

export default function Banner() {
  return (
    <div className='banner'>
      <Image
        className='bg-img'
        src={BannerBg}
        alt='banner-bg'
        placeholder='blur'
      />
      <div className='children'>
        <div className='left-part'>
          <span className='subtitle'>BEST SELLER</span>
          <span className='title'>BEST DISPENSARY TO BUY WEED ONLINE</span>
          <span className='describes'>Vitamins & Supplements</span>
          <span className='discount'>
            <span>Get 25% off</span>
            <div className='vertical-line'></div>
            <span>Free Shipping</span>
          </span>
          <button>Shop All</button>
        </div>
        <div className='right-part'></div>
      </div>
    </div>
  )
}
