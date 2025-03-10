import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page9() {
  const navigate = useNavigate();
  const [currentDirectory, setCurrentDirectory] = useState("home"); // Track the directory
  const [imageSrc, setImageSrc] = useState("/Navigator/unit1filetrees/FileTree1.png"); // Track the image

  const updateImage = (newDirectory) => {
    if (newDirectory === "directory1") {
      setImageSrc("/Navigator/unit1filetrees/FileTree2.png");
    } else {
      setImageSrc("/Navigator/unit1filetrees/FileTree1.png");
    }
  };

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

  // Refs for input elements
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  // Ref for continue button
  const continueButtonRef = useRef(null);

  // Initially focus the first input
  useEffect(() => {
    if (inputRef1.current) {
      inputRef1.current.focus();
    }
  }, []);

  // When question1 is answered correctly, scroll & focus question2
  useEffect(() => {
    if (correctAnswers.question1 && inputRef2.current) {
      setTimeout(() => {
        inputRef2.current.scrollIntoView({ behavior: "smooth", block: "center" });
        inputRef2.current.focus();
      }, 150);
    }
  }, [correctAnswers.question1]);

  // When question2 is answered correctly, scroll & focus question3
  useEffect(() => {
    if (correctAnswers.question2 && inputRef3.current) {
      setTimeout(() => {
        inputRef3.current.scrollIntoView({ behavior: "smooth", block: "center" });
        inputRef3.current.focus();
      }, 150);
    }
  }, [correctAnswers.question2]);

  // When question3 is answered correctly, scroll & focus question4
  useEffect(() => {
    if (correctAnswers.question3 && inputRef4.current) {
      setTimeout(() => {
        inputRef4.current.scrollIntoView({ behavior: "smooth", block: "center" });
        inputRef4.current.focus();
      }, 150);
    }
  }, [correctAnswers.question3]);

  // When all answers are correct, scroll & focus the continue button
  const allCorrect = Object.values(correctAnswers).every(Boolean);
  useEffect(() => {
    if (allCorrect && continueButtonRef.current) {
      setTimeout(() => {
        continueButtonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        continueButtonRef.current.focus();
      }, 150);
    }
  }, [allCorrect]);

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
    // Handle Ctrl + L for question4 to clear the terminal
    if (questionKey === "question4" && e.key === "l" && e.ctrlKey) {
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
    const userInput = answers[questionKey].toLowerCase().trim();
    if (questionKey === "question1") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "directory1  file1.txt  file2.txt" });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({ ...responses, [questionKey]: `command not found: ${userInput}` });
      }
      return;
    }
    if (questionKey === "question2") {
      if (userInput === "cd directory1") {
        setCurrentDirectory("directory1");
        updateImage("directory1");
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "" });
      } else if (userInput === "cd [directory1]") {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({ ...responses, [questionKey]: "Remove the brackets and you will be correct!" });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({ ...responses, [questionKey]: "" });
      }
      return;
    }
    if (questionKey === "question3") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "file3.txt  file4.txt  directory3" });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({ ...responses, [questionKey]: `command not found: ${userInput}` });
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
        setResponses({ ...responses, [questionKey]: "" });
      }
      return;
    }
  };

  return (
    <div className="gradient_background1">
      <button className="back-button" onClick={handleNavigation} style={{ border: "2px solid white" }}>
        back
      </button>
      <div style={{ position: "fixed", top: "10px", right: "20px", fontSize: "16px", color: "white" }}>
        <p>[#########--] 9/11</p>
      </div>
      <div style={{ position: "fixed", top: "85px", right: "125px" }}>
        <img src={imageSrc} alt="Progress Icon" width="300" height="300" />
      </div>
      <div className="content">
        <p>
          Clear the Terminal! <br />
          Typing <span className="highlight">clear</span> removes the contents displayed on the terminal.
          You can also type control + l to clear the terminal. (In the future, control will be abbreviated ctrl.)
        </p>
        {/* Hide questions 1-3 if terminal is cleared */}
        {!terminalCleared && (
          <>
            {/* Question 1 */}
            <div>
              <p>Display the contents of the current directory.</p>
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
                  ref={inputRef1}
                />
              </div>
              <p className="fade-in unique-font">{responses.question1}</p>
            </div>
            {/* Question 2 */}
            <div>
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
                      ref={inputRef2}
                    />
                  </div>
                  <p className="fade-in unique-font">{responses.question2}</p>
                </>
              )}
            </div>
            {/* Question 3 */}
            <div>
              {correctAnswers.question2 && (
                <>
                  <p>Display the contents of the current directory.</p>
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
                      ref={inputRef3}
                    />
                  </div>
                  <p className="fade-in unique-font">{responses.question3}</p>
                </>
              )}
            </div>
            {/* Question 4 */}
            <div>
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
                      ref={inputRef4}
                    />
                  </div>
                  <p className="fade-in unique-font">{responses.question4}</p>
                </>
              )}
            </div>
          </>
        )}
        {/* Continue button */}
        {allCorrect && (
          <button
            ref={continueButtonRef}
            className="navigate-button fade-in"
            onClick={handleNavigation2}
            style={{ border: "2px solid white", marginTop: "20px", marginBottom: "40px" }}
          >
            continue
          </button>
        )}
      </div>
    </div>
  );
}

export default Page9;
