import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page9() {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);
  const [imageSrc, setImageSrc] = useState("/Navigator/unit1filetrees/FileTree38.png"); // Track the image

  const updateImage = (imageTag) => {
    if (imageTag === "change") {
      setImageSrc("/Navigator/unit1filetrees/FileTree35.png");
    } else if (imageTag === "one") {
      setImageSrc("/Navigator/unit1filetrees/FileTree39.png");
    } else {
      setImageSrc("/Navigator/unit1filetrees/FileTree38.png");
    }
  };

  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
  });
  const [showPrompt, setShowPrompt] = useState(false);
  const [overwriteResponse, setOverwriteResponse] = useState("");

  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
    overwrite: useRef(null),
  };

  const continueButtonRef = useRef(null);

  useEffect(() => {
    if (isToggled && continueButtonRef.current) {
      continueButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isToggled]);

  const handleNavigation = () => {
    navigate("/Unit1-Level4-page8");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page10");
  };

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value });
  };

  const handleKeyPress = (e, questionKey) => {
    if (e.key === "Enter" || e.key === "Tab") {
      checkAnswer(questionKey);
    }
  };

  const checkAnswer = (questionKey) => {
    const userInput = answers[questionKey].trim();

    if (questionKey === "question1") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "sub two.txt",
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

    if (questionKey === "question2") {
      if (userInput === "rm -r sub" || userInput === "rm -R sub") {
        updateImage("change");
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

    if (questionKey === "question3") {
      if (userInput === "rm -i two.txt") {
        setShowPrompt(true);
        setTimeout(() => questionRefs.overwrite.current?.focus(), 100);
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

  const handleOverwriteResponse = (e) => {
    if (e.key === "Enter") {
      let responseText = "\n";
      if (
        overwriteResponse.toLowerCase() === "y" ||
        overwriteResponse.toLowerCase() === "yes"
      ) {
        updateImage("one");
        responseText = "";
        setCorrectAnswers({ ...correctAnswers, question3: true });
      }
      setResponses({
        ...responses,
        question3: `remove two.txt? ${overwriteResponse}\n${responseText}`,
      });
      setIsToggled((prev) => {
        return !prev;
      });
      setShowPrompt(false);
      setOverwriteResponse("");
    }
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean);

  useEffect(() => {
    if (correctAnswers.question1 && questionRefs.question2.current) {
      questionRefs.question2.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (correctAnswers.question2 && questionRefs.question3.current) {
      questionRefs.question3.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [correctAnswers]);

  return (
    <div className="gradient_background4">
      <button
        className="navigate-button"
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
        <p>[#########--] 9/11</p>
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
          The remove command!
          <br />
          The <span className="highlight4">rm</span> command can be modified
          with the -r and -i flags.
          <br />
          <br /> -r <br />
          The -r flag removes files recursively in a directory. This flag
          enables us to remove directories that are not empty because all of the
          files inside them are removed as well. (-R is equivalent.)
          <br />
          <br /> -i <br />
          The -i flag, standing for interactive, prompts the user before
          removing files.
        </p>

        <div ref={questionRefs.question1}>
          <p>List directory contents.</p>
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

        {correctAnswers.question1 && (
          <div ref={questionRefs.question2}>
            <p>Remove the subdirectory using just the -r flag.</p>
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
          </div>
        )}

        {correctAnswers.question2 && (
          <div ref={questionRefs.question3}>
            <p>Remove the text file in this directory using the -i flag.</p>
            <div className="command-line">
              <span className="directory-prompt">~ {">>"}</span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question3}
                onChange={(e) => handleInputChange(e, "question3")}
                onKeyDown={(e) => handleKeyPress(e, "question3")}
                disabled={correctAnswers.question3 || showPrompt}
              />
            </div>
            <p className="fade-in">
              <pre>{responses.question3}</pre>
            </p>
            {showPrompt && (
              <p className="inline-p">
                remove two.txt
                <input
                  ref={questionRefs.overwrite}
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  value={overwriteResponse}
                  onChange={(e) => setOverwriteResponse(e.target.value)}
                  onKeyDown={handleOverwriteResponse}
                />
              </p>
            )}
          </div>
        )}

        {isToggled && (
          <button
            ref={continueButtonRef} // Add ref here
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

export default Page9;
