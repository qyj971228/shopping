import './Banner.scss'
import Image from 'next/image'
import BannerBg from '@/img/conic-gradient.png'

export default function Banner({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='banner'>
      <Image
        className='bg-img'
        src={BannerBg}
        alt='banner-bg'
        placeholder='blur'
      />
      <div className='children'>{children}</div>
    </div>
  )
}
