import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page5() {
  const navigate = useNavigate();

  const [fileName, setfileName] = useState(""); // To store the created file name
  const [currentDirectory, setCurrentDirectory] = useState("home"); // Track the directory
  const [imageSrc, setImageSrc] = useState(
    "/Navigator/unit1filetrees/FileTree8.png"
  ); // Track the image

  const updateImage = (newDirectory) => {
    if (newDirectory === "fileAdded") {
      setImageSrc("/Navigator/unit1filetrees/FileTree9.png");
    } else {
      setImageSrc("/Navigator/unit1filetrees/FileTree8.png");
    }
  };

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

  // Container refs for each question (if you wish to scroll to the container)
  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
  };

  // Input refs for auto‑focus
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const continueButtonRef = useRef(null);

  // Initially focus the first input
  useEffect(() => {
    if (inputRef1.current) {
      inputRef1.current.focus();
    }
  }, []);

  // When question1 is answered correctly, scroll to & focus question2
  useEffect(() => {
    if (correctAnswers.question1 && inputRef2.current) {
      setTimeout(() => {
        inputRef2.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef2.current.focus();
      }, 150);
    }
  }, [correctAnswers.question1]);

  // When question2 is answered correctly, scroll to & focus question3
  useEffect(() => {
    if (correctAnswers.question2 && inputRef3.current) {
      setTimeout(() => {
        inputRef3.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef3.current.focus();
      }, 150);
    }
  }, [correctAnswers.question2]);

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value });
  };

  const handleKeyPress = (e, questionKey) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      checkAnswer(questionKey);
    }
  };

  const checkAnswer = (questionKey) => {
    const userInput = answers[questionKey].trim();

    // Example of manual matching for question1
    if (questionKey === "question1") {
      const mkdirRegex = /^touch\s+(\w+\.\w+)$/; // Matches 'touch <file-name>.<extension>'
      const match = mkdirRegex.exec(userInput);

      if (match) {
        setCurrentDirectory("fileAdded");
        updateImage("fileAdded");
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
    navigate("/Unit1-Level2-review");
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean);
  useEffect(() => {
    if (allCorrect && continueButtonRef.current) {
      setTimeout(() => {
        continueButtonRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        continueButtonRef.current.focus();
      }, 150);
    }
  }, [allCorrect]);

  return (
    <div className="gradient_background2">
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
        <p>[#####--] 5/7</p>
      </div>

      <div
        style={{
          position: "fixed",
          top: "85px",
          right: "20px",
        }}
      >
        <img src={imageSrc} alt="Progress Icon" width="450" height="600" />
      </div>

      <div className="content">
        <p>
          Make a file! <br />
          The command <span class="highlight2">touch</span> creates an empty
          file. This command also offers no output when successful, however, you
          can type a quick ls to ensure the file has been created.
          <br />
          To make a new file you can type: <br /> touch [file name]
          &emsp;&emsp;&emsp;&emsp; (ex: touch hello.txt) <br />
        </p>
        <div ref={questionRefs.question1}>
          <p>
            Create a new file with a name of your choosing (hint: use a file
            extension).
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
              ref={inputRef1}
            />
          </div>
          <p className="fade-in unique-font">{responses.question1}</p>
        </div>

        {/* Question 2 */}
        <div ref={questionRefs.question2}>
          {correctAnswers.question1 && (
            <>
              <p>Display the contents of the current directory.</p>
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
                  ref={inputRef2}
                />
              </div>
              <p className="fade-in unique-font">{responses.question2}</p>
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
                  ref={inputRef3}
                />
              </div>
              <p className="fade-in unique-font">{responses.question3}</p>
            </>
          )}
        </div>

        {allCorrect && (
          <button
            ref={continueButtonRef}
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
