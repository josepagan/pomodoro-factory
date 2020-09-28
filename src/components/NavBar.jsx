
import React from 'react';
import { AppBar, Toolbar, Typography, Divider, Box, Button } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
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
          {/* <AddBoxIcon fontSize="large" /> */}
          <Button
          onClick={()=>{console.log('OMG')}}
            variant="contained"
            color="primary"
            // className={classes.button}
            startIcon={<AddBoxIcon />}
          >New List </Button>


        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
