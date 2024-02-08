'use client'
import useTimeLeft from '~/hooks/useTimeLeft'
import './EventBanner.scss'
export default function EventBanner() {
  const timeLeft = useTimeLeft('2025-01-01 00:00:00')
  return (
    <div className='eventBanner'>
      <span className='description'>
        LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
      </span>
      <span className='timeLeft'>{timeLeft}</span>
    </div>
  )
}
