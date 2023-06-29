import { useEffect, useState } from "react";

import "./App.css";

function App() {
  //state
  const [time, setTime] = useState(new Date());
  const [countDown, setCountDown] = useState();

  // const nowDate = new Date("June 28, 2023 00:00:00").getTime();
  let nowDate = new Date().getTime();
  const birthDate = new Date("July 01, 2023 00:00:00").getTime();
  let distance = birthDate - nowDate;
  let newDays = Math.floor(distance / (1000 *60 * 60 * 24));
  let newHours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let newMins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let newSecs = Math.floor((distance % (1000 * 60)) / (1000));


  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date().getTime();
    let timeCount = birthDate - now; //convert milliseconds to seconds

    // let days
    let days = Math.floor(timeCount / (1000 * 60 * 60 * 24));
    // let hours
    let hours = days / 24;
    // let minutes
    let minutes = Math.floor(hours / 60);
    // let seconds
    let seconds = Math.floor(minutes / 60);

    return [days, hours, minutes, seconds];
  };

  useEffect(() => {
    const intervalTask = setInterval(() => {
      setTime(new Date());
    }, 1000); //1000 millisecond = 1 second
    return () => clearInterval(intervalTask);
  }, []);

  return (
    <div className="container">
      Start: {distance}
      <br />
      Days: {newDays}
      <br />
      Hours: {newHours}
      <br />
      Mins: {newMins}
      <br />
      Secs: {newSecs}
      <br />
      {time.getDate()}/{time.getMonth() + 1}/{time.getFullYear()}{" "}
      {time.getHours()}:{time.getMinutes() + 1}:{time.getSeconds()}
    </div>
  );
}

export default App;
