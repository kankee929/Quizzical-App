import React from "react";
import blobBlue from "../Images/blobsB.png";
import blobYellow from "../Images/blobsY.png";
import "../App.css";

export const QuizStartPage = () => {
  return (
    <div className="startpage-container">
      <img src={blobYellow} className="blobYellow" alt="image" />
      <h1 className="title">Quizzical</h1>
      <p className="description">Try this small quiz to test your knowledge.</p>
      <button className="quizBtn">Start quiz</button>
      <img src={blobBlue} className="blobBlue" alt="image" />
    </div>
  );
};
