import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page10() {
  const navigate = useNavigate();
  const [currentDirectory, setCurrentDirectory] = useState("home"); // Track the directory
  const [imageSrc, setImageSrc] = useState(
    "/Navigator/unit1filetrees/FileTree28.png"
  ); // Track the image

  const updateImage = (newDirectory) => {
    if (newDirectory === "file") {
      setImageSrc("/Navigator/unit1filetrees/FileTree29.png");
    } else if (newDirectory === "directory") {
      setImageSrc("/Navigator/unit1filetrees/FileTree30.png");
    } else {
      setImageSrc("/Navigator/unit1filetrees/FileTree28.png");
    }
  };

  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
  });

  const [terminalCleared, setTerminalCleared] = useState(false); // Tracks if the terminal is cleared

  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
    question4: useRef(null),
    question5: useRef(null),
  };

  // Refs for input elements
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);

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
        inputRef2.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef2.current.focus();
      }, 150);
    }
  }, [correctAnswers.question1]);

  // When question2 is answered correctly, scroll & focus question3
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

  // When question3 is answered correctly, scroll & focus question4
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

  // When question4 is answered correctly, scroll & focus question5
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

  // When all answers are correct, scroll & focus the continue button
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

  const handleNavigation = () => {
    navigate("/Unit1-Level3-page9");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level3-review");
  };

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value });
  };

  const handleKeyPress = (e, questionKey) => {
    // Handle Ctrl + L for question 4
    if (questionKey === "question5" && e.key === "l" && e.ctrlKey) {
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
    const userInput = answers[questionKey].trim();

    if (questionKey === "question1") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "extraCopy.doc report.doc sample",
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
      if (userInput === "rm extraCopy.doc") {
        setCurrentDirectory("file");
        updateImage("file");
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

    if (questionKey === "question3") {
      if (userInput === "rmdir sample") {
        setCurrentDirectory("directory");
        updateImage("directory");
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

    if (questionKey === "question4") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "report.doc",
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
    } else if (correctAnswers.question4 && questionRefs.question5.current) {
      questionRefs.question5.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [correctAnswers]);

  return (
    <div className="gradient_background3">
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
        <p>[##########---] 10/13</p>
      </div>

      <div
        style={{
          position: "fixed",
          top: "85px",
          right: "20px",
        }}
      >
        <img src={imageSrc} alt="Progress Icon" width="450" height="600" />
      </div>

      <div className="content">
        <p>
          Remove! <br /> Abbreviated <span class="highlight3">rm</span> and{" "}
          <span class="highlight3">rmdir</span>, these commands remove files and
          empty directories.
          <br />
          <br />
          To remove a file, type:
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            <br /> rm [file] &emsp;&emsp;&emsp;&emsp; (ex: rm duplicate.doc)
          </span>
          <br />
          To remove an empty directory, type:
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            <br /> rmdir [directory] &emsp;&emsp;&emsp;&emsp; (ex: rmdir
            example)
          </span>
          <br />
        </p>

        {/* Hide questions 1-3 if the terminal is cleared */}
        {!terminalCleared && (
          <>
            {/* Question 1 */}
            <div ref={questionRefs.question1}>
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
            <div ref={questionRefs.question2}>
              {correctAnswers.question1 && (
                <>
                  <p>Remove the file extraCopy.doc.</p>
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
            <div ref={questionRefs.question3}>
              {correctAnswers.question2 && (
                <>
                  <p>Remove the directory sample.</p>
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
                </>
              )}
            </div>

            {/* Question 4 */}
            <div ref={questionRefs.question4}>
              {correctAnswers.question3 && (
                <>
                  <p>Display the contents of the current directory.</p>
                  <div className="command-line">
                    <span className="directory-prompt">~ {">>"}</span>
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

            {/* Question 5 */}
            <div ref={questionRefs.question5}>
              {correctAnswers.question4 && (
                <>
                  <p>Clear the terminal.</p>
                  <div className="command-line">
                    <span className="directory-prompt">~ {">>"}</span>
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
