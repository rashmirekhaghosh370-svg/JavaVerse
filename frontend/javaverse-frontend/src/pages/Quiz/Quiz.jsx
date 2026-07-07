import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";
import HUD from "../../components/HUD/HUD";

function Quiz() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "Which keyword is used to create a class in Java?",
      options: ["function", "class", "define", "new"],
      answer: "class",
    },
    {
      question: "Which method is the entry point of Java?",
      options: ["start()", "main()", "run()", "init()"],
      answer: "main()",
    },
    {
      question: "Which symbol ends a statement in Java?",
      options: [".", ";", ":", ","],
      answer: ";",
    },
    {
      question: "Which data type stores whole numbers?",
      options: ["String", "boolean", "int", "float"],
      answer: "int",
    },
    {
      question: "Java is a ______ language.",
      options: [
        "Programming",
        "Database",
        "Operating System",
        "Browser",
      ],
      answer: "Programming",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (showAnswer) return;

    if (timeLeft === 0) {
      handleAnswer("");
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, current, showAnswer]);

  const handleAnswer = (selected) => {
    setSelectedAnswer(selected);
    setShowAnswer(true);

    let newScore = score;

    if (selected === questions[current].answer) {
      newScore = score + 10;
      setScore(newScore);
    }

    setTimeout(() => {
      setShowAnswer(false);
      setSelectedAnswer("");

      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setTimeLeft(15);
      } else {
        localStorage.setItem("score", newScore);
        navigate("/result");
      }
    }, 1000);
  };

  return (
    <div className="quiz-page">
      <HUD />

      <div className="score-board">
        ⭐ Score : {score}
      </div>

      <div className="score-board">
        ⏳ Time : {timeLeft}
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <h1>📝 Java Quiz</h1>

      <div className="quiz-card">
        <h2>
          Question {current + 1}/{questions.length}
        </h2>

        <p>{questions[current].question}</p>

        <div className="options">
          {questions[current].options.map((option, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;