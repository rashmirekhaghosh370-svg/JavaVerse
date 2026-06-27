import React, { useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";
import HUD from "../../components/HUD/HUD";


function Quiz() {
const navigate = useNavigate();
const questions = [
{
question:"Which keyword is used to create a class in Java?",
options:["function","class","define","new"],
answer:"class"
},

{
question:"Which method is the entry point of Java?",
options:["start()","main()","run()","init()"],
answer:"main()"
},

{
question:"Which symbol ends a statement in Java?",
options:[".",";",":",","],
answer:";"
},

{
question:"Which data type stores whole numbers?",
options:["String","boolean","int","float"],
answer:"int"
},

{
question:"Java is a ______ language.",
options:["Programming","Database","Operating System","Browser"],
answer:"Programming"
}

];

const[current,setCurrent]=useState(0);
const [score, setScore] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState("");
const [showAnswer, setShowAnswer] = useState(false);
const handleAnswer = (selected) => {

  setSelectedAnswer(selected);
  setShowAnswer(true);

  if (selected === questions[current].answer) {
    setScore(score + 10);
  }

  setTimeout(() => {

    setShowAnswer(false);
    setSelectedAnswer("");

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      localStorage.setItem("score", score + (selected === questions[current].answer ? 10 : 0));
      navigate("/result");
    }

  }, 1000);

};
return(

<div className="quiz-page">
    <HUD />
    <div className="score-board">
  ⭐ Score : {score}
</div>
<h1>📝 Java Quiz</h1>
<div className="quiz-card">
<h2>
Question {current+1}/{questions.length}
</h2>

<p>{questions[current].question}</p>
<div className="options">
{
questions[current].options.map((option,index)=>

<button
  key={index}
  onClick={() => handleAnswer(option)}
  disabled={showAnswer}
  className={
    showAnswer
      ? option === questions[current].answer
        ? "correct"
        : option === selectedAnswer
        ? "wrong"
        : ""
      : ""
  }
>
  {option}
</button>
)
}
</div>
</div>
</div>
);
}
export default Quiz;