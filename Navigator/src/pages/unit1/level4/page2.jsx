import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page2() {
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
    navigate("/Unit1-Level4");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page3");
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
      if (userInput === "ls -a -R" || userInput === "ls -R -a") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]:
            ".\t..\tmilestone1.txt\tmilestone2.txt\tprogressReports \n\n ./progressReports: \n .\t..\tpr0.txt\tpr1.txt",
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
        <p>[##----------] 2/12</p>
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
          List directory contents! <br /> The <span class="highlight4">ls</span>{" "}
          command can be modified with the -a, -R, and -l flags. Flags are
          included after the command and are separated from each other by a
          space. The "-" (dash) before each character is required. More than one
          flag can be used with a single command (ex:{" "}
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            ls -a -l
          </span>
          ).
          <br />
          <br />
          <span class="highlight4">-a</span> <br /> This flag displays all files
          in the current directory including hidden files. When you type ls -a
          it includes itself (.) and its parent directory (..) in the output
          because there is a reference to both stored in every directory.
          <b> Tip:</b> think of -a like “a” for all!
          <br />
          <br />
          <span class="highlight2">-R</span> <br /> The -R flag lists the files
          within the current directory and all subdirectories as well. This{" "}
          <i>must</i> be a capital -R (-r reverses the order of entries shown).{" "}
          <b> Tip:</b> think of -R like “R” for recursive!
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
              />
            </div>
            <p className="fade-in unique-font">{responses.question1}</p>
          </div>

          {/* Question 2 */}
          <div ref={questionRefs.question2}>
            {correctAnswers.question1 && (
              <>
                <p>
                  Display curent directory and subdirectory contents including hidden
                  files.
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

export default Page2;
