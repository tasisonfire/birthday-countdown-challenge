import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const getCountdown = (birthDate) => {
    let now = new Date().getTime()
    let timeCount = birthDate - now

    let days = Math.floor(timeCount / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
      (timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((timeCount % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeCount % (1000 * 60)) / 1000)
    setTime({
      days,
      hours,
      minutes,
      seconds,
    })
  }

  useEffect(() => {
    setInterval(() => {
      let day = 29 //your birth days
      let month = 6 //your month days
      let year =
        new Date().getMonth() + 1 > month
          ? new Date().getFullYear() + 1
          : new Date().getMonth() + 1 === month && new Date().getDate() > day
          ? new Date().getFullYear() + 1
          : new Date().getFullYear()

      let birthDate = new Date(`${month}/${day}/${year}`).getTime()
      getCountdown(birthDate)
    }, 1000) //1000 millisecond = 1 second
  }, [])

  return (
    <div className='container'>
      <div className='countdown'>
        <h1 className='countdown__title'>Countdown to my birthday</h1>
        <p className='countdown__sub-title'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas
          obcaecati atque? Aliquam architecto illum, dignissimos, amet incidunt
          at expedita quia, ex error molestiae impedit in est. Numquam, soluta
          dolor.
        </p>
        <div className='countdown__group'>
          <div className='countdown__card'>
            <div className='countdown__card--time'>{time.days}</div>
            <div className='countdown__card--title'>Day</div>
          </div>
          <div className='countdown__card'>
            <div className='countdown__card--time'>{time.hours}</div>
            <div className='countdown__card--title'>Hours</div>
          </div>
          <div className='countdown__card'>
            <div className='countdown__card--time'>{time.minutes}</div>
            <div className='countdown__card--title'>Minutes</div>
          </div>
          <div className='countdown__card'>
            <div className='countdown__card--time'>{time.seconds}</div>
            <div className='countdown__card--title'>Seconds</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
