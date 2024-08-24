
import React, { useContext, useState } from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from "../Helpers/QuestionBank";

export default function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setOptionChosen(""); 
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button
          onClick={() => setOptionChosen("A")}
          style={{
            backgroundColor: optionChosen === "A" ? 'lightblue' : 'white',
            border: optionChosen === "A" ? '2px solid blue' : '1px solid grey'
          }}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          onClick={() => setOptionChosen("B")}
          style={{
            backgroundColor: optionChosen === "B" ? 'lightblue' : 'white',
            border: optionChosen === "B" ? '2px solid blue' : '1px solid grey'
          }}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          onClick={() => setOptionChosen("C")}
          style={{
            backgroundColor: optionChosen === "C" ? 'lightblue' : 'white',
            border: optionChosen === "C" ? '2px solid blue' : '1px solid grey'
          }}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          onClick={() => setOptionChosen("D")}
          style={{
            backgroundColor: optionChosen === "D" ? 'lightblue' : 'white',
            border: optionChosen === "D" ? '2px solid blue' : '1px solid grey'
          }}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

