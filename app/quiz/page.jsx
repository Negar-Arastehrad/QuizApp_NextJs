"use client";
import React, { useState } from "react";
import { quiz } from "../Data.js";
import Image from "next/image.js";
import Friends from "../../public/Img/friends.png";
import Style from "../Styles/Style.module.css";

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null); //k answeri k roosh click shode bg begire
  const [checked, setChecked] = useState(false); //k age answer enthekhab shod, dokme next faal she
  const [selectedAnswer, setSelectedAnswer] = useState(""); //befahmin answeri k entekhab shode dorost boode ya na
  const [disable, setDisable] = useState(false); //k bad az didane gozine dorost natoone pasokh ro avaz kone
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer, img } = questions[activeQuestion];

  const onAnswerSelected = (answer, id) => {
    setChecked(true);
    setSelectedAnswerIndex(id);
    setDisable(true);

    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setDisable(false);

    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 6,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    ); /* result k shamele score,correctanswers va wronganswers hast ro misaze va 
          ba har javabe jadid bayad inaro update kone va maghadire ghabli ro ham 
          hefz kone */

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <section>
      <div className={Style["main-container"]}>
        {!showResult ? (
          <h1>
            Question : {activeQuestion + 1}/{questions.length}
          </h1>
        ) : (
          <h1>Result</h1>
        )}

        {!showResult ? (
          <div className={Style["q-container"]}>
            <h2>{question}</h2>

            <div className={Style["row-container"]}>
              <ul>
                {answers.map((answer, id) => {
                  return (
                    <li
                      key={id}
                      onClick={() => onAnswerSelected(answer, id)}
                      className={`${
                        selectedAnswerIndex === id
                          ? Style["li-selected"]
                          : Style["li-hover"]
                      }`}
                      style={{
                        backgroundColor:
                          (selectedAnswerIndex === id &&
                            selectedAnswer !== true &&
                            "red") ||
                          (selectedAnswerIndex === id &&
                            selectedAnswer === true &&
                            "green"),
                        pointerEvents: disable && "none",
                      }}
                    >
                      {answer}
                    </li>
                  );
                })}
              </ul>

              <div className={Style["f-image"]}>
                <Image src={img} quality={100} />
              </div>
            </div>

            {checked ? (
              <button onClick={nextQuestion} className={Style.btn}>
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className={Style["btn-disabled"]}
                disabled
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            )}
          </div>
        ) : (
          <div className={Style["r-container"]}>
            <div className={Style.top}>
              <h2>
                Overall <span className={Style.mainSpan}>:</span>{" "}
                {Math.round((result.score / 36) * 100)} %
              </h2>
              <div className={Style["btn-container"]}>
                <button onClick={() => document.location.reload()}>
                  Restart
                </button>
              </div>
            </div>

            <div className={Style.line}></div>

            <div className={Style.down}>
              <div className={Style.content}>
                <h3>Details</h3>
                <p>
                  Total Questions : <span>{questions.length}</span>
                </p>
                <p>
                  Total Score : <span>{result.score}</span>
                </p>
                <p>
                  Correct Answers : <span>{result.correctAnswers}</span>
                </p>
                <p>
                  Wrong Answers : <span>{result.wrongAnswers}</span>
                </p>
              </div>

              <div className={Style.Rimg}>
                <Image src={Friends} quality={100} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
