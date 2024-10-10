import React, { useState, useEffect } from "react";

const Answers = ({ answers, correct, increaseScore, isAnswered, showButton, classNames, setClassNames }) => {
  const checkAnswer = (e) => {
    if (!isAnswered) {
      const elem = e.currentTarget;
      const answer = Number(elem.dataset.id);
      const updatedClassNames = [...classNames];

      if (answer === correct) {
        updatedClassNames[answer - 1] = "right";
        increaseScore();
      } else {
        updatedClassNames[answer - 1] = "wrong";
      }
      setClassNames(updatedClassNames);
      showButton();
    }
  };

  return (
    <div id="answers">
      <ul className="space-y-4">
        <li onClick={checkAnswer} className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${classNames[0]} hover:bg-gray-200`} data-id="1">
          <span className="font-bold text-lg">A</span>
          <p className="ml-4 inline-block">{answers[0]}</p>
        </li>

        <li onClick={checkAnswer} className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${classNames[1]} hover:bg-gray-200`} data-id="2">
          <span className="font-bold text-lg">B</span>
          <p className="ml-4 inline-block">{answers[1]}</p>
        </li>

        <li onClick={checkAnswer} className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${classNames[2]} hover:bg-gray-200`} data-id="3">
          <span className="font-bold text-lg">C</span>
          <p className="ml-4 inline-block">{answers[2]}</p>
        </li>

        <li onClick={checkAnswer} className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${classNames[3]} hover:bg-gray-200`} data-id="4">
          <span className="font-bold text-lg">D</span>
          <p className="ml-4 inline-block">{answers[3]}</p>
        </li>
      </ul>
    </div>
  );
};

export default Answers;
