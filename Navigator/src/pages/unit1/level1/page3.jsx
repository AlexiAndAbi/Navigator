import React, { useState, useRef, useEffect } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page3() {
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
    inputRef1.current.focus(); // Focus the first input element when the component mounts
  }, []);

  const acceptableAnswersQ1 = ["file"];
  const acceptableAnswersQ2 = ["directory", "folder"];

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

      // Move focus to the next input if available
      if (nextInputRef && nextInputRef.current) {
        nextInputRef.current.focus();
      }
    } else {
      setAnswers({ ...answers, [questionKey]: "" });
    }
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level1-page2");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page4");
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
          hold files, other directories, or a combination of both
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
              handleKeyPress(e, "question1", acceptableAnswersQ1, inputRef2)
            }
            disabled={correctAnswers.question1}
            ref={inputRef1} // Attach ref for the first input
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
              handleKeyPress(e, "question2", acceptableAnswersQ2, null)
            }
            disabled={correctAnswers.question2}
            ref={inputRef2} // Attach ref for the second input
          />
        </div>

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

export default Page3;
