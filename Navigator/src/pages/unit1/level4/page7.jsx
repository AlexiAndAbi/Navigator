import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page7() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(
    "/Navigator/unit1filetrees/FileTree31.png"
  ); // Track the image

  const updateImage = (imageTag) => {
    if (imageTag === "change") {
      setImageSrc("/Navigator/unit1filetrees/FileTree32.png");
    } else {
      setImageSrc("/Navigator/unit1filetrees/FileTree31.png");
    }
  };

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

  // Refs for input elements
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  // Initially focus the first input
  useEffect(() => {
    if (inputRef1.current) {
      inputRef1.current.focus();
    }
  }, []);

  // When question1 is answered correctly, scroll & focus question2
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

  // When all answers are correct, scroll & focus the continue button
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
        updateImage("change");
        responseText = "intro.mp3 -> ./newTrack/intro.mp3";
        setCorrectAnswers({ ...correctAnswers, question2: true });
      }
      setResponses({
        ...responses,
        question2: `overwrite ./newTrack/intro.mp3? (y/n) ${overwriteResponse}\n${responseText}`,
      });
      setIsToggled((prev) => {
        return !prev;
      });
      setShowPrompt(false);
      setOverwriteResponse("");
    }
  };

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
          right: "20px",
        }}
      >
        <img src={imageSrc} alt="Progress Icon" width="450" height="600" />
      </div>

      <div className="content">
        <p>
          The move command!
          <br />
          The <span className="highlight4">mv</span> command can be modified
          with the -i and -v flags. Remember that flags are included after the
          command and before any additional arguments. ex:{" "}
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            mv -v -i outro.mp3 ./lyrics
          </span>
          <br />
          <br /> <span className="highlight4">-i</span>
          <br /> The -i flag, standing for <b>interactive</b>, prompts the user
          before overwriting files. This can be helpful if you are moving files
          to directories where you are unsure of the contents. The user can type
          "y" to overwrite the file and "n" to not overwrite the file.
          <br />
          <br /> <span className="highlight4">-v</span>
          <br /> The -v flag, standing for <b>verbose</b>, will show in greater
          detail what was moved and where it was moved to.
        </p>

        <div ref={questionRefs.question1}>
          <p>Display directory contents.</p>
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

        {correctAnswers.question1 && (
          <div ref={questionRefs.question2}>
            <p>
              Using the interactive and verbose options, move intro.mp3 into
              newTrack using a relative path.
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
                ref={inputRef2}
              />
            </div>
            <p className="fade-in unique-font">
              <pre>{responses.question2}</pre>
            </p>
            {showPrompt && (
              <p className="inline-p">
                <span
                  style={{
                    fontFamily: "Consolas",
                    fontSize: "20px",
                    display: "inline-block",
                    width: "425px",
                  }}
                >
                  overwrite ./newTrack/intro.mp3? (y/n)
                </span>

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

export default Page7;
