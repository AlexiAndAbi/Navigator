import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page10() {
  const navigate = useNavigate();
  const [currentDirectory, setCurrentDirectory] = useState("home");
  const [imageSrc, setImageSrc] = useState(
    "/Navigator/unit1filetrees/FileTree1.png"
  );

  const updateImage = (newDirectory) => {
    if (newDirectory === "directory1") {
      setImageSrc("/Navigator/unit1filetrees/FileTree2.png");
    } else if (newDirectory === "directory3") {
      setImageSrc("/Navigator/unit1filetrees/FileTree3.png");
    } else {
      setImageSrc("/Navigator/unit1filetrees/FileTree1.png");
    }
  };

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
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [terminalCleared, setTerminalCleared] = useState(false);

  // Refs for question containers (if needed)
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

  // Refs for input elements
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  const inputRef7 = useRef(null);
  const inputRef8 = useRef(null);
  const inputRef9 = useRef(null);

  // Ref for continue button
  const continueButtonRef = useRef(null);

  // Initially focus the first input
  useEffect(() => {
    if (inputRef1.current) {
      inputRef1.current.focus();
    }
  }, []);

  // Dedicated useEffects for scrolling & focusing the next input:
  useEffect(() => {
    if (correctAnswers.question1 && inputRef2.current) {
      setTimeout(() => {
        inputRef2.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef2.current.focus();
      }, 150);
    }
  }, [correctAnswers.question1]);

  useEffect(() => {
    if (correctAnswers.question2 && inputRef3.current) {
      setTimeout(() => {
        inputRef3.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef3.current.focus();
      }, 150);
    }
  }, [correctAnswers.question2]);

  useEffect(() => {
    if (correctAnswers.question3 && inputRef4.current) {
      setTimeout(() => {
        inputRef4.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef4.current.focus();
      }, 150);
    }
  }, [correctAnswers.question3]);

  useEffect(() => {
    if (correctAnswers.question4 && inputRef5.current) {
      setTimeout(() => {
        inputRef5.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef5.current.focus();
      }, 150);
    }
  }, [correctAnswers.question4]);

  useEffect(() => {
    if (correctAnswers.question5 && inputRef6.current) {
      setTimeout(() => {
        inputRef6.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef6.current.focus();
      }, 150);
    }
  }, [correctAnswers.question5]);

  useEffect(() => {
    if (correctAnswers.question6 && inputRef7.current) {
      setTimeout(() => {
        inputRef7.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef7.current.focus();
      }, 150);
    }
  }, [correctAnswers.question6]);

  useEffect(() => {
    if (correctAnswers.question7 && inputRef8.current) {
      setTimeout(() => {
        inputRef8.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef8.current.focus();
      }, 150);
    }
  }, [correctAnswers.question7]);

  useEffect(() => {
    if (correctAnswers.question8 && inputRef9.current) {
      setTimeout(() => {
        inputRef9.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef9.current.focus();
      }, 150);
    }
  }, [correctAnswers.question8]);

  // When all answers are correct, scroll to and focus the continue button.
  const allCorrect = Object.values(correctAnswers).every(Boolean);
  useEffect(() => {
    if (allCorrect && continueButtonRef.current) {
      setTimeout(() => {
        continueButtonRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        continueButtonRef.current.focus();
      }, 150);
    }
  }, [allCorrect]);

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

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value });
  };

  const handleKeyPress = (e, questionKey) => {
    // Handle Ctrl + L for question6 to clear terminal
    if (questionKey === "question6" && e.key === "l" && e.ctrlKey) {
      setTerminalCleared(true);
      setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
      setResponses({ ...responses, [questionKey]: "" });
      return;
    }
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      checkAnswer(questionKey);
    }
  };

  const checkAnswer = (questionKey) => {
    if (gameOver) return;
    const userInput = answers[questionKey].toLowerCase().trim();

    if (questionKey === "question1") {
      if (userInput === "y" || userInput === "yes") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "" });
        if (!timerStarted) {
          setTimerStarted(true);
        }
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({ ...responses, [questionKey]: "" });
      }
      return;
    }
    if (questionKey === "question2") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "directory1  file1.txt  file2.txt",
        });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({ ...responses, [questionKey]: "" });
      }
      return;
    }
    if (questionKey === "question3") {
      if (userInput === "cd directory1") {
        setCurrentDirectory("directory1");
        updateImage("directory1");
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
    if (questionKey === "question4") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "file3.txt  file4.txt  directory3",
        });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({ ...responses, [questionKey]: "" });
      }
      return;
    }
    if (questionKey === "question5") {
      if (userInput === "2" || userInput === "two") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "" });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({ ...responses, [questionKey]: "" });
      }
      return;
    }
    if (questionKey === "question6") {
      if (userInput === "clear") {
        setTerminalCleared(true);
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "" });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({ ...responses, [questionKey]: "" });
      }
      return;
    }
    if (questionKey === "question7") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "file3.txt  file4.txt  directory3",
        });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({ ...responses, [questionKey]: "" });
      }
      return;
    }
    if (questionKey === "question8") {
      if (userInput === "cd directory3") {
        setCurrentDirectory("directory3");
        updateImage("directory3");
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
    if (questionKey === "question9") {
      if (userInput === "cd ..") {
        setCurrentDirectory("directory1");
        updateImage("directory1");
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
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level1-page9");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page11");
  };

  return (
    <div className="gradient_background1">
      <button
        className="back-button"
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
      <div style={{ position: "fixed", top: "85px", right: "125px" }}>
        <img src={imageSrc} alt="Progress Icon" width="300" height="300" />
      </div>
      <div className="content">
        <p>
          You have 60 seconds to complete the following minigame! <br />
        </p>
        <p>Time remaining: {timeLeft}s</p>
        {gameOver && (
          <p className="fade-in" style={{ color: "red" }}>
            Time's up! Try again.
          </p>
        )}
        {!terminalCleared && (
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
                  ref={inputRef1}
                />
              </div>
              <p className="fade-in unique-font">{responses.question1}</p>
            </div>

            {/* Question 2 */}
            {correctAnswers.question1 && (
              <div ref={questionRefs.question2}>
                <p>List the contents of the current directory.</p>
                <div className="command-line">
                  <span className="directory-prompt">~ {">>"}</span>
                  <input
                    type="text"
                    style={{ fontSize: "20px", color: "white" }}
                    className="input-box"
                    value={answers.question2}
                    onChange={(e) => handleInputChange(e, "question2")}
                    onKeyDown={(e) => handleKeyPress(e, "question2")}
                    disabled={correctAnswers.question2}
                    ref={inputRef2}
                  />
                </div>
                <p className="fade-in unique-font">{responses.question2}</p>
              </div>
            )}

            {/* Question 3 */}
            {correctAnswers.question1 && correctAnswers.question2 && (
              <div ref={questionRefs.question3}>
                <p>Move into the subdirectory.</p>
                <div className="command-line">
                  <span className="directory-prompt">~ {">>"}</span>
                  <input
                    type="text"
                    style={{ fontSize: "20px", color: "white" }}
                    className="input-box"
                    value={answers.question3}
                    onChange={(e) => handleInputChange(e, "question3")}
                    onKeyDown={(e) => handleKeyPress(e, "question3")}
                    disabled={correctAnswers.question3}
                    ref={inputRef3}
                  />
                </div>
                <p className="fade-in unique-font">{responses.question3}</p>
              </div>
            )}

            {/* Question 4 */}
            {correctAnswers.question2 && correctAnswers.question3 && (
              <div ref={questionRefs.question4}>
                <p>List the contents of the current directory.</p>
                <div className="command-line">
                  <span className="directory-prompt">directory1 {">>"}</span>
                  <input
                    type="text"
                    style={{ fontSize: "20px", color: "white" }}
                    className="input-box"
                    value={answers.question4}
                    onChange={(e) => handleInputChange(e, "question4")}
                    onKeyDown={(e) => handleKeyPress(e, "question4")}
                    disabled={correctAnswers.question4}
                    ref={inputRef4}
                  />
                </div>
                <p className="fade-in unique-font">{responses.question4}</p>
              </div>
            )}

            {/* Question 5 */}
            {correctAnswers.question4 && (
              <div ref={questionRefs.question5}>
                <p>How many files are in this directory?</p>
                <div className="command-line">
                  <span className="directory-prompt">??</span>
                  <input
                    type="text"
                    style={{ fontSize: "20px", color: "white" }}
                    className="input-box"
                    value={answers.question5}
                    onChange={(e) => handleInputChange(e, "question5")}
                    onKeyDown={(e) => handleKeyPress(e, "question5")}
                    disabled={correctAnswers.question5}
                    ref={inputRef5}
                  />
                </div>
                <p className="fade-in unique-font">{responses.question5}</p>
              </div>
            )}

            {/* Question 6 */}
            {correctAnswers.question5 && (
              <div ref={questionRefs.question6}>
                <p>Clear the terminal.</p>
                <div className="command-line">
                  <span className="directory-prompt">directory1 {">>"}</span>
                  <input
                    type="text"
                    style={{ fontSize: "20px", color: "white" }}
                    className="input-box"
                    value={answers.question6}
                    onChange={(e) => handleInputChange(e, "question6")}
                    onKeyDown={(e) => handleKeyPress(e, "question6")}
                    disabled={correctAnswers.question6}
                    ref={inputRef6}
                  />
                </div>
                <p className="fade-in unique-font">{responses.question6}</p>
              </div>
            )}
          </>
        )}

        {/* Question 7 */}
        {terminalCleared && (
          <div ref={questionRefs.question7}>
            <p>List the contents of the current directory.</p>
            <div className="command-line">
              <span className="directory-prompt">directory1 {">>"}</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question7}
                onChange={(e) => handleInputChange(e, "question7")}
                onKeyDown={(e) => handleKeyPress(e, "question7")}
                disabled={correctAnswers.question7}
                ref={inputRef7}
              />
            </div>
            <p className="fade-in unique-font">{responses.question7}</p>
          </div>
        )}

        {/* Question 8 */}
        {terminalCleared && correctAnswers.question7 && (
          <div ref={questionRefs.question8}>
            <p>Move into the subdirectory.</p>
            <div className="command-line">
              <span className="directory-prompt">directory1 {">>"}</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question8}
                onChange={(e) => handleInputChange(e, "question8")}
                onKeyDown={(e) => handleKeyPress(e, "question8")}
                disabled={correctAnswers.question8}
                ref={inputRef8}
              />
            </div>
            <p className="fade-in unique-font">{responses.question8}</p>
          </div>
        )}

        {/* Question 9 */}
        {terminalCleared && correctAnswers.question8 && (
          <div ref={questionRefs.question9}>
            <p>Return to the parent directory.</p>
            <div className="command-line">
              <span className="directory-prompt">directory3 {">>"}</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question9}
                onChange={(e) => handleInputChange(e, "question9")}
                onKeyDown={(e) => handleKeyPress(e, "question9")}
                disabled={correctAnswers.question9}
                ref={inputRef9}
              />
            </div>
            <p className="fade-in unique-font">{responses.question9}</p>
          </div>
        )}

        {/* Continue button */}
        {allCorrect && (
          <button
            ref={continueButtonRef}
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
