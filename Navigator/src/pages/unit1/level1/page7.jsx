import React, { useState } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page7() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({ question1: "", question2: "" }); // State for both questions
  const [responses, setResponses] = useState({ question1: "", question2: "" });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
  }); // Track correctness of each question

  const acceptableAnswersQ1 = ["ls"]; // Acceptable answers for Question 1
  const acceptableAnswersQ2 = ["3", "three"]; // Acceptable answers for Question 2

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value }); // Update the state for the specific question
  };

  const handleKeyPress = (e, questionKey, acceptableAnswers) => {
    if (e.key === "Enter" || e.key === "Tab") {
      checkAnswer(questionKey, acceptableAnswers);
    }
  };

  const checkAnswer = (questionKey) => {
    const userInput = answers[questionKey].toLowerCase().trim();

    // Example of manual matching for question1
    if (questionKey === "question1") {
      if (userInput === "ls" || userInput === "list" || userInput === "ls -l") {
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

    // Example of manual matching for question2
    if (questionKey === "question2") {
      if (userInput === "3" || userInput === "three") {
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

  const handleNavigation = () => {
    navigate("/Unit1-Level1-page6");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page8");
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
        <p>[#######----] 7/11</p>
      </div>

      <div
        style={{
          position: "absolute",
          top: "85px",
          right: "125px",
        }}
      >
        <img
          src="/unit1filetrees/FileTree1.png"
          alt="Progress Icon"
          width="300"
          height="300"
        />
      </div>

      <div className="content">
        <p>
          List Directory Contents! <br />
          Abbreviated <span class="highlight">ls</span>, this command displays
          the contents of the current directory you are in. This command
          displays files as well as directories.
        </p>
        <p>List the contents of the current directory</p>
        <div className="command-line">
          <span className="directory-prompt">~ {">>"}</span>
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
        <p className="fade-in">{responses.question1}</p>

        <p>How many entries appeared?</p>
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
        <p className="fade-in">{responses.question2}</p>

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

export default Page7;
