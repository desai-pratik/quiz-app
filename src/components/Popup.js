import React, { useState, useEffect } from "react";
// import MyButton from '../util/MyButton.jsx';
import Fade from "react-reveal/Fade";
import { Link, useLocation } from "react-router-dom";

const Popup = ({ style, startQuiz, score, total }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const quizType = queryParams.get("type");
  const [time, setTime] = useState("start");
  const [title, setTitle] = useState(`Welcome to the ${quizType.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())} Quiz`);
  const [text, setText] = useState("This is a quiz application built using ReactJS. ");
  const [buttonText, setButtonText] = useState("Start the quiz");
  const [endHome, setEndHome] = useState(null);

  const popupHandle = () => {
    if (time === "start") {
      setTime("end");
      setTitle("Congratulations!");
      setButtonText("Restart");
      setEndHome("Go To Home");
      startQuiz();
    } else {
      window.location.reload();
    }
  };

  const createMarkup = (htmlText) => {
    return { __html: htmlText };
  };

  useEffect(() => {
    if (time === "end") {
      setText(`You have completed the ${quizType.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())} quiz. <br /> You got: <strong>${score}</strong> out of <strong>${total}</strong> questions right.`);
    }
  }, [time, score, total]);

  return (
    <Fade delay={200}>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" style={style}>
      <div className="block w-full">
        <div className="h-full flex items-center justify-center">
          <div className="ml-5 w-96 bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl mb-4">{title}</h1>
            <p className="mb-4" dangerouslySetInnerHTML={createMarkup(text)} />
            <span onClick={popupHandle}>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-4 p-2 rounded me-3">{buttonText}</button>
              {endHome && (
                <Link to="/" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-4 p-2 rounded">
                  {endHome}
                </Link>
              )}
            </span>
          </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Popup;
