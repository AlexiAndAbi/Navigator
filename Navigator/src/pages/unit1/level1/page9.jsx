import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page9() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  });

  const [terminalCleared, setTerminalCleared] = useState(false); // Tracks if the terminal is cleared

  const acceptableAnswersQ1 = ["ls"];
  const acceptableAnswersQ2 = ["cd directory1"];
  const acceptableAnswersQ3 = ["ls"];
  const acceptableAnswersQ5 = ["clear"];

  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
    question4: useRef(null),
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level1-page8");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page10");
  };

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value });
  };

  const handleKeyPress = (e, questionKey) => {
    // Handle Ctrl + L for question 4
    if (questionKey === "question4" && e.key === "l" && e.ctrlKey) {
      setTerminalCleared(true);
      setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
      setResponses({ ...responses, [questionKey]: "" });
      return;
    }

    if (e.key === "Enter" || e.key === "Tab") {
      checkAnswer(questionKey);
    }
  };

  const checkAnswer = (questionKey) => {
    const userInput = answers[questionKey].toLowerCase().trim();

    if (questionKey === "question1") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "directory1  file1.txt  file2.txt",
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

    if (questionKey === "question2") {
      if (userInput === "cd directory1") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      } else if (userInput === "cd [directory1]") {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: "Remove the brackets and you will be correct!",
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
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "file3.txt  file4.txt  directory3",
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

    if (questionKey === "question4") {
      if (userInput === "clear") {
        setTerminalCleared(true);
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "" });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      }
      return;
    }
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean);

  useEffect(() => {
    if (correctAnswers.question1 && questionRefs.question2.current) {
      questionRefs.question2.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (correctAnswers.question2 && questionRefs.question3.current) {
      questionRefs.question3.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (correctAnswers.question3 && questionRefs.question4.current) {
      questionRefs.question4.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [correctAnswers]);

  return (
    <div className="gradient_background">
      <button
        className="navigate-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        back
      </button>

      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "16px",
          color: "white",
        }}
      >
        <p>[#########--] 9/11</p>
      </div>

      <div className="content">
        <p>
          Clear the Terminal <br /> Typing clear removes the contents displayed
          on the terminal. You can also type control + l to clear the terminal.
          (In the future, control will be abbreviated ctrl.)
        </p>

        {/* Hide questions 1-3 if the terminal is cleared */}
        {!terminalCleared && (
          <>
            {/* Question 1 */}
            <div ref={questionRefs.question1}>
              <p>List the contents of the current directory.</p>
              <div className="command-line">
                <span className="directory-prompt">~ {">>"}</span>
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
            <div ref={questionRefs.question2}>
              {correctAnswers.question1 && (
                <>
                  <p>Move into the subdirectory.</p>
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
                    />
                  </div>
                  <p className="fade-in">{responses.question2}</p>
                </>
              )}
            </div>

            {/* Question 3 */}
            <div ref={questionRefs.question3}>
              {correctAnswers.question2 && (
                <>
                  <p>List the contents of the current directory.</p>
                  <div className="command-line">
                    <span className="directory-prompt">directory1 {">>"}</span>
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
                </>
              )}
            </div>

            {/* Question 4 */}
            <div ref={questionRefs.question4}>
              {correctAnswers.question3 && (
                <>
                  <p>Clear the terminal.</p>
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
                    />
                  </div>
                  <p className="fade-in">{responses.question4}</p>
                </>
              )}
            </div>
          </>
        )}

        {/* Continue button */}
        {allCorrect && (
          <button
            className="navigate-button fade-in"
            onClick={handleNavigation2}
            style={{ border: "2px solid white", marginTop: "20px" }}
          >
            continue
          </button>
        )}
      </div>
    </div>
  );
}

export default Page9;
