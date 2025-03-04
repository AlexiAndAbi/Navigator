import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page4() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("/unit1filetrees/FileTree33.png"); // Track the image

  const updateImage = (imageTag) => {
    if (imageTag === "change") {
      setImageSrc("/unit1filetrees/FileTree34.png");
    } else {
      setImageSrc("/unit1filetrees/FileTree33.png");
    }
  };

  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
  });
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
  });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
  });

  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level4-page3");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page5");
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
          [questionKey]: "page0.txt \u00A0\u00A0\u00A0 page1.txt",
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
      if (
        userInput === "cat page0.txt page1.txt > start.txt" ||
        userInput === "cat page1.txt page0.txt > start.txt"
      ) {
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
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean);

  useEffect(() => {
    if (correctAnswers.question1 && questionRefs.question2.current) {
      questionRefs.question2.current.scrollIntoView({
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
        <p>[####-------] 4/11</p>
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
          Concatenate!
          <br />
          As the name suggests, <span class="highlight4">cat</span> can do more
          than just print files. You can concatenate files using this command
          too. <br />
          <br /> To concatenate the contents of file2 onto the end of file1,
          type: <br /> cat file1 file2 {">"} file3 <br />
          <br />
          This command makes use of the redirect symbol "{">"}". In this case,
          the concatinated contents is placed into a file called file3. If file3
          does not already exist, it is created.
        </p>

        <>
          {/* Question 1 */}
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

          {/* Question 2 */}
          <div ref={questionRefs.question2}>
            {correctAnswers.question1 && (
              <>
                <p>
                  Concatenate page0.txt and page1.txt to a file called
                  start.txt.
                </p>
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
                <p className="fade-in">
                  <pre>{responses.question2}</pre>
                </p>
              </>
            )}
          </div>
        </>

        {/* Continue button */}
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
