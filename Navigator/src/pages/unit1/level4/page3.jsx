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
        <p>[###--------] 3/11</p>
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
          List directory contents!
          <br />
          <br />
          -l <br /> This flag displays more information about each file in the
          following format: -rw-r--r-- 1 username group 0 Jan 9 15:50 b.txt{" "}
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
          You don’t have to worry about a lot of these categories for now, just
          know that this is a quick way to get more information about a file.
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
            <p className="fade-in unique-font">{responses.question1}</p>
          </div>

          {/* Question 2 */}
          <div ref={questionRefs.question2}>
            {correctAnswers.question1 && (
              <>
                <p>
                  List directory contents (including hidden files) using the -l
                  flag.
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

export default Page3;
