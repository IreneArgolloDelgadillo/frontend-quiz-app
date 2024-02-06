import { useState } from 'react';
import initialData from '../assets/data/data.json'

const DataModule = () => {

  const [score, setScore] = useState(0);

  const getQuizByType = (type) => {
    return initialData.quizzes.filter((quiz) => {
      return quiz.title === type;
    });
  }

  const updateScore = (question, answer) => {
    let prevScore = score;

    if(question.answer === answer) {
      let newScore = prevScore + 1;
      setScore(newScore)
    }
    return score;
  }

  const validateAnswer = (question, answer) => {
    return question.answer === answer;
  }

  const questionTypes = {
    html: "HTML",
    css: "CSS",
    javaScript: "JavaScript",
    accesibility: "Accessibility"
  };

  const getData = () => {
    return "Datos del módulo";
  };

  return { 
    questionTypes,
    getQuizByType, 
    score, 
    updateScore,
    validateAnswer,
    getData
  };
};

export default DataModule;
