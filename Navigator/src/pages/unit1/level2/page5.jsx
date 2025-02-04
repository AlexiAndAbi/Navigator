import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page5() {
  const navigate = useNavigate();

  const [fileName, setfileName] = useState(""); // To store the created file name

  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  }); // State for both questions

  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
  }); // Track correctness of each question

  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
  };

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
      const mkdirRegex = /^touch\s+(\w+\.txt)$/; // Matches 'touch <file-name>.txt'
      const match = mkdirRegex.exec(userInput);

      if (match) {
        const fName = match[1]; // Extract the file name
        setfileName(fName); // Store the file name
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
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
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: `directory1 ${fileName}`,
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

    if (questionKey === "question3") {
      if (userInput === `cat ${fileName}`) {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
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
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level2-page4");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level2-page6");
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
        <p>[#####--] 5/7</p>
      </div>

      <div className="content">
        <p>
          Make a file! <br />
          The command <span class="highlight">touch</span> creates an empty
          file. This command also offers no output when successful, however, you
          can type a quick ls to ensure the file has been created.
          <br />
          To make a new file you can type: <br /> cat [file name]
          &emsp;&emsp;&emsp;&emsp; (ex: cat hello.txt) <br />
        </p>
        <div ref={questionRefs.question1}>
          <p>
            Create a new file with a name of your choosing (hint: use the .txt
            file extension).
          </p>
          <div className="command-line">
            <span className="directory-prompt">~ {">>"}</span>
            <input
              type="text"
              style={{ fontSize: "20px", color: "white" }}
              className="input-box"
              value={answers.question1}
              onChange={(e) => handleInputChange(e, "question1")}
              onKeyDown={(e) => handleKeyPress(e, "question1")}
              disabled={correctAnswers.question1}
            />
          </div>
          <p className="fade-in">{responses.question1}</p>
        </div>

        {/* Question 2 */}
        <div ref={questionRefs.question2}>
          {correctAnswers.question1 && (
            <>
              <p>List the contents of the current directory.</p>
              <div className="command-line">
                <span className="directory-prompt">~ {">>"}</span>
                <input
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  className="input-box"
                  value={answers.question2}
                  onChange={(e) => handleInputChange(e, "question2")}
                  onKeyDown={(e) => handleKeyPress(e, "question2")}
                  disabled={correctAnswers.question2}
                />
              </div>
              <p className="fade-in">{responses.question2}</p>
            </>
          )}
        </div>

        {/* Question 3 */}
        <div ref={questionRefs.question3}>
          {correctAnswers.question2 && (
            <>
              <p>Display the contents of the file you created.</p>
              <div className="command-line">
                <span className="directory-prompt">~ {">>"}</span>
                <input
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  className="input-box"
                  value={answers.question3}
                  onChange={(e) => handleInputChange(e, "question3")}
                  onKeyDown={(e) => handleKeyPress(e, "question3")}
                  disabled={correctAnswers.question3}
                />
              </div>
              <p className="fade-in">{responses.question3}</p>
            </>
          )}
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

export default Page5;
