import moment from 'moment'
import { useEffect, useState } from 'react'

const defaultTargetDate = '2024-12-31 23:59:59'

export default function useTimeLeft(target?: string) {
  const [timeLeft, setTimeLeft] = useState<string>('calculating...')

  useEffect(() => {
    function updateTimeLeft() {
      const targetDate = moment(target ?? defaultTargetDate)
      const now = moment()
      const diff = targetDate.diff(now)
      const duration = moment.duration(diff)
      // const days = duration.days()
      const hours = duration.hours()
      const minutes = duration.minutes()
      const seconds = duration.seconds()
      setTimeLeft(
        `${hours < 10 ? '0' + hours : hours} : ${
          minutes < 10 ? '0' + minutes : minutes
        } : ${seconds < 10 ? '0' + seconds : seconds}`
      )
    }
    updateTimeLeft()
    const interval = setInterval(updateTimeLeft, 1000)
    return () => clearInterval(interval)
  }, [target])

  return timeLeft
}
