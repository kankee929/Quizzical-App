import React, { useEffect } from "react";
import "../App.css";

export const QuizMainPage = (props) => {

  const styles = {
    backgroundColor: props.iselected ? "#D6DBF5" : "white",
    border: props.iselected && "none"
  }
  return (
    <div className="quiz-container">
      <p className="question">{props.ques}</p>
      {props.options.map((data) => (
        <button onClick={() => props.collectAnswers(props.qid,data)} className="optionBtn">{data}</button>
      ))}
      <hr />
    </div>
  );
};
