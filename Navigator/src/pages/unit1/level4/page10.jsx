import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page10() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
  });
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
  });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false,
    question8: false,
    question9: false,
  });

  const [timeLeft, setTimeLeft] = useState(60); // Timer state
  const [gameOver, setGameOver] = useState(false); // Tracks if the timer runs out
  const [timerStarted, setTimerStarted] = useState(false); // Tracks if the timer has started

  // Refs for scrolling
  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
    question4: useRef(null),
    question5: useRef(null),
    question6: useRef(null),
    question7: useRef(null),
    question8: useRef(null),
    question9: useRef(null),
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level4-page9");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page11");
  };

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value });
  };

  const handleKeyPress = (e, questionKey) => {
    if (e.key === "Enter" || e.key === "Tab") {
      checkAnswer(questionKey);
    }
  };

  const checkAnswer = (questionKey) => {
    if (gameOver) return; // Disable input if the timer has run out

    const userInput = answers[questionKey].trim();

    if (questionKey === "question1") {
      if (userInput === "y" || userInput === "yes") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
        });

        // Start the timer when the first question is answered correctly
        if (!timerStarted) {
          setTimerStarted(true);
        }
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      }
      return;
    }

    if (questionKey === "question2") {
      if (userInput === "-R") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      }
      return;
    }

    if (questionKey === "question3") {
      if (userInput === ">") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      }
      return;
    }

    if (questionKey === "question4") {
      if (userInput === "-n") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: `command not found: ${userInput}`,
        });
      }
      return;
    }

    if (questionKey === "question5") {
      if (userInput === "q") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: `command not found: ${userInput}`,
        });
      }
      return;
    }

    if (questionKey === "question6") {
      if (
        userInput === "interactive" ||
        userInput === "INTERACTIVE" ||
        userInput === "Interactive"
      ) {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "" });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: `command not found: ${userInput}`,
        });
      }
      return;
    }

    if (questionKey === "question7") {
      if (
        userInput === "verbose" ||
        userInput === "VERBOSE" ||
        userInput === "Verbose"
      ) {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "c.txt a.txt b.txt" });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: `command not found: ${userInput}`,
        });
      }
      return;
    }

    if (questionKey === "question8") {
      if (userInput === "-i") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: `command not found: ${userInput}`,
        });
      }
      return;
    }

    if (questionKey === "question9") {
      if (userInput === "-r") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: `command not found: ${userInput}`,
        });
      }
      return;
    }
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean);

  // Timer logic
  useEffect(() => {
    let timer;
    if (timerStarted && timeLeft > 0 && !allCorrect) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, timerStarted, allCorrect]);

  // Scroll to the next question when it's visible
  useEffect(() => {
    Object.keys(questionRefs).forEach((questionKey, index) => {
      if (correctAnswers[questionKey] && questionRefs[questionKey]?.current) {
        questionRefs[questionKey].current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }, [correctAnswers]);

  return (
    <div className="gradient_background3">
      <button
        className="navigate-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        back
      </button>

      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "20px",
          fontSize: "16px",
          color: "white",
        }}
      >
        <p>[##########-] 10/11</p>
      </div>

      <div className="content">
        <p>
          You have 60 seconds to complete the following minigame! <br />
        </p>
        {/* Display Timer */}
        <p>Time remaining: {timeLeft}s</p>
        {gameOver && (
          <p className="fade-in" style={{ color: "red" }}>
            Time's up! Try again.
          </p>
        )}

        <>
          {/* Question 1 */}
          <div ref={questionRefs.question1}>
            <p>Ready to start?</p>
            <div className="command-line">
              <span className="directory-prompt">??</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question1}
                onChange={(e) => handleInputChange(e, "question1")}
                onKeyDown={(e) => handleKeyPress(e, "question1")}
                disabled={correctAnswers.question1}
              />
            </div>
            <p className="fade-in">{responses.question1}</p>
          </div>

          {/* Question 2 */}
          {correctAnswers.question1 && (
            <div ref={questionRefs.question2}>
              <p>
                What flag with the ls command shows files within directories?
              </p>
              <div className="command-line">
                <span className="directory-prompt">~ {"??"}</span>
                <input
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  className="input-box"
                  value={answers.question2}
                  onChange={(e) => handleInputChange(e, "question2")}
                  onKeyDown={(e) => handleKeyPress(e, "question2")}
                  disabled={correctAnswers.question2}
                />
              </div>
              <p className="fade-in">{responses.question2}</p>
            </div>
          )}

          {/* Question 3 */}
          {correctAnswers.question2 && (
            <div ref={questionRefs.question3}>
              <p>
                What character is the redirect symbol when concatenating files?
              </p>
              <div className="command-line">
                <span className="directory-prompt">~ {"??"}</span>
                <input
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  className="input-box"
                  value={answers.question3}
                  onChange={(e) => handleInputChange(e, "question3")}
                  onKeyDown={(e) => handleKeyPress(e, "question3")}
                  disabled={correctAnswers.question3}
                />
              </div>
              <p className="fade-in">{responses.question3}</p>
            </div>
          )}

          {/* Question 4 */}
          {correctAnswers.question3 && (
            <div ref={questionRefs.question4}>
              <p>What flag with the cat command shows line numbers?</p>
              <div className="command-line">
                <span className="directory-prompt">~ {"??"}</span>
                <input
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  className="input-box"
                  value={answers.question4}
                  onChange={(e) => handleInputChange(e, "question4")}
                  onKeyDown={(e) => handleKeyPress(e, "question4")}
                  disabled={correctAnswers.question4}
                />
              </div>
              <p className="fade-in">{responses.question4}</p>
            </div>
          )}

          {/* Question 5 */}
          {correctAnswers.question4 && (
            <div ref={questionRefs.question5}>
              <p>When using more, what key returns you to the command line?</p>
              <div className="command-line">
                <span className="directory-prompt">~ {"??"}</span>
                <input
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  className="input-box"
                  value={answers.question5}
                  onChange={(e) => handleInputChange(e, "question5")}
                  onKeyDown={(e) => handleKeyPress(e, "question5")}
                  disabled={correctAnswers.question5}
                />
              </div>
              <p className="fade-in">{responses.question5}</p>
            </div>
          )}

          {/* Question 6 */}
          {correctAnswers.question5 && (
            <div ref={questionRefs.question6}>
              <p>What does the -i flag stand for?</p>
              <div className="command-line">
                <span className="directory-prompt">~ {"??"}</span>
                <input
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  className="input-box"
                  value={answers.question6}
                  onChange={(e) => handleInputChange(e, "question6")}
                  onKeyDown={(e) => handleKeyPress(e, "question6")}
                  disabled={correctAnswers.question6}
                />
              </div>
              <p className="fade-in">{responses.question6}</p>
            </div>
          )}
        </>

        {/* Question 7 */}
        {correctAnswers.question6 && (
          <div ref={questionRefs.question7}>
            <p>What does the -v flag stand for?</p>
            <div className="command-line">
              <span className="directory-prompt">sample {"??"}</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question7}
                onChange={(e) => handleInputChange(e, "question7")}
                onKeyDown={(e) => handleKeyPress(e, "question7")}
                disabled={correctAnswers.question7}
              />
            </div>
            <p className="fade-in">{responses.question7}</p>
          </div>
        )}

        {/* Question 8 */}
        {correctAnswers.question7 && (
          <div ref={questionRefs.question8}>
            <p>What flag prompts the user for confirmation before overwriting files?</p>
            <div className="command-line">
              <span className="directory-prompt">sample {"??"}</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question8}
                onChange={(e) => handleInputChange(e, "question8")}
                onKeyDown={(e) => handleKeyPress(e, "question8")}
                disabled={correctAnswers.question8}
              />
            </div>
            <p className="fade-in">{responses.question8}</p>
          </div>
        )}

        {/* Question 9 */}
        {correctAnswers.question8 && (
          <div ref={questionRefs.question9}>
            <p>What flag do you use to remove directories that are not empty?</p>
            <div className="command-line">
              <span className="directory-prompt">sample {"??"}</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question9}
                onChange={(e) => handleInputChange(e, "question9")}
                onKeyDown={(e) => handleKeyPress(e, "question9")}
                disabled={correctAnswers.question9}
              />
            </div>
            <p className="fade-in">{responses.question9}</p>
          </div>
        )}

        {/* Continue button */}
        {allCorrect && (
          <button
            className="navigate-button fade-in"
            onClick={handleNavigation2}
            style={{
              border: "2px solid white",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            continue
          </button>
        )}
      </div>
    </div>
  );
}

export default Page10;
