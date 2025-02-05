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
  const acceptableAnswersQ2 = ["y", "yes"]; // Acceptable answers for Question 2

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
    navigate("/Unit1-Level3-page3");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level3-page5");
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean); // Check if all questions are correct

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
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "16px",
          color: "white",
        }}
      >
        <p>[####--------] 4/12</p>
      </div>

      <div className="content">
        <p>
          (2) Absolute Path = the location of a file in relation to the root
          directory of the user's computer.
        </p>
        <p>
          Take this example directory:
          <br /> sample {">>"} ls <br />
          a.txt b.txt newFolder
          <br />
        </p>
        <p>
          The absolute path for this directory might look something like:
          /User/username/sample
          <br />
          An absolute path will always start with a "/" character, which represents the root directory. 
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

        <p>Ready to start learning commands with paths?</p>
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
            style={{ border: "2px solid white", marginTop: "20px" }}
          >
            continue
          </button>
        )}
      </div>
    </div>
  );
}

export default Page4;
