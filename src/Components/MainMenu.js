import React, { useContext } from 'react';
import '../App.css';
import { QuizContext } from '../Helpers/Context';
export default function MainMenu() {
  const {gameState, setGameState}=useContext(QuizContext);
  return (
    <div className="Menu">
      <h2>All the best</h2>
        <button onClick={()=> {
            setGameState("quiz");
        }}> Start Quiz</button>
    </div>
  )
}
