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
        alt='banner background'
        width={1440}
        height={720}
        placeholder='blur'
      />
      <div className='children'>{children}</div>
    </div>
  )
}
