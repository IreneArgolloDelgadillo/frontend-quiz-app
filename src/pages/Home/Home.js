import "./Home.css";
import DataModule from "../../services/DataModule.js";
import SubjectPanel from "../../components/SubjectPanel/SubjectPanel.js";
import { ReactComponent as HtmlIcon } from "../../assets/images/icon-html.svg";
import { ReactComponent as CssIcon } from "../../assets/images/icon-css.svg";
import { ReactComponent as JsIcon } from "../../assets/images/icon-js.svg";
import { ReactComponent as AccesibilityIcon } from "../../assets/images/icon-accessibility.svg";

import React, { useState, useEffect } from "react";

import Quiz from "../Quiz/Quiz.js";

const Home = () => {
  const dataModule = DataModule();

  const [showQuizPage, setShowQuizPage] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [quiz, setQuiz] = useState({ quiestions: [] });

  const handleButtonClick = (type) => {
    setShowQuizPage(!showQuizPage);
    setShowHome(!showHome);
    const quiz2 = dataModule.getQuizByType(type);
    setQuiz(quiz2[0]);
    console.log("A", quiz2);
  };

  return (
    <object>
      {showHome && (
        <div className="app-content">
          <div className="dashboard">
            <div className="title">
              <label>Welcome to the </label>
              <br />
              <b>Frontend Quiz!</b>
            </div>
            <br />
            <label>Pick a subject to get started.</label>
          </div>
          <div className="subject-list">
            <div
              className="subject-item"
              onClick={() => {
                handleButtonClick(dataModule.questionTypes.html);
              }}
            >
              <HtmlIcon className="subject-icon html-icon" />
              <label className="subject-text">HTML</label>
            </div>
            <div
              className="subject-item"
              onClick={() => {
                handleButtonClick(dataModule.questionTypes.css);
              }}
            >
              <CssIcon className="subject-icon css-icon" />
              <label className="subject-text">CSS</label>
            </div>
            <div
              className="subject-item"
              onClick={() => {
                handleButtonClick(dataModule.questionTypes.javaScript);
              }}
            >
              <JsIcon className="subject-icon js-icon" />
              <label className="subject-text">Javascript</label>
            </div>
            <div
              className="subject-item"
              onClick={() => {
                handleButtonClick(dataModule.questionTypes.accesibility);
              }}
            >
              <AccesibilityIcon className="subject-icon accesibility-icon" />
              <label className="subject-text">Accessibility</label>
            </div>
          </div>
        </div>
      )}

      {showQuizPage && <Quiz quiz={quiz} showHome= {showHome} setShowHome={setShowHome}/>}
    </object>
  );
};

export default Home;
