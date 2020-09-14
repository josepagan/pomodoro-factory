import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Todo from './components/Todo'
import { Button, Grid, Card } from '@material-ui/core'
import Cards from './components/Cards'
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
          .then(data => setTasksList(data));

        // setTasksList()
      }
      fetchData();
    }, [])



  return (
    <div className="App">

      <NavBar />

      {/* <Button variant="contained" color="primary"> Useless Button </Button> */}
      {/* header will go here */}
      <h1>Pomodoros: {pomodoroCount}</h1>

      <Timer pomodoro={handlePomodoro} />
      <Cards data={tasksLists}/>
      
    </div>
    //to do create new to do list... again grrr
    //y muchas mas cosas

  );
}

export default App;
