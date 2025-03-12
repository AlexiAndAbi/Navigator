import React, { useState, useRef, useEffect } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page4() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({ question1: "", question2: "" });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
  });

  // Create refs for both input elements
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  useEffect(() => {
    inputRef1.current.focus(); // Focus the first input when the component mounts
  }, []);

  const acceptableAnswersQ1 = ["/"];
  const acceptableAnswersQ2 = ["~"];

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value });
  };

  const handleKeyPress = (e, questionKey, acceptableAnswers, nextInputRef) => {
    if (e.key === "Enter" || e.key === "Tab") {
      checkAnswer(questionKey, acceptableAnswers, nextInputRef);
    }
  };

  const checkAnswer = (questionKey, acceptableAnswers, nextInputRef) => {
    if (
      acceptableAnswers.some(
        (answer) => answers[questionKey].toLowerCase().trim() === answer
      )
    ) {
      setCorrectAnswers({ ...correctAnswers, [questionKey]: true });

      // Move focus to the next input if it exists
      if (nextInputRef && nextInputRef.current) {
        nextInputRef.current.focus();
      }
    } else {
      setAnswers({ ...answers, [questionKey]: "" });
    }
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level1-page3");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page5");
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean);

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
        <p>[####--------] 4/12</p>
      </div>

      <div className="content">
        <p>Here are some important terms you will need to know. </p>
        <p>
          1. The Root
          <br />
          &emsp;&emsp;The file system starts with a directory called the “root
          directory”. The root directory is denoted by the / symbol. This is
          where all files and directories originate from. We say that the root
          is at the “top” of the file system and everything else is “under” or
          “within” the root directory.
        </p>
        <p>What symbol represents the root directory?</p>
        <div className="command-line">
          <span className="directory-prompt">??</span>
          <input
            type="text"
            style={{
              fontSize: "20px",
              color: "white",
            }}
            className="input-box"
            value={answers.question1}
            onChange={(e) => handleInputChange(e, "question1")}
            onKeyDown={(e) =>
              handleKeyPress(e, "question1", acceptableAnswersQ1, inputRef2)
            }
            disabled={correctAnswers.question1}
            ref={inputRef1} // Attach ref for the first input
          />
        </div>
        <p>
          2. The Home Directory
          <br />
          &emsp;&emsp;Somewhere under the root directory there is your “home
          directory”. The home directory is denoted by the ~ symbol. When you
          open the terminal on your computer, the command line automatically
          starts at the home directory. In this game we will assume all commands
          are given starting at the home directory.
        </p>
        <p>What symbol represents the home directory?</p>
        <div className="command-line">
          <span className="directory-prompt">??</span>
          <input
            type="text"
            style={{
              fontSize: "20px",
              color: "white",
            }}
            className="input-box"
            value={answers.question2}
            onChange={(e) => handleInputChange(e, "question2")}
            onKeyDown={(e) =>
              handleKeyPress(e, "question2", acceptableAnswersQ2, null)
            }
            disabled={correctAnswers.question2}
            ref={inputRef2} // Attach ref for the second input
          />
        </div>

        {/* Show the Continue button if all answers are correct */}
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

export default Page4;
