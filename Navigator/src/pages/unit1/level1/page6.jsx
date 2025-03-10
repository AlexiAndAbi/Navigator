import React, { useState, useRef, useEffect } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page6() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  }); // State for both questions
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  }); // Track correctness of each question

  const acceptableAnswersQ1 = ["1", "one"]; // Acceptable answers for Question 1
  const acceptableAnswersQ2 = ["2", "two"]; // Acceptable answers for Question 2
  const acceptableAnswersQ3 = ["6", "six"]; // Acceptable answers for Question 3
  const acceptableAnswersQ4 = ["y", "yes"]; // Acceptable answers for Question 4

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  useEffect(() => {
    inputRef1.current.focus(); // Focus the first input when the component mounts
  }, []);

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
    navigate("/Unit1-Level1-page5");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page7");
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
        <p>[######-----] 6/11</p>
      </div>

      <div
        style={{
          position: "fixed",
          top: "85px",
          right: "125px",
        }}
      >
        <img
          src="/Navigator/unit1filetrees/FileTree1.png"
          alt="Progress Icon"
          width="300"
          height="300"
        />
      </div>

      <div className="content">
        <p>
          We can visualize the filesystem of a computer like the roots of a tree
          (or like an upside-down piece of coral).
        </p>
        <p>
          To help you visualize the filesystem we will provide you with these
          diagrams →
          <br />
          &emsp;&emsp;- Your current position will always be marked in dark
          blue.
          <br />
          &emsp;&emsp;- Directories will be represented by large circles.
          <br />
          &emsp;&emsp;- Files will be represented by small circles.
          <br />
          &emsp;&emsp;- The home directory will always be at the top.
        </p>
        <p>How many directories are in the home directory?</p>
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
            disabled={correctAnswers.question1} // Disable if answered correctly
            ref={inputRef1} // Attach ref for the first input
          />
        </div>
        <p>How many files are in the home directory?</p>
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
              handleKeyPress(e, "question2", acceptableAnswersQ2, inputRef3)
            }
            disabled={correctAnswers.question2} // Disable if answered correctly
            ref={inputRef2} // Attach ref for the first input
          />
        </div>
        <p>How many total files are there in this filesystem?</p>
        <div className="command-line">
          <span className="directory-prompt">??</span>
          <input
            type="text"
            style={{
              fontSize: "20px",
              color: "white",
            }}
            className="input-box"
            value={answers.question3}
            onChange={(e) => handleInputChange(e, "question3")}
            onKeyDown={(e) =>
              handleKeyPress(e, "question3", acceptableAnswersQ3, inputRef4)
            }
            disabled={correctAnswers.question3} // Disable if answered correctly
            ref={inputRef3} // Attach ref for the first input
          />
        </div>
        <p>Are you ready to learn your first command?</p>
        <div className="command-line">
          <span className="directory-prompt">??</span>
          <input
            type="text"
            style={{
              fontSize: "20px",
              color: "white",
            }}
            className="input-box"
            value={answers.question4}
            onChange={(e) => handleInputChange(e, "question4")}
            onKeyDown={(e) =>
              handleKeyPress(e, "question4", acceptableAnswersQ4, null)
            }
            disabled={correctAnswers.question4} // Disable if answered correctly
            ref={inputRef4} // Attach ref for the first input
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

export default Page6;
