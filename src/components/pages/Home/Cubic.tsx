import './Cubic.scss'
import Image, { StaticImageData } from 'next/image'
import CubicImg from '@/img/isometric-cubic.png'
import { CSSProperties } from 'react'

export default function Cubic({
  src,
  bannerWidth,
  bannerTransY,
  cubicWidth,
  trans,
  style,
}: {
  src: StaticImageData
  bannerWidth: number
  bannerTransY: number
  cubicWidth: number
  trans: { x: number; y: number }
  style?: CSSProperties
}) {
  const bannerCSS = {
    width: String(bannerWidth) + 'px',
    height: String(bannerWidth) + 'px',
    transform: `translateY(${bannerTransY}px)`,
  } as CSSProperties

  const cubicCSS = {
    width: String(cubicWidth) + 'px',
    height: String(cubicWidth * 1.75) + 'px',
  } as CSSProperties

  const comCSS = {
    transform: `translate(${trans.x}px, ${trans.y}px)`,
  }

  return (
    <div className='cubic' style={{ ...style, ...comCSS }}>
      <Image
        className='banner-img'
        style={bannerCSS}
        src={src}
        alt='banner'
        placeholder='blur'
      />
      <Image style={cubicCSS} src={CubicImg} alt='cubic' placeholder='blur' />
    </div>
  )
}
