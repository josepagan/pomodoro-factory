
import React from 'react';
import { AppBar, Toolbar, Typography, Divider, Box, Button } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Timer from './Timer'
import axios from 'axios'

const NavBar = ({ pomodoroCount, handlePomodoro }) => {


  const handleNewList = () => {
    console.log('OMG NEW LIST HANDLER WORKING');
    //TODO gives error 404 , investigate problem
    axios.post('http://localhost:3010/api/tasksLists/')

    .then(res => console.log(res.data))
    // .then(res => pushNewTask(res.data))
  // event.preventDefault();
  }

  return (
    <div>
      <AppBar position="static" color="secondary">
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
          onClick={handleNewList}
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
