import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page4() {
  const navigate = useNavigate();

  const [directoryName, setDirectoryName] = useState(""); // To store the created directory name

  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  }); // State for both questions
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  }); // Track correctness of each question

  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
    question4: useRef(null),
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
      const mkdirRegex = /^mkdir\s+(\w+)$/; // Matches 'mkdir <directory-name>'
      const match = mkdirRegex.exec(userInput);

      if (match) {
        const dirName = match[1]; // Extract the directory name
        setDirectoryName(dirName); // Store the directory name
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
          [questionKey]: `a.txt abi5 ${directoryName}`,
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
      if (userInput === `cd ${directoryName}`) {
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

    if (questionKey === "question4") {
      if (userInput === "ls") {
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
    navigate("/Unit1-Level2-page3");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level2-page5");
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean); // Check if all questions are correct

  return (
    <div className="gradient_background2">
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
        <p>[####---] 4/7</p>
      </div>

      <div className="content">
        <p>
          Make directories! <br />
          Abbreviated <span class="highlight2">mkdir</span>, this command creates an empty directory. This
          command offers no output when successful, however, you can type a
          quick ls to ensure the directory has been created.
          <br />
          To make a new directory you can type: <br /> mkdir [directory name]
          &emsp;&emsp;&emsp;&emsp; (ex: mkdir RoadtripPhotos) <br />
        </p>
        <div ref={questionRefs.question1}>
          <p>
            Create a new directory with a name of your choosing (hint: don’t use
            a file extension).
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
              <p>Move into the new directory.</p>
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

        {/* Question 4 */}
        <div ref={questionRefs.question4}>
          {correctAnswers.question3 && (
            <>
              <p>List the contents of the current directory.</p>
              <div className="command-line">
                <span className="directory-prompt">
                  {directoryName || ""} {">>"}
                </span>
                <input
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  className="input-box"
                  value={answers.question4}
                  onChange={(e) => handleInputChange(e, "question4")}
                  onKeyDown={(e) => handleKeyPress(e, "question4")}
                  disabled={correctAnswers.question4}
                />
              </div>
              <p className="fade-in">{responses.question4}</p>
            </>
          )}
        </div>

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

export default Page4;
