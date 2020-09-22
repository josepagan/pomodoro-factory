import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Todo from './components/Todo'
import { Button, Grid, Card } from '@material-ui/core'
import CardsGrid from './components/Cards'
import NavBar from './components/NavBar'
import Theme from './components/Theme'
import axios from 'axios';

const App = () => {
  const [tasksLists, setTasksList] = useState(null);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [resData, setResData] = useState(null)
  const handlePomodoro = () => {
    setPomodoroCount(pomodoroCount + 1);
  };

  const fetchData =  function() {
    axios.get('http://localhost:3010/api/taskLists/')
      .then(res => setTasksList(res.data) )
  }

  useEffect(
    () => {      
      fetchData();
    }, [])

    useEffect(
      () => {      
        fetchData();
      }, [resData])
  


  return (
    <Theme>

    <div className="App">

      <NavBar />

      <h1>Pomodoros: {pomodoroCount}</h1>

      <Timer pomodoro={handlePomodoro} />
      <CardsGrid data={tasksLists} setTasksList={setTasksList} />
      
    </div>
    //to do create new to do list... again grrr
    //y muchas mas cosas
    </Theme>

  );
}

export default App;
