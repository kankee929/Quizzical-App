import React, { useEffect } from "react";
import "../App.css";

export const QuizMainPage = (props) => {
  // var optionsArray = props.options;
  // var rand = Math.floor(Math.random() * props.options.length);
  // useEffect(() => {
  //   optionsArray.splice(rand, 0, props.ans);
  // },[]);
// console.log(props.options)
  return (
    <div className="quiz-container">
      <p className="question">{props.ques}</p>    
      {/* {props.options}   */}
      {props.options.map((data) => (
        <button className="optionBtn">{data}</button>
      ))}

      <hr />
    </div>
  );
};
