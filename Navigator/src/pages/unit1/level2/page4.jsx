import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page4() {
  const navigate = useNavigate();

  const [directoryName, setDirectoryName] = useState(""); // To store the created directory name
  const [currentDirectory, setCurrentDirectory] = useState("home"); // Track the directory
  const [imageSrc, setImageSrc] = useState(
    "/Navigator/unit1filetrees/FileTree5.png"
  ); // Track the image

  const updateImage = (newDirectory) => {
    if (newDirectory === "directoryAdded") {
      setImageSrc("/Navigator/unit1filetrees/FileTree6.png");
    } else if (newDirectory === "goDown") {
      setImageSrc("/Navigator/unit1filetrees/FileTree7.png");
    } else {
      setImageSrc("/Navigator/unit1filetrees/FileTree5.png");
    }
  };

  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });
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
  });

  // Container refs for each question (if you wish to scroll to the container)
  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
    question4: useRef(null),
  };

  // Input refs for auto‑focus
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
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

  // When question3 is answered correctly, scroll to & focus question4
  useEffect(() => {
    if (correctAnswers.question3 && inputRef4.current) {
      setTimeout(() => {
        inputRef4.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef4.current.focus();
      }, 150);
    }
  }, [correctAnswers.question3]);

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

    if (questionKey === "question1") {
      // Expecting: mkdir <directoryName>
      const mkdirRegex = /^mkdir\s+(\w+)$/;
      const match = mkdirRegex.exec(userInput);
      if (match) {
        setCurrentDirectory("directoryAdded");
        updateImage("directoryAdded");
        const dirName = match[1];
        setDirectoryName(dirName);
        setCorrectAnswers((prev) => ({ ...prev, [questionKey]: true }));
        setResponses((prev) => ({ ...prev, [questionKey]: "" }));
      } else {
        setAnswers((prev) => ({ ...prev, [questionKey]: "" }));
        setResponses((prev) => ({
          ...prev,
          [questionKey]: `command not found: ${userInput}`,
        }));
      }
      return;
    }

    if (questionKey === "question2") {
      if (userInput === "ls") {
        setCorrectAnswers((prev) => ({ ...prev, [questionKey]: true }));
        setResponses((prev) => ({
          ...prev,
          [questionKey]: `earth.jpg milkyWay ${directoryName}`,
        }));
      } else {
        setAnswers((prev) => ({ ...prev, [questionKey]: "" }));
        setResponses((prev) => ({ ...prev, [questionKey]: "" }));
      }
      return;
    }

    if (questionKey === "question3") {
      if (userInput === `cd ${directoryName}`) {
        setCurrentDirectory("goDown");
        updateImage("goDown");
        setCorrectAnswers((prev) => ({ ...prev, [questionKey]: true }));
        setResponses((prev) => ({ ...prev, [questionKey]: "" }));
      } else {
        setAnswers((prev) => ({ ...prev, [questionKey]: "" }));
        setResponses((prev) => ({
          ...prev,
          [questionKey]: `command not found: ${userInput}`,
        }));
      }
      return;
    }

    if (questionKey === "question4") {
      if (userInput === "ls") {
        setCorrectAnswers((prev) => ({ ...prev, [questionKey]: true }));
        setResponses((prev) => ({ ...prev, [questionKey]: "" }));
      } else {
        setAnswers((prev) => ({ ...prev, [questionKey]: "" }));
        setResponses((prev) => ({
          ...prev,
          [questionKey]: `command not found: ${userInput}`,
        }));
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
        <p>[####----] 4/8</p>
      </div>
      <div style={{ position: "fixed", top: "85px", right: "20px" }}>
        <img src={imageSrc} alt="Progress Icon" width="450" height="600" />
      </div>
      <div className="content">
        <p>
          Make directories! <br />
          Abbreviated <span className="highlight2">mkdir</span>, this command
          creates an empty directory. This command offers no output when
          successful, however, you can type a quick ls to ensure the directory
          has been created.
          <br />
          To make a new directory you can type:
          <br />
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            mkdir [directory name] &emsp;&emsp;&emsp;&emsp; (ex: mkdir
            spacePhotos)
          </span>{" "}
          <br />
        </p>
        {/* Question 1 */}
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
              ref={inputRef1}
            />
          </div>
          <p className="fade-in">{responses.question1}</p>
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
              <p>Move into the new directory you just created.</p>
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
              <p className="fade-in">{responses.question3}</p>
            </>
          )}
        </div>

        {/* Question 4 */}
        <div ref={questionRefs.question4}>
          {correctAnswers.question3 && (
            <>
              <p>Display the contents of the current directory.</p>
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
                  ref={inputRef4}
                />
              </div>
              <p className="fade-in">{responses.question4}</p>
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

export default Page4;
