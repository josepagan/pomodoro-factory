
import React from 'react';
import { AppBar, Toolbar, Typography, Divider, Box } from '@material-ui/core';
import Timer from './Timer'
const NavBar = ({ pomodoroCount, handlePomodoro }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box m={2}>
            <Typography variant="title" color="inherit">
              POMODORO FACTORY
          </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box m={2}>
            <Typography variant="title" color="inherit">
              POMODOROS: {pomodoroCount}
            </Typography>
          </Box>
          <Box m={2}>
            <Timer
              pomodoroCount={pomodoroCount}
              handlePomodoro={handlePomodoro}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
