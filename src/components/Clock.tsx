import { useEffect, useState } from 'react'
import './Clock.css'

export default function Clock() {
  const [clockText, setClockText] = useState('')

  function updateClockText() {
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()

    const displayHours = hours % 12 || 12
    const isPM = hours >= 12

    setClockText(
      `${String(displayHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${isPM ? 'PM' : 'AM'}`,
    )
  }

  useEffect(() => {
    updateClockText()

    const interval = setInterval(updateClockText, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div className="clockDisplay">{clockText}</div>
}
