import { useState } from "react";
import DataModule from "../../services/DataModule.js";

const Quiz = (quizParam, showHome, setShowHome) => {
  const dataModule = DataModule();
  const quiz = quizParam.quiz;
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);
  const [lastanswer, setLastAnswer] = useState("");
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
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
    }
  };

  const validateAnswer = (answer) => {
    setLastAnswer(answer);
    let res = dataModule.validateAnswer(questionValue, answer);
    console.log("VA", res);
  };

  return (
    <div className="app-content">
      <div className="dashboard">
        <label>
          Question {currentAnswerIndex + 1} of {quiz.questions.length}
        </label>
        <div className="title">
          <b>{questionValue.question}</b>
        </div>
        <div className="progress-container">
          <div className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="subject-list">
        {questionValue.options.map((item, index) => (
          <div
            className="subject-item"
            onClick={() => {
              validateAnswer(item);
            }}
          >
            <b className="subject-icon letter-icon">{numberToLetter(index)}</b>
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
  );
};

export default Quiz;
