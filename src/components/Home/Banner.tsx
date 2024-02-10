import './Banner.scss'
import Image from 'next/image'
import BannerBg from '@/img/conic-gradient.png'

export default function Banner() {
  return (
    <div className='banner'>
      <Image
        className='bg-img-size'
        src={BannerBg}
        alt='banner background'
        width={1440}
        height={720}
        placeholder='blur'
      />
    </div>
  )
}
