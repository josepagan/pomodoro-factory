import React, { useState } from "react";
import "./App.css";
import Timer from "./components/timer";

function App() {
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const handlePomodoro = () => {
    setPomodoroCount(pomodoroCount + 1);
  };
  
  return (
    <div className="App">
      <h1>Pomodoros: {pomodoroCount}</h1>
      <Timer pomodoro={handlePomodoro} />
    </div>
    //to do create new to do list... again grrr
  );
}

export default App;
