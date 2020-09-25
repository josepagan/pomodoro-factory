import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Todo from './components/Todo'
import { Button, Grid, Card, Paper } from '@material-ui/core'
import CardsGrid from './components/Cards'
import NavBar from './components/NavBar'
import Theme from './components/Theme'
import axios from 'axios';

const App = () => {
  const [tasksLists, setTasksList] = useState(null);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const handlePomodoro = () => {
    setPomodoroCount(pomodoroCount + 1);
  };

  const fetchData = function () {
    axios.get('http://localhost:3010/api/taskLists/')
      .then(res => setTasksList(res.data))
  }

  useEffect( () => { fetchData();}, []) 

  return (
    <Theme>

      <div className="App">

        <NavBar
          pomodoroCount={pomodoroCount}
          handlePomodoro={handlePomodoro} />
        {/* TODO maybe instead of grids of separate list to do a tag filter mode */}
        {/* in which there is ony a filtered list of tasks dependant on the 
      active tags
        */}
        <CardsGrid data={tasksLists} setTasksList={setTasksList} />

      </div>
    </Theme>

  );
}

export default App;
