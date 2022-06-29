import './App.css'
import { useState } from 'react'

function App() {
  const [time, setTime] = useState(new Date())

  setInterval(() => {
    let current = new Date()
    setTime(current)
  }, 1000) //1000 millisecond = 1 second

  return (
    <div className='App'>
      Current Time
      <div>
        {time.getDate()} - {time.getMonth() + 1} - {time.getFullYear()}
      </div>
      <div>
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </div>
    </div>
  )
}

export default App