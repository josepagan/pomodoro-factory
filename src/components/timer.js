import React, { useState } from "react";
//using setInterval as the blog said...
import useInterval from "../useInterval";
// import './App.css';

function Timer({ pomodoro }) {
  const [timeLeft, setTimeleft] = useState(15);
  const [clockTicking, setClockTicking] = useState(false);

  useInterval(
    () => {
      tick();
    },
    clockTicking ? 1000 : null
  );

  const clickHandle = () => {
    setClockTicking(!clockTicking);
  };

  const tick = () => {
    setTimeleft(timeLeft - 1);
  };

  if (timeLeft < 0){
    setTimeleft(15);
    setClockTicking(false);
    pomodoro()
  }


  return (
    <div className="">
      <h1>{timeLeft}</h1>
      <button onClick={clickHandle}>Click me!</button>
    </div>
  );
}

export default Timer;
