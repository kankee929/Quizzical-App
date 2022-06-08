import "./App.css";
import { QuizMainPage } from "./Components/QuizMainPage";
import { QuizStartPage } from "./Components/QuizStartPage";
import React from "react";

function App() {
  const [allQuest, setAllQuest] = React.useState([]);
  const [correctAnsCounter, setCorrectAnsCounter] = React.useState(0)
  const [selectedOption, setSelectedOption] = React.useState([])
  const [checkResult, setCheckResult] = React.useState(false)
  const [startQuiz, setStartQuiz] = React.useState(false)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((resp) => resp.json())
      .then((results) => setAllQuest(amendArray(results.results)));
  }, []);

  function amendArray(arr) {
    const data = arr.map(item => ({
      ...item,
      iselected: false,
      btnStyle:["styleDefault","styleDefault","styleDefault","styleDefault"],
      optionsArray: item.incorrect_answers.splice(Math.floor(Math.random() * item.incorrect_answers.length), 0, item.correct_answer),
      id: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }))
    return data
  }

  function checkresult() {
    if (selectedOption.length === allQuest.length) {
      setCheckResult(oldValue => !oldValue)
    }
    else {
      selectedOption.map(data =>
      (allQuest.map(item =>
        (data.id === item.id && data.optionSelected === item.correct_answer) &&
        setCorrectAnsCounter(prevValue => prevValue + 1)
      )))
    }
  }

  function collectAnswers(qid, optionSelected) {
    let isPresent = selectedOption.find(data => data.id === qid)

    if (!isPresent || selectedOption.length === 0) {
      setSelectedOption(arrValues => [...arrValues, { id: qid, optionSelected: optionSelected }])
    }
  }

  function beginQuiz() {
    setStartQuiz(true)
  }

  function playAgain() {
    window.location.reload(false)
  }
console.log(allQuest);
  const QuizElements = allQuest.map((data1) => {
    return (
      <QuizMainPage
        key={data1.id}
        qid={data1.id}
        ques={data1.question}
        options={data1.incorrect_answers}
        collectAnswers={(qid, optionSelected) => collectAnswers(qid, optionSelected)}
        iselected={data1.iselected}
      />
    );
  });

  return (
    <div className="App">
      {!startQuiz
        ?
        <QuizStartPage beginQuiz={beginQuiz} />
        :
        <>
          {QuizElements}
          <div className="stat-container">
            {checkResult && <p className="score">You scored {correctAnsCounter}/10 correct answers.</p>}
            {!checkResult ?
              <button className="chk-ans" onClick={checkresult}>Check answers</button>
              :
              <button className="play-again" onClick={playAgain}>Play Again</button>
            }
          </div>
        </>
      }
    </div>
  );
}

export default App;
