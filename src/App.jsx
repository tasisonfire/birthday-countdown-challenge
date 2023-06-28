import { useEffect, useState } from "react";

import "./App.css";

function App() {
  //state
  const [time, setTime] = useState(new Date());

  const timeNow = new Date().getTime();
  // const getMonth = timeNow.getMonth() + 1;
  // const dayNow = Math.floor(timeNow / (60 * 60 * 24));
  const nowDate = new Date("June 28, 2023 00:00:00").getTime();
  const countDownDate = new Date("October 02, 2023 00:00:00").getTime();
  const countDownDateToDay = Math.floor(countDownDate / (60 * 60 * 24));
  const result = Math.floor(countDownDate - nowDate);
  const convToDay = Math.floor(result / (60 * 60 * 24));

  const birthDay = 2;
  const birthMonth = 10;
  const birthYear = 2023;

  const check = `${birthYear}, ${birthMonth}, ${birthDay}`;
  const birthDate = new Date(check).getTime();
  // console.log(birthDate);

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date().getTime();
    let timeCount = birthDate - now; //convert milliseconds to seconds

    let days = Math.floor(timeCount / (60 * 60 * 24)); //convert seconds to days
    let hours = Math.floor(
      (timeCount % (60 * 60 * 24)) / (60 * 60) //convert seconds to hours
    );
    // let minutes
    // let seconds

    return [days, hours];
  };

  useEffect(() => {
    const intervalTask = setInterval(() => {
      setTime(new Date());
    }, 1000); //1000 millisecond = 1 second
    return () => clearInterval(intervalTask);
  }, []);

  return (
    <div className="container">
      {nowDate}
      <br />
      {countDownDate}
      <br />
      {countDownDateToDay}
      <br />
      result: {result}
      <br />
      converted: {convToDay}
      <br />
      {time.getDate()}/{time.getMonth() + 1}/{time.getFullYear()}{" "}
      {time.getHours()}:{time.getMinutes() + 1}:{time.getSeconds()}
    </div>
  );
}

export default App;
