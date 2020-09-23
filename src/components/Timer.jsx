import React, { useState } from "react";
import useInterval from "../useInterval";
import { Typography, Divider, Box, Paper, Button } from '@material-ui/core';
// import './App.css';
function Timer({ handlePomodoro }) {
  const defaultTime = 20 * 60
  const [timeLeft, setTimeleft] = useState(defaultTime);
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

  if (timeLeft < 0) {
    setTimeleft(defaultTime);
    setClockTicking(false);
    handlePomodoro();
  }

  return (
    <Paper>
      <Typography>{timeFormatter(timeLeft)}</Typography>
      <Button onClick={clickHandle}>Click me!</Button>
    </Paper>
  );
}

//TODO make sure that time and seconds always have 2 digits each
const timeFormatter = (time) => {
const mins = Math.floor(time / 60);
const secsLeft = time % 60;
return <Typography>{mins}:{secsLeft}</Typography>
}

export default Timer;
