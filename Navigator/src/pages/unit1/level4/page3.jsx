import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page3() {
  const navigate = useNavigate();
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

  // Refs for input elements
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  // Ref for continue button
  const continueButtonRef = useRef(null);

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

  const handleNavigation = () => {
    navigate("/Unit1-Level4-page2");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page4");
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
          [questionKey]:
            "milestone1.txt \u00A0\u00A0\u00A0 milestone2.txt \u00A0\u00A0\u00A0 progressReports",
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
      if (userInput === "ls -l -a" || userInput === "ls -a -l") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]:
            "drwxr-xr-x   5 username  staff   160 Feb 10 20:26 .\ndrwxr-xr-x+ 76 username  staff  2432 Feb 11 11:09 ..\n-rw-r--r--   1 username  staff    12 Feb 10 20:18 milestone1.txt\n-rw-r--r--   1 username  staff    34 Feb 10 20:18 milestone2.txt\ndrwxr-xr-x   4 username  staff   128 Feb 10 20:26 progressReports",
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
        <p>[###---------] 3/12</p>
      </div>

      <div
        style={{
          position: "fixed",
          top: "85px",
          right: "20px",
        }}
      >
        <img
          src={"/Navigator/unit1filetrees/FileTree31.png"}
          alt="Progress Icon"
          width="450"
          height="600"
        />
      </div>

      <div className="content">
        <p>
          Display directory contents!
          <br />
          <br />
          <span class="highlight2">-l</span> <br /> This flag displays more
          information about each file in the following format: <br />
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            -rw-r--r-- 1 username group 14 Jan 9 15:50 b.txt
          </span>
          <br />
          <br />
          The response includes the following information: <br />
          &emsp;&emsp;&emsp;&emsp;1. Permissions <br />
          &emsp;&emsp;&emsp;&emsp;2. Number of hard links to the file <br />
          &emsp;&emsp;&emsp;&emsp;3. File owner <br />
          &emsp;&emsp;&emsp;&emsp;4. Group owner <br />
          &emsp;&emsp;&emsp;&emsp;5. Size in bytes <br />
          &emsp;&emsp;&emsp;&emsp;6. Last modification date and time <br />
          &emsp;&emsp;&emsp;&emsp;7. File name <br />
          <br />
          You don’t have to worry about these categories for now, just know that
          this is a quick way to get more information about a file. <b>
            {" "}
            Tip:
          </b>{" "}
          think of -l like “l” for long!
        </p>

        <>
          {/* Question 1 */}
          <div ref={questionRefs.question1}>
            <p>Display current directory contents.</p>
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
                <p>
                  Display current directory contents (including hidden files)
                  using the -l flag.
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
                    ref={inputRef2}
                  />
                </div>
                <p className="fade-in unique-font">
                  <pre>{responses.question2}</pre>
                </p>
              </>
            )}
          </div>
        </>

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
    </div>
  );
}

export default Page3;
