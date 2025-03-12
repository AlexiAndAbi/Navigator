import React, { useState, useRef, useEffect } from "react";
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

  // Create refs for both input elements
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

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
    const userInput = answers[questionKey].toLowerCase().trim();

    // Custom answer checking logic for question1
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
    }

    // Custom answer checking logic for question2
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
    }

    // If the answer is correct, focus the next input and scroll into view
    if (acceptableAnswers.some((answer) => userInput === answer)) {
      setCorrectAnswers({ ...correctAnswers, [questionKey]: true });

      // Move focus to the next input if it exists
      if (nextInputRef && nextInputRef.current) {
        nextInputRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        nextInputRef.current.focus();
      }
    } else {
      setAnswers({ ...answers, [questionKey]: "" });
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
        <p>[#######-----] 7/12</p>
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
          List Directory Contents! <br />
          Abbreviated <span className="highlight">ls</span>, this command
          displays the contents of the current directory you are in. This
          command displays files as well as directories.
          <br />
          <br />
          <span className="highlight">ls</span> is an example of a command.
          Commands can be entered on the command line to produce a specific
          output. For example, when you type:
          <br />{" "}
          <p
            style={{
              fontFamily: '"Consolas", monospace',
              fontSize: "20px",
            }}
          >
            ~ {">>"} ls
          </p>{" "}
          the command line will display the contents of the current directory.
          The name of the current directory will always be displayed to the left
          of the command prompt ({">>"}). For example, in the first question
          below, you are in the home directory (indicated by the ~).
          <br /> <b>Note:</b> All commands are <b>case sensitive!</b>
        </p>
        <p>
          Input the command that displays the contents of the current directory
        </p>
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
              handleKeyPress(e, "question1", acceptableAnswersQ1, inputRef2)
            }
            disabled={correctAnswers.question1}
            ref={inputRef1} // Attach ref for the first input
          />
        </div>
        <p className="fade-in unique-font">{responses.question1}</p>

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
              handleKeyPress(e, "question2", acceptableAnswersQ2, null)
            }
            disabled={correctAnswers.question2}
            ref={inputRef2} // Attach ref for the second input
          />
        </div>
        <p className="fade-in unique-font">{responses.question2}</p>
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
