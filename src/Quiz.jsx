import React, { useState } from "react";
import "./Quiz.css";
import data from "./data";
import Result from "./Result"; 

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false); 

  const currentQuestion = data[currentIndex];

  const handleClick = (selectedOption) => {
    if (selectedOption === currentQuestion.ans) {
      setCorrect([...correct, selectedOption]);
    }

    if (currentIndex + 1 < data.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setQuizCompleted(true); 
    }
  };


  return (
    <div className="container">
      {quizCompleted ? (
        <Result correct={correct} total={data.length} />
      ) : (
        <>
          <div className="index">{currentIndex + 1} of {data.length}</div>
          <div className="question">{currentQuestion.question}</div>
          <div className="option">
            <ul>
              <li className="quiz-option" onClick={() => handleClick(currentQuestion.option1)}>{currentQuestion.option1}</li>
              <li className="quiz-option" onClick={() => handleClick(currentQuestion.option2)}>{currentQuestion.option2}</li>
              <li className="quiz-option" onClick={() => handleClick(currentQuestion.option3)}>{currentQuestion.option3}</li>
              <li className="quiz-option" onClick={() => handleClick(currentQuestion.option4)}>{currentQuestion.option4}</li>
            </ul>
          </div>
          <div className="button">
            <button className="buttonn">HIGHLIGHT</button>
          </div>
        </>
      )}
    </div>
  );
}
