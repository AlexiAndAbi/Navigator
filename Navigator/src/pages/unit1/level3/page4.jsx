import React, { useState, useRef, useEffect } from "react";
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

  // Create refs for both input elements
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  useEffect(() => {
    inputRef1.current.focus(); // Focus the first input when the component mounts
  }, []);

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value }); // Update the state for the specific question
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
    navigate("/Unit1-Level3-page3");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level3-page5");
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean); // Check if all questions are correct

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
        <p>[####---------] 4/13</p>
      </div>

      <div
        style={{
          position: "fixed",
          top: "85px",
          right: "20px",
        }}
      >
        <img
          src={"/Navigator/unit1filetrees/FileTree16.png"}
          alt="Progress Icon"
          width="450"
          height="600"
        />
      </div>

      <div className="content">
        <p>
          (2) Absolute Path = the location of a file in relation to the root
          directory of the user's computer.
        </p>
        <p>
          Take this example directory:
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            <br /> sample {">>"} ls <br />
            a.txt b.txt newFolder
          </span>
          <br />
        </p>
        <p>
          The absolute path for this directory might look something like:
          /User/username/sample
          <br />
          An absolute path will always start with a "/" character which
          represents the root directory. The absolute path of the home directory
          is usually /User/username.
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
