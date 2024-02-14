import './WhyChoseUs.scss'
import Image from 'next/image'
import Button1 from '@/img/Button1.png'
import Button2 from '@/img/Button2.png'
import Button3 from '@/img/Button3.png'

export default function WhyChoseUs() {
  return (
    <div className='why-chose-us'>
      <ul className='box'>
        <li className='item'>
          <Image className='icon' src={Button1} alt='icon' placeholder='blur' />
          <div className='item-text'>
            <div className='head'>Reliable Shipping</div>
            <div className='describe'>
              Green Society provides Canada Post Xpress Shipping right to your
              doorstep! You can also opt in for shipping insurance. For orders
              over $149, shipping is free!
            </div>
          </div>
        </li>
        <li className='item'>
          <Image className='icon' src={Button2} alt='icon' placeholder='blur' />
          <div className='item-text'>
            <div className='head'>You’re Safe With Us</div>
            <div className='describe'>
              Our secure payment system accepts the most common forms of
              payments making the checkout process quicker! The payments we
              accept are debit, all major credit cards, and cryptocurrency.
            </div>
          </div>
        </li>
        <li className='item'>
          <Image className='icon' src={Button3} alt='icon' placeholder='blur' />
          <div className='item-text'>
            <div className='head'>Best Quality & Pricing</div>
            <div className='describe'>
              Here at Green Society, we take pride in the quality of our
              products and service. Our prices are set to ensure you receive
              your medication at a reasonable price and safely
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
