import { useEffect, useState } from 'react'

import './App.css'

function App() {
  //state
  const [time, setTime] = useState(new Date())

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date().getTime()
    let timeCount = birthDate - now //convert milliseconds to seconds

    let days = Math.floor(timeCount / (60 * 60 * 24)) //convert seconds to days
    let hours = Math.floor(
      (timeCount % (60 * 60 * 24)) / (60 * 60) //convert seconds to hours
    )
    // let minutes
    // let seconds

    return [days, hours]
  }

  useEffect(() => {
    const intervalTask = setInterval(() => {
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
