import React, { useState } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page4() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({ question1: "", question2: "" }); // State for both questions
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
  }); // Track correctness of each question

  const acceptableAnswersQ1 = ["/"]; // Acceptable answers for Question 1
  const acceptableAnswersQ2 = ["~"]; // Acceptable answers for Question 2

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value }); // Update the state for the specific question
  };

  const handleKeyPress = (e, questionKey, acceptableAnswers) => {
    if (e.key === "Enter" || e.key === "Tab") {
      checkAnswer(questionKey, acceptableAnswers);
    }
  };

  const checkAnswer = (questionKey, acceptableAnswers) => {
    if (
      acceptableAnswers.some(
        (answer) => answers[questionKey].toLowerCase().trim() === answer
      )
    ) {
      setCorrectAnswers({ ...correctAnswers, [questionKey]: true }); // Mark the question as correct
    } else {
      setAnswers({ ...answers, [questionKey]: "" }); // Clear the input field for incorrect answers
    }
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level1-page3");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page5");
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean); // Check if all questions are correct

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
        <p>[####-------] 4/11</p>
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
              handleKeyPress(e, "question1", acceptableAnswersQ1)
            }
            disabled={correctAnswers.question1} // Disable if answered correctly
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
              handleKeyPress(e, "question2", acceptableAnswersQ2)
            }
            disabled={correctAnswers.question2} // Disable if answered correctly
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
