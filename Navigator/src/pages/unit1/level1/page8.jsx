import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page8() {
  const navigate = useNavigate();
  const [currentDirectory, setCurrentDirectory] = useState("home"); // Track the directory
  const [imageSrc, setImageSrc] = useState(
    "/Navigator/unit1filetrees/FileTree1.png"
  ); // Track the image

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

  // Refs for scrolling
  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
    question4: useRef(null),
    question5: useRef(null),
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level1-page7");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page9");
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
        setCurrentDirectory("directory1");
        updateImage("directory1");
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
      if (userInput === "cd .." || userInput === "cd ~") {
        setCurrentDirectory("home");
        updateImage("home");
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

    if (questionKey === "question5") {
      if (userInput === "y" || userInput === "yes") {
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
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean);

  // Scroll to the next question when it's visible
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
        <p>[########---] 8/11</p>
      </div>

      <div
        style={{
          position: "fixed",
          top: "85px",
          right: "125px",
        }}
      >
        <img src={imageSrc} alt="Progress Icon" width="300" height="300" />
      </div>

      <div className="content">
        <p>
          Change Directory! <br /> Abbreviated <span class="highlight">cd</span>
          , this command helps you move between directories. <br />
          <br />
          If you want to move into a directory within the current directory you
          can type: <br /> cd [directory name] &emsp;&emsp; (ex: cd directory1)
          <br />
          To move back to the directory outside of the current directory you can
          type: <br /> cd ..
          <br />
          To move back to the home directory from anywhere in the file system
          you can type: <br /> cd ~
        </p>

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
          <p className="fade-in unique-font">{responses.question1}</p>
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
              <p className="fade-in unique-font">{responses.question2}</p>
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
              <p className="fade-in unique-font">{responses.question3}</p>
            </>
          )}
        </div>

        {/* Question 4 */}
        <div ref={questionRefs.question4}>
          {correctAnswers.question3 && (
            <>
              <p>Return to the home directory.</p>
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
              <p className="fade-in unique-font">{responses.question4}</p>
            </>
          )}
        </div>

        {/* Question 5 */}
        <div ref={questionRefs.question5}>
          {correctAnswers.question4 && (
            <>
              <p>Are you ready to learn the last command of this level?</p>
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
                />
              </div>
              <p className="fade-in unique-font">{responses.question5}</p>
            </>
          )}
        </div>

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

export default Page8;
