import React from 'react';
import './App.css';
import Timer from './components/timer';

function App() {
  const handlePomodoro = () => console.log('omgpomodoro')
  return (
    <div className="App">
      <Timer pomodoro={handlePomodoro}/>
    </div>
  );
}

export default App;
