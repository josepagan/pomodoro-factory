import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Todo from './components/Todo'
import { Button, Grid, Card } from '@material-ui/core'
import NavBar from './components/NavBar'

const App = () => {
  const [tasksLists, setTasksList] = useState(null);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const handlePomodoro = () => {
    setPomodoroCount(pomodoroCount + 1);
  };

  useEffect(
    () => {
      async function fetchData() {
        console.log("where the fuck is the data???")
        //todo I must add json parser to all this shit

        fetch('http://localhost:3010/api/taskLists/')
          .then(res => res.json())
          .then(data => console.log(data));

        // setTasksList()
      }
      fetchData();
    }, [])

  //for the design I am going to go for a simple card like design. So each card
  //will be a collection of tasks. instead of embeddig one into another I am
  //going to link them using tags. It would be could if I could open a
  //a "drawer of tags"

  return (
    <div className="App">

      <NavBar />

      {/* <Button variant="contained" color="primary"> Useless Button </Button> */}
      {/* header will go here */}
      <h1>Pomodoros: {pomodoroCount}</h1>

      <Timer pomodoro={handlePomodoro} />
      <Grid

        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={4}>
          <Card minHeight="25%">
            <Todo id="001" name="original" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Todo id="001" name="original" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Todo id="001" name="original" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Todo id="001" name="original" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Todo id="001" name="original" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Todo id="001" name="original" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Todo id="001" name="original" />
          </Card>
        </Grid>

      </Grid>
    </div>
    //to do create new to do list... again grrr
    //y muchas mas cosas

  );
}

export default App;
