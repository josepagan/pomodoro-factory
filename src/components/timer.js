import React, { useState } from "react";
import useInterval from '../useInterval'
// import './App.css';

function Timer({ pomodoro }) {
  const [timeNow, setTimeNow] = useState({});
  const [timerStartPoint, setTimerstartPoint] = useState({});
  const [clockTicking, setClockTicking] = useState(false);

  useInterval(() => {
    tick()
  }, clockTicking ? 1000 : null)

  const clickHandle = () => {
    setClockTicking(!clockTicking)
  }
  const tick = () => {
    console.log("tick!!!");
  };

  const diff = timeNow - timerStartPoint;

  return (
    <div className="">
      <p>You clicked the button {diff.toString()} seconds ago </p>
      {/* <p>Time now it is {timeNow} </p> */}
      <button onClick={clickHandle}>Click me!</button>
    </div>
  );
}

export default Timer;
