import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Todo from './components/Todo'
import { Button, Grid, Card } from '@material-ui/core'
import Cards from './components/Cards'
import NavBar from './components/NavBar'
import Theme from './components/Theme'

const App = () => {
  const [tasksLists, setTasksList] = useState(null);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const handlePomodoro = () => {
    setPomodoroCount(pomodoroCount + 1);
  };

  useEffect(
    () => {
      async function fetchData() {
        fetch('http://localhost:3010/api/taskLists/')
          .then(res => res.json())
          .then(data => setTasksList(data));
      }
      fetchData();
    }, [])



  return (
    <Theme>

    <div className="App">

      <NavBar />

      <h1>Pomodoros: {pomodoroCount}</h1>

      <Timer pomodoro={handlePomodoro} />
      <Cards data={tasksLists}/>
      
    </div>
    //to do create new to do list... again grrr
    //y muchas mas cosas
    </Theme>

  );
}

export default App;
