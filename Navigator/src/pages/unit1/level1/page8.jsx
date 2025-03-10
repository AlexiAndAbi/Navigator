import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page8() {
  const navigate = useNavigate();
  const [currentDirectory, setCurrentDirectory] = useState("home");
  const [imageSrc, setImageSrc] = useState(
    "/Navigator/unit1filetrees/FileTree1.png"
  );

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

  // Refs for input elements
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);

  // Ref for continue button
  const continueButtonRef = useRef(null);

  // Acceptable answers arrays
  const acceptableAnswersQ1 = ["ls"];
  const acceptableAnswersQ2 = ["cd directory1"];
  const acceptableAnswersQ3 = ["ls"];
  const acceptableAnswersQ4 = ["cd ..", "cd ~"];
  const acceptableAnswersQ5 = ["y", "yes"];

  useEffect(() => {
    if (inputRef1.current) {
      inputRef1.current.focus();
    }
  }, []);

  // When question 1 is answered correctly, scroll & focus question 2
  useEffect(() => {
    if (correctAnswers.question1 && inputRef2.current) {
      inputRef2.current.scrollIntoView({ block: "center" });
      inputRef2.current.focus();
    }
  }, [correctAnswers.question1]);

  // When question 2 is answered correctly, scroll & focus question 3
  useEffect(() => {
    if (correctAnswers.question2 && inputRef3.current) {
      inputRef3.current.scrollIntoView({ block: "center" });
      inputRef3.current.focus();
    }
  }, [correctAnswers.question2]);

  // When question 3 is answered correctly, scroll & focus question 4
  useEffect(() => {
    if (correctAnswers.question3 && inputRef4.current) {
      inputRef4.current.scrollIntoView({ block: "center" });
      inputRef4.current.focus();
    }
  }, [correctAnswers.question3]);

  // When question 4 is answered correctly, scroll & focus question 5
  useEffect(() => {
    if (correctAnswers.question4 && inputRef5.current) {
      inputRef5.current.scrollIntoView({ block: "center" });
      inputRef5.current.focus();
    }
  }, [correctAnswers.question4]);

  // When all questions are answered, scroll to & focus the continue button
  const allCorrect = Object.values(correctAnswers).every(Boolean);
  useEffect(() => {
    if (allCorrect && continueButtonRef.current) {
      continueButtonRef.current.scrollIntoView({ block: "center" });
      continueButtonRef.current.focus();
    }
  }, [allCorrect]);

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value });
  };

  const handleKeyPress = (e, questionKey, acceptableAnswers) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      checkAnswer(questionKey, acceptableAnswers);
    }
  };

  // checkAnswer now only updates state; scrolling is handled by useEffect hooks
  const checkAnswer = (questionKey, acceptableAnswers) => {
    const userInput = answers[questionKey].toLowerCase().trim();
    let isCorrect = false;
    let responseMessage = "";

    if (questionKey === "question1") {
      if (userInput === "ls") {
        isCorrect = true;
        responseMessage = "directory1  file1.txt  file2.txt";
      } else {
        responseMessage = `command not found: ${userInput}`;
      }
    } else if (questionKey === "question2") {
      if (userInput === "cd directory1") {
        isCorrect = true;
        setCurrentDirectory("directory1");
        updateImage("directory1");
        responseMessage = "";
      } else if (userInput === "cd [directory1]") {
        responseMessage = "Remove the brackets and you will be correct!";
      }
    } else if (questionKey === "question3") {
      if (userInput === "ls") {
        isCorrect = true;
        responseMessage = "file3.txt  file4.txt  directory3";
      } else {
        responseMessage = `command not found: ${userInput}`;
      }
    } else if (questionKey === "question4") {
      if (userInput === "cd .." || userInput === "cd ~") {
        isCorrect = true;
        setCurrentDirectory("home");
        updateImage("home");
        responseMessage = "";
      }
    } else if (questionKey === "question5") {
      if (userInput === "y" || userInput === "yes") {
        isCorrect = true;
        responseMessage = "";
      }
    }

    if (isCorrect) {
      setCorrectAnswers((prev) => ({ ...prev, [questionKey]: true }));
      setResponses((prev) => ({ ...prev, [questionKey]: responseMessage }));
    } else {
      setAnswers((prev) => ({ ...prev, [questionKey]: "" }));
      setResponses((prev) => ({ ...prev, [questionKey]: responseMessage }));
    }
  };

  return (
    <div className="gradient_background1">
      <button
        className="back-button"
        onClick={() => navigate("/Unit1-Level1-page7")}
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
      <div style={{ position: "fixed", top: "85px", right: "125px" }}>
        <img src={imageSrc} alt="Progress Icon" width="300" height="300" />
      </div>
      <div className="content">
        <p>
          Change Directory! <br />
          Abbreviated <span className="highlight">cd</span>, this command helps
          you move between directories.
          <br />
          <br />
          If you want to move into a directory within the current directory you
          can type:
          <br /> cd [directory name] (ex: cd directory1)
          <br />
          To move back to the directory outside of the current directory you can
          type:
          <br /> cd ..
          <br />
          To move back to the home directory from anywhere in the file system
          you can type:
          <br /> cd ~
        </p>

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
              onKeyDown={(e) =>
                handleKeyPress(e, "question1", acceptableAnswersQ1)
              }
              disabled={correctAnswers.question1}
              ref={inputRef1}
            />
          </div>
          <p className="fade-in unique-font">{responses.question1}</p>
        </div>

        {/* Question 2 */}
        {correctAnswers.question1 && (
          <div>
            <p>Move into the subdirectory.</p>
            <div className="command-line">
              <span className="directory-prompt">~ {">>"}</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question2}
                onChange={(e) => handleInputChange(e, "question2")}
                onKeyDown={(e) =>
                  handleKeyPress(e, "question2", acceptableAnswersQ2)
                }
                disabled={correctAnswers.question2}
                ref={inputRef2}
              />
            </div>
            <p className="fade-in unique-font">{responses.question2}</p>
          </div>
        )}

        {/* Question 3 */}
        {correctAnswers.question2 && (
          <div>
            <p>Display the contents of the current directory.</p>
            <div className="command-line">
              <span className="directory-prompt">directory1 {">>"}</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question3}
                onChange={(e) => handleInputChange(e, "question3")}
                onKeyDown={(e) =>
                  handleKeyPress(e, "question3", acceptableAnswersQ3)
                }
                disabled={correctAnswers.question3}
                ref={inputRef3}
              />
            </div>
            <p className="fade-in unique-font">{responses.question3}</p>
          </div>
        )}

        {/* Question 4 */}
        {correctAnswers.question3 && (
          <div>
            <p>Return to the home directory.</p>
            <div className="command-line">
              <span className="directory-prompt">directory1 {">>"}</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question4}
                onChange={(e) => handleInputChange(e, "question4")}
                onKeyDown={(e) =>
                  handleKeyPress(e, "question4", acceptableAnswersQ4)
                }
                disabled={correctAnswers.question4}
                ref={inputRef4}
              />
            </div>
            <p className="fade-in unique-font">{responses.question4}</p>
          </div>
        )}

        {/* Question 5 */}
        {correctAnswers.question4 && (
          <div>
            <p>Are you ready to learn the last command of this level?</p>
            <div className="command-line">
              <span className="directory-prompt">??</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question5}
                onChange={(e) => handleInputChange(e, "question5")}
                onKeyDown={(e) =>
                  handleKeyPress(e, "question5", acceptableAnswersQ5)
                }
                disabled={correctAnswers.question5}
                ref={inputRef5}
              />
            </div>
            <p className="fade-in unique-font">{responses.question5}</p>
          </div>
        )}

        {/* Continue button */}
        {allCorrect && (
          <button
            ref={continueButtonRef}
            className="navigate-button fade-in"
            onClick={() => navigate("/Unit1-Level1-page9")}
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
