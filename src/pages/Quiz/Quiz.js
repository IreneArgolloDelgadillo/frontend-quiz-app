import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Score from "./Score.js";
import DataModule from "../../services/DataModule.js";

const Quiz = (quizParam, showHome, setShowHome) => {
  const dataModule = DataModule();
  const quiz = quizParam.quiz;
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);
  const [lastanswer, setLastAnswer] = useState("");
  const [answerSelectedIndex, setAnswerSelectedIndex] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  let questionValue = quiz.questions[currentAnswerIndex];

  const numberToLetter = (index) => {
    return String.fromCharCode(64 + (index + 1));
  };

  const submitAnswer = () => {
    let newIndex = currentAnswerIndex + 1;
    if (newIndex < quiz.questions.length) {
      setCurrentAnswerIndex(newIndex);
      let result = dataModule.updateScore(questionValue, lastanswer);
      setScore(result);
      setProgress((prevProgress) => prevProgress + 10);
      console.log("Ss", result);
    } else {
      setShowScore(true);
    }
    const divId = answerSelectedIndex+"-option";
    const myDiv = document.getElementById(divId);
    myDiv.className = "subject-item";
    document.getElementById("0-option").className = "subject-item"
  };

  const validateAnswer = (answer, index) => {
    setLastAnswer(answer);
    let res =
      dataModule.validateAnswer(questionValue, answer) == true
        ? "correct-value"
        : "error-value";
        setAnswerSelectedIndex(index);
    const id=index+"-option";
    const myDiv = document.getElementById(id);
    myDiv.classList.add(res);
    console.log("VA", res);
  };

  return (
    <object>
      {!showScore && (
        <div className="app-content">
          <div className="dashboard">
            <label>
              Question {currentAnswerIndex + 1} of {quiz.questions.length}
            </label>
            <div className="title">
              <b>{questionValue.question}</b>
            </div>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div className="subject-list">
            {questionValue.options.map((item, index) => (
              <div
                id={`${index}-option`}
                className={`subject-item`}
                onClick={() => {
                  validateAnswer(item, index);
                }}
              >
                <b className="subject-icon letter-icon">
                  {numberToLetter(index)}
                </b>
                <label className="subject-text">{item}</label>
              </div>
            ))}
            <div
              class="subject-item answer-button"
              onClick={() => {
                submitAnswer();
              }}
            >
              Submit Answer
            </div>
          </div>
        </div>
      )}
      {showScore && (
        <Score
          quiz={questionValue}
          score={score}
          questionsQuantity={quiz.questions.length}
          questionType={quiz.title}
        />
      )}
    </object>
  );
};

export default Quiz;
