import React, { useState } from 'react';
import './App.css';
import EndScreen from './Components/EndScreen';
import Login from './Components/Login';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Context';

function App() {
  const [gameState,setGameState]=useState("login");
  const [score,setScore]=useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState,score,setScore}}>
      {gameState === "login" && <Login />}
      {gameState==="menu" && <MainMenu/>}
      {gameState==="quiz" && <Quiz/>}
      {gameState==="endScreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
