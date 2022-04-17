import "./App.css";
import { QuizMainPage } from "./Components/QuizMainPage";
import { QuizStartPage } from "./Components/QuizStartPage";
import React from "react";

function App() {
  const [allQuest, setAllQuest] = React.useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((resp) => resp.json())
      .then((results) => setAllQuest(results.results));
  }, []);

  function createOptionsArray(a, b) {
    var rand = Math.floor(Math.random() * a.length);
    // var arr = a.splice(rand, 0, b);
    return a.splice(rand, 0, b);
  }
  const QuizElements = allQuest.map((data1) => {
    return (
      <QuizMainPage
        key={data1.toString()}
        ques={data1.question}
        options={() =>
          createOptionsArray(data1.incorrect_answers, data1.correct_answer)
        }
        ians={data1.incorrect_answers}
        ans={data1.correct_answer}
      />
    );
  });

  return (
    <div className="App">
      {/* <QuizStartPage/> */}
      {QuizElements}
    </div>
  );
}

export default App;
