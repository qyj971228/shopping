'use client'
import './Notification.scss'
import useTimeLeft from '~/hooks/useTimeLeft'

export default function Notification() {
  const timeLeft = useTimeLeft('2025-01-01 00:00:00')
  return (
    <div className='notification'>
      <span className='description'>
        LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
      </span>
      <div className='time-left' style={{ opacity: timeLeft ? 1 : 0 }}>
        {timeLeft}
      </div>
    </div>
  )
}
