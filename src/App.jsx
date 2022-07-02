import './App.css'
import { useEffect, useState } from 'react'

import CardComponent from './components/Card'
import TitleComponent from './components/Title'
import SubTitleComponent from './components/SubTitle'

function App() {
  const title = 'Countdown to my birthday'
  const subTitle =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas obcaecati atque? Aliquam architecto illum, dignissimos, amet incidunt at expedita quia, ex error molestiae impedit in est. Numquam, soluta dolor.'

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const getCountdown = (birthDate) => {
    let now = new Date().getTime()
    let timeCount = (birthDate - now) / 1000 //convert milliseconds to seconds

    let days = Math.floor(timeCount / (60 * 60 * 24)) //convert seconds to days
    let hours = Math.floor((timeCount % (60 * 60 * 24)) / (60 * 60)) //convert seconds to hours
    let minutes = Math.floor((timeCount % (60 * 60)) / 60) //convert seconds to minutes
    let seconds = Math.floor(timeCount % 60) //convert to seconds

    return [days, hours, minutes, seconds]
  }

  useEffect(() => {
    const intervalTask = setInterval(() => {
      let birthDay = '11/26/2022' //your next birth date
      let birthDate = new Date(birthDay).getTime()
      let [days, hours, minutes, seconds] = getCountdown(birthDate)
      setTime({
        days,
        hours,
        minutes,
        seconds,
      })
    }, 1000) //1000 millisecond = 1 second
    return () => clearInterval(intervalTask)
  }, [])

  return (
    <div className='container'>
      <div className='countdown'>
        <TitleComponent title={title} />
        <SubTitleComponent subTitle={subTitle} />
        <div className='countdown__group'>
          <CardComponent time={time.days} title='Days' />
          <CardComponent time={time.hours} title='Hours' />
          <CardComponent time={time.minutes} title='Minutes' />
          <CardComponent time={time.seconds} title='Seconds' />
        </div>
      </div>
    </div>
  )
}

export default App
