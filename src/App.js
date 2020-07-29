import React, { useState } from "react";
import "./App.css";
import Timer from "./components/timer";
import Todo from './components/Todo'

const App = () => {
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const handlePomodoro = () => {
    setPomodoroCount(pomodoroCount + 1);
  };
  
  return (
    <div className="App">
      <h1>Pomodoros: {pomodoroCount}</h1>
      <Timer pomodoro={handlePomodoro} />
      // i think that the best thing I can doo is to trow all the todo datain an object
      <Todo id="001" name="original" />
      <Todo id="002" name="new todo" />
    </div>
    //to do create new to do list... again grrr
    //y muchas mas cosas

  );
}

export default App;
