import React, { useState, useEffect } from "react";
import Answers from "./Answers.js";
import Popup from "./Popup.js";
// import { data } from "../questions/data.js";
import { useLocation } from "react-router-dom";
import { generalKnowledge } from "../questions/generalKnowledge.js";
import { reactQuestions } from "../questions/reactQuestions.js";
import { nodeQuestions } from "../questions/nodeQuestions.js";
import { mathQuiz } from "../questions/mathQuiz.js";
import { historyOfIndia } from "../questions/historyOfIndia.js";
import { scienceAndTechnology } from "../questions/scienceAndTechnology.js";

const Quiz = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const quizType = queryParams.get("type");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [displayPopup, setDisplayPopup] = useState("flex");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correct, setCorrect] = useState(null);
  const [classNames, setClassNames] = useState(["", "", "", ""]);

  useEffect(() => {
    if (quizType === "generalKnowledge") {
      setData(generalKnowledge);
    } else if(quizType === "react") {
      setData(reactQuestions);
    } else if(quizType === "node") {
      setData(nodeQuestions);
    }else if(quizType === "maths") {
      setData(mathQuiz);
    }else if(quizType === "indianHistory") {
      setData(historyOfIndia);
    }else if(quizType === "scienceAndTechnology") {
      setData(scienceAndTechnology);
    }
  }, [quizType]);

  useEffect(() => {
    if (data.length > 0) {
      setTotal(data.length);
      insertData(count);
    }
  }, [data]);

  const insertData = (count) => {
    setQuestion(data[count].question);
    setAnswers([data[count].answers[0], data[count].answers[1], data[count].answers[2], data[count].answers[3]]);
    setCorrect(data[count].correct);
    setCount(count + 1);
  };

  const handleShowButton = () => {
    setShowButton(true);
    setQuestionAnswered(true);
  };

  const nextQuestion = () => {
    if (count === total) {
      setDisplayPopup("flex");
    } else {
      insertData(count);
      setClassNames(["", "", "", ""]);
      setShowButton(false);
      setQuestionAnswered(false);
    }
  };

  const handleStartQuiz = () => {
    setDisplayPopup("none");
    setCount(1);
  };

  const handleIncreaseScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <Popup style={{ display: displayPopup }} score={score} total={total} startQuiz={handleStartQuiz} />
      <div className="row">
        <div className="col-lg-12 col-md-10">
          <div className="mb-4">
            <h4 className="mb-5">
              Question {count}/{total}
            </h4>
            <p>{question}</p>
          </div>
          <Answers
            answers={answers}
            correct={correct}
            showButton={handleShowButton}
            isAnswered={questionAnswered}
            increaseScore={handleIncreaseScore}
            classNames={classNames}
            setClassNames={setClassNames}
          />
          <div id="submit">
            {showButton && (
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-4 p-2 rounded" onClick={nextQuestion}>
                {count === total ? "Finish quiz" : "Next question"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
