import React, { useState, useEffect } from "react";
// import './App.css';

function Timer() {
  const [time, setTime] = useState(null);
  const [timerStart, setTimerstart] = useState(null);
  const start = ()=> {
    setInterval(()=>{
      const tick = new Date();
      setTime(tick.toTimeString())
    }, 1000)
  }



  const clickHadle = () => {
    const date = new Date();
    setTimerstart(date.toTimeString())
    start();

  }
  return (
    <div className="">
      <p>You clicked the button at {timerStart} </p>
      <p>Time now it is {time} </p>
      <button
        onClick={clickHadle}
      >
        Click me!
      </button>

      <p>That was</p>
    </div>
  );
}

export default Timer;
