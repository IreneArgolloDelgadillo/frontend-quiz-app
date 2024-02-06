import { ReactComponent as HtmlIcon } from "../../assets/images/icon-html.svg";
import { ReactComponent as CssIcon } from "../../assets/images/icon-css.svg";
import { ReactComponent as JsIcon } from "../../assets/images/icon-js.svg";
import { ReactComponent as AccesibilityIcon } from "../../assets/images/icon-accessibility.svg";
import React, { useState } from "react";
import Home from "../Home/Home";

function Score({ quiz, score, questionsQuantity, questionType }) {
  const [showScore, setShowScore] = useState(true);
  const playAgain = () => {
    setShowScore(false);
  };

  let icon;
  if (questionType == "HTML")
    icon = <HtmlIcon className="subject-icon html-icon" />;
  else if (questionType == "CSS")
    icon = <CssIcon className="subject-icon css-icon" />;
  else if (questionType == "JavaScript")
    icon = <JsIcon className="subject-icon js-icon" />;
  else if (questionType == "Accessibility")
    icon = <AccesibilityIcon className="subject-icon accesibility-icon" />;

  return (
    <object> 
      { showScore && (
      <div className="app-content">
        <div className="dashboard">
          <div className="title">
            <label>Quiz completed</label>
            <br />
            <b>You scored...</b>
          </div>
        </div>
        <div class="score-dashboard">
          <div className="score-details">
            <dic className="header-details">
              {icon}
              <b className="header-title">{questionType}</b>
            </dic>
            <div class="result-details"> {score} </div>
            <div className="subject-text">out of {questionsQuantity}</div>
          </div>

          <div
            className="answer-button"
            onClick={() => {
              playAgain();
            }}
          >
            Play Again
          </div>
        </div>
      </div>
      )}

      {!showScore && <Home />}
    </object>
  );
}

export default Score;
