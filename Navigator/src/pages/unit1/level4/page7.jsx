import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page7() {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);

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
  const [showPrompt, setShowPrompt] = useState(false);
  const [overwriteResponse, setOverwriteResponse] = useState("");

  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    overwrite: useRef(null),
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level4-page6");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page8");
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
          [questionKey]: "lyrics.txt intro.mp3 newTrack",
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
        userInput === "mv -i -v intro.mp3 ./newTrack" ||
        userInput === "mv -v -i intro.mp3 ./newTrack"
      ) {
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
      let responseText = "not overwritten\n";
      if (
        overwriteResponse.toLowerCase() === "y" ||
        overwriteResponse.toLowerCase() === "yes"
      ) {
        responseText = "intro.mp3 -> ./newTrack/intro.mp3";
        setCorrectAnswers({ ...correctAnswers, question2: true });
      }
      setResponses({
        ...responses,
        question2: `overwrite ./newTrack/intro.mp3? (y/n [n]) ${overwriteResponse}\n${responseText}`,
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
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "16px",
          color: "white",
        }}
      >
        <p>[#####------] 5/11</p>
      </div>

      <div className="content">
        <p>The move command!</p>
        <p>...</p>

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
            <p>
              Move intro.mp3 into newTrack using the interactive and verbose
              option.
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
                disabled={correctAnswers.question2 || showPrompt}
              />
            </div>
            <p className="fade-in">
              <pre>{responses.question2}</pre>
            </p>
            {showPrompt && (
              <p className="inline-p">
              overwrite ./newTrack/intro.mp3? (y/n [n])
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
