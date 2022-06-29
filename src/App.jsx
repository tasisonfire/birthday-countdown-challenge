import { useEffect, useState } from 'react'

import './App.css'

function App() {
  //state
  const [time, setTime] = useState(new Date())

  //<----------don't edit ---------->
  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date().getTime()
    let timeCount = birthDate - now

    let days = Math.floor(timeCount / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
      (timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((timeCount % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeCount % (1000 * 60)) / 1000)

    return [days, hours, minutes, seconds]
  }

  useEffect(() => {
    const intervalTask = setInterval(() => {
      let birthDay = '11/26/2022' //your next birth date

      setTime(new Date())
    }, 1000) //1000 millisecond = 1 second
    return () => clearInterval(intervalTask)
  }, [])

  return (
    <div className='container'>
      {time.getDate()}/{time.getMonth() + 1}/{time.getFullYear()}{' '}
      {time.getHours()}:{time.getMinutes() + 1}:{time.getSeconds()}
    </div>
  )
}

export default App
