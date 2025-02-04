import React, { useState } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page3() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({ question1: "", question2: "" }); // State for both questions
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
  }); // Track correctness of each question

  const acceptableAnswersQ1 = ["file"]; // Acceptable answers for Question 1
  const acceptableAnswersQ2 = ["directory", "folder"]; // Acceptable answers for Question 2

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
    navigate("/Unit1-Level1-page2");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page4");
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean); // Check if all questions are correct

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
        <p>[###--------] 3/11</p>
      </div>

      <div className="content">
        <p>
          Before you begin learning commands, we need to briefly discuss
          computer structure.
        </p>
        <p>
          At its core, every computer is a collection of files that are
          organized into a structure known as the file system. A file system is
          constructed from two main elements:
        </p>
        <p>
          &emsp;&emsp;1. Files = a single entity (like a photo, video, text
          document, etc.)
          <br />
          &emsp;&emsp;2. Directories = also known as a folder, directories can
          hold files, &emsp;&emsp;other directories, or a combination of both
        </p>
        <p>What is a single piece of data called?</p>
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

        <p>What is a folder that contains files or other folders called?</p>
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
          style={{ border: "2px solid white", marginTop: "20px", marginBottom: "40px" }}
        >
          continue
        </button>
        )}
      </div>
    </div>
  );
}

export default Page3;
