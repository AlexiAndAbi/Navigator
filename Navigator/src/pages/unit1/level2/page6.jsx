import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page6() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
  });
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
  });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false,
    question8: false,
    question9: false,
  });

  const [timeLeft, setTimeLeft] = useState(60); // Timer state
  const [gameOver, setGameOver] = useState(false); // Tracks if the timer runs out
  const [timerStarted, setTimerStarted] = useState(false); // Tracks if the timer has started
  const [imageSrc, setImageSrc] = useState(
    "/Navigator/unit1filetrees/FileTree10.png"
  ); // Track the image

  const updateImage = (imageTag) => {
    if (imageTag === "directoryAdded") {
      setImageSrc("/Navigator/unit1filetrees/FileTree11.png");
    } else if (imageTag === "goDown") {
      setImageSrc("/Navigator/unit1filetrees/FileTree12.png");
    } else if (imageTag === "addFile") {
      setImageSrc("/Navigator/unit1filetrees/FileTree13.png");
    } else if (imageTag === "goUp") {
      setImageSrc("/Navigator/unit1filetrees/FileTree14.png");
    } else {
      setImageSrc("/Navigator/unit1filetrees/FileTree10.png");
    }
  };

  // Refs for scrolling
  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
    question4: useRef(null),
    question5: useRef(null),
    question6: useRef(null),
    question7: useRef(null),
    question8: useRef(null),
    question9: useRef(null),
  };

  // Refs for input elements
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  const inputRef7 = useRef(null);
  const inputRef8 = useRef(null);
  const inputRef9 = useRef(null);

  // Ref for continue button
  const continueButtonRef = useRef(null);

  // Initially focus the first input
  useEffect(() => {
    if (inputRef1.current) {
      inputRef1.current.focus();
    }
  }, []);

  // Dedicated useEffects for scrolling & focusing the next input:
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

  useEffect(() => {
    if (correctAnswers.question4 && inputRef5.current) {
      setTimeout(() => {
        inputRef5.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef5.current.focus();
      }, 150);
    }
  }, [correctAnswers.question4]);

  useEffect(() => {
    if (correctAnswers.question5 && inputRef6.current) {
      setTimeout(() => {
        inputRef6.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef6.current.focus();
      }, 150);
    }
  }, [correctAnswers.question5]);

  useEffect(() => {
    if (correctAnswers.question6 && inputRef7.current) {
      setTimeout(() => {
        inputRef7.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef7.current.focus();
      }, 150);
    }
  }, [correctAnswers.question6]);

  useEffect(() => {
    if (correctAnswers.question7 && inputRef8.current) {
      setTimeout(() => {
        inputRef8.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef8.current.focus();
      }, 150);
    }
  }, [correctAnswers.question7]);

  useEffect(() => {
    if (correctAnswers.question8 && inputRef9.current) {
      setTimeout(() => {
        inputRef9.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        inputRef9.current.focus();
      }, 150);
    }
  }, [correctAnswers.question8]);

  // When all answers are correct, scroll to and focus the continue button.
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

  const [directoryName, setDirectoryName] = useState(""); // To store the created directory name
  const [fileName, setfileName] = useState(""); // To store the created file name

  const handleNavigation = () => {
    navigate("/Unit1-Level2-review");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level2-page7");
  };

  const reviewClick = () => {
    navigate("/Unit1-Level2-review");
  };

  const restartClick = () => {
    window.location.reload();
  };

  const fadeInButtons = () => {
    const reviewButton = document.getElementById("reviewButton");
    const restartButton = document.getElementById("restartButton");

    // Make the button visible first, if it was hidden
    reviewButton.style.display = "inline-block";
    restartButton.style.display = "inline-block";

    // Start the fade-in effect after a slight delay
    setTimeout(() => {
      reviewButton.classList.add("visible"); // Trigger the fade-in effect
      restartButton.classList.add("visible");
    }, 1000); // Delay before fading in (adjust the timing as needed)
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
    if (gameOver) return; // Disable input if the timer has run out

    const userInput = answers[questionKey].trim();

    if (questionKey === "question1") {
      if (userInput === "y" || userInput === "yes") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
        });

        // Start the timer when the first question is answered correctly
        if (!timerStarted) {
          setTimerStarted(true);
        }
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      }
      return;
    }

    if (questionKey === "question2") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "directory1  hello.txt",
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
      if (userInput === "cat hello.txt") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]:
            "Hello! It is so wonderful to meet you. I hope you are enjoying Navigator so far. Keep going... you've got this!",
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
      const mkdirRegex = /^mkdir\s+(\w+)$/; // Matches 'mkdir <directory-name>'
      const match = mkdirRegex.exec(userInput);

      if (match) {
        updateImage("directoryAdded");
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

    if (questionKey === "question5") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: `directory1 hello.txt ${directoryName}`,
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

    if (questionKey === "question6") {
      if (userInput === `cd ${directoryName}`) {
        updateImage("goDown");
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "" });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      }
      return;
    }

    if (questionKey === "question7") {
      const mkdirRegex = /^touch\s+(\w+\.\w+)$/; // Matches 'touch <file-name>.<extension>'
      const match = mkdirRegex.exec(userInput);

      if (match) {
        updateImage("addFile");
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

    if (questionKey === "question8") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: `${fileName}`,
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

    if (questionKey === "question9") {
      if (userInput === "cd .." || userInput === "cd ~") {
        updateImage("goUp");
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

  // Timer logic
  useEffect(() => {
    let timer;
    if (timerStarted && timeLeft > 0 && !allCorrect) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setGameOver(true);
      fadeInButtons();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, timerStarted, allCorrect]);

  // Scroll to the next question when it's visible
  useEffect(() => {
    Object.keys(questionRefs).forEach((questionKey, index) => {
      if (correctAnswers[questionKey] && questionRefs[questionKey]?.current) {
        questionRefs[questionKey].current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }, [correctAnswers, directoryName, fileName]);

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
        <p>[#######-] 7/8</p>
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
          You have 60 seconds to complete the following minigame! There are nine
          questions in total. <br />
        </p>
        {/* Display Timer */}
        <p>Time remaining: {timeLeft}s</p>
        {gameOver && (
          <p className="fade-in">
            Time's up! But, you've got this... try again.
          </p>
        )}

        <>
          {/* Question 1 */}
          <div ref={questionRefs.question1}>
            <p>1. Ready to start?</p>
            <div className="command-line">
              <span className="directory-prompt">??</span>
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
          {correctAnswers.question1 && (
            <div ref={questionRefs.question2}>
              <p>2. Display the contents of the current directory.</p>
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
            </div>
          )}

          {/* Question 3 */}
          {correctAnswers.question2 && (
            <div ref={questionRefs.question3}>
              <p>3. Display the contents of the file.</p>
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
            </div>
          )}

          {/* Question 4 */}
          {correctAnswers.question3 && (
            <div ref={questionRefs.question4}>
              <p>4. Create a new directory.</p>
              <div className="command-line">
                <span className="directory-prompt">~ {">>"}</span>
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
              <p className="fade-in unique-font">{responses.question4}</p>
            </div>
          )}

          {/* Question 5 */}
          {correctAnswers.question4 && (
            <div ref={questionRefs.question5}>
              <p>5. Display the contents of the current directory.</p>
              <div className="command-line">
                <span className="directory-prompt">~ {">>"}</span>
                <input
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  className="input-box"
                  value={answers.question5}
                  onChange={(e) => handleInputChange(e, "question5")}
                  onKeyDown={(e) => handleKeyPress(e, "question5")}
                  disabled={correctAnswers.question5}
                  ref={inputRef5}
                />
              </div>
              <p className="fade-in unique-font">{responses.question5}</p>
            </div>
          )}

          {/* Question 6 */}
          {correctAnswers.question5 && (
            <div ref={questionRefs.question6}>
              <p>6. Move into the directory you just created.</p>
              <div className="command-line">
                <span className="directory-prompt">~ {">>"}</span>
                <input
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  className="input-box"
                  value={answers.question6}
                  onChange={(e) => handleInputChange(e, "question6")}
                  onKeyDown={(e) => handleKeyPress(e, "question6")}
                  disabled={correctAnswers.question6}
                  ref={inputRef6}
                />
              </div>
              <p className="fade-in unique-font">{responses.question6}</p>
            </div>
          )}
        </>

        {/* Question 7 */}
        {correctAnswers.question6 && (
          <div ref={questionRefs.question7}>
            <p>7. Create a file.</p>
            <div className="command-line">
              <span className="directory-prompt">
                {directoryName || ""} {">>"}
              </span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question7}
                onChange={(e) => handleInputChange(e, "question7")}
                onKeyDown={(e) => handleKeyPress(e, "question7")}
                disabled={correctAnswers.question7}
                ref={inputRef7}
              />
            </div>
            <p className="fade-in unique-font">{responses.question7}</p>
          </div>
        )}

        {/* Question 8 */}
        {correctAnswers.question7 && (
          <div ref={questionRefs.question8}>
            <p>8. Display the contents of the current directory.</p>
            <div className="command-line">
              <span className="directory-prompt">
                {directoryName || ""} {">>"}
              </span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question8}
                onChange={(e) => handleInputChange(e, "question8")}
                onKeyDown={(e) => handleKeyPress(e, "question8")}
                disabled={correctAnswers.question8}
                ref={inputRef8}
              />
            </div>
            <p className="fade-in unique-font">{responses.question8}</p>
          </div>
        )}

        {/* Question 9 */}
        {correctAnswers.question8 && (
          <div ref={questionRefs.question9}>
            <p>9. Move to the home directory.</p>
            <div className="command-line">
              <span className="directory-prompt">
                {directoryName || ""} {">>"}
              </span>
              <input
                type="text"
                style={{ fontSize: "20px", color: "white" }}
                className="input-box"
                value={answers.question9}
                onChange={(e) => handleInputChange(e, "question9")}
                onKeyDown={(e) => handleKeyPress(e, "question9")}
                disabled={correctAnswers.question9}
                ref={inputRef9}
              />
            </div>
            <p className="fade-in unique-font">{responses.question9}</p>
          </div>
        )}

        {/* Continue button */}
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
      <button
        id="reviewButton"
        className="review-button"
        style={{
          display: "none", // Initially hidden
          position: "fixed", // Fix the position relative to the viewport
          bottom: "100px", // 100px from the bottom
          right: "40px",
        }}
        onClick={reviewClick} // Add a handler if needed
      >
        Review
      </button>
      <button
        id="restartButton"
        className="restart-button"
        style={{
          display: "none", // Initially hidden
          position: "fixed", // Fix the position relative to the viewport
          bottom: "40px", // 100px from the bottom
          right: "40px",
        }}
        onClick={restartClick} // Add a handler if needed
      >
        Restart
      </button>
    </div>
  );
}

export default Page6;
