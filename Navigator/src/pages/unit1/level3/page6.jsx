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
  });
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
  });

  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
    question4: useRef(null),
    question5: useRef(null),
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level3-page5");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level3-page7");
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
          [questionKey]: "unit1 unit2 unit3 level1.jsx",
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
      if (userInput === "mv level1.jsx ./unit1") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "",
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
      if (userInput === "cd unit1") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "" });
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
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "level1.jsx levelB.jsx",
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

    if (questionKey === "question5") {
        if (userInput === "mv level1.jsx levelA.jsx") {
          setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
          setResponses({
            ...responses,
            [questionKey]: "",
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
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean);

  useEffect(() => {
    if (correctAnswers.question1 && questionRefs.question2.current) {
      questionRefs.question2.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (correctAnswers.question2 && questionRefs.question3.current) {
      questionRefs.question3.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (correctAnswers.question3 && questionRefs.question4.current) {
      questionRefs.question4.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }  else if (correctAnswers.question4 && questionRefs.question5.current) {
        questionRefs.question5.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
  }, [correctAnswers]);

  return (
    <div className="gradient_background">
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
        <p>[######------] 6/12</p>
      </div>

      <div className="content">
        <p>
          Move files! <br /> Abbreviated <span class="highlight">mv</span>, this command moves files between
          directories. This command is also used to rename files.
          <br />
          <br />
          To move a file from one directory to another you can type:
          <br /> mv [file] [destination] &emsp;&emsp;&emsp;&emsp; (ex: mv
          welcome.txt ./unit1)
          <br />
        </p>

        <p>
          For the destination, you can use either the relative or absolute path
          of that directory. Note: mv is a command that overwrites. This means
          that if you move a file on top of another file, the second file will
          be replaced with the contents from the first file. Just make sure you
          are always moving a file to a directory where that file name does not
          already appear.
          <br />
          <br />
          To rename a file you can type:
          <br /> mv [oldFileName] [newFileName] &emsp;&emsp;&emsp;&emsp; (ex: mv
          a.txt b.txt)
          <br />
        </p>

        <>
          {/* Question 1 */}
          <div ref={questionRefs.question1}>
            <p>Display the contents of the current directory.</p>
            <div className="command-line">
              <span className="directory-prompt">Game {">>"}</span>
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
                  Move level1.jsx into the directory unit1 using a relative path.
                </p>
                <div className="command-line">
                  <span className="directory-prompt">Game {">>"}</span>
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
              </>
            )}
          </div>

          {/* Question 3 */}
          <div ref={questionRefs.question3}>
            {correctAnswers.question2 && (
              <>
                <p>Move into the subdirectory unit1.</p>
                <div className="command-line">
                  <span className="directory-prompt">Game {">>"}</span>
                  <input
                    type="text"
                    style={{ fontSize: "20px", color: "white" }}
                    className="input-box"
                    value={answers.question3}
                    onChange={(e) => handleInputChange(e, "question3")}
                    onKeyDown={(e) => handleKeyPress(e, "question3")}
                    disabled={correctAnswers.question3}
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
                  <span className="directory-prompt">unit1 {">>"}</span>
                  <input
                    type="text"
                    style={{ fontSize: "20px", color: "white" }}
                    className="input-box"
                    value={answers.question4}
                    onChange={(e) => handleInputChange(e, "question4")}
                    onKeyDown={(e) => handleKeyPress(e, "question4")}
                    disabled={correctAnswers.question4}
                  />
                </div>
                <p className="fade-in">{responses.question4}</p>
              </>
            )}
          </div>

          {/* Question 5 */}
          <div ref={questionRefs.question5}>
            {correctAnswers.question4 && (
              <>
                <p>Rename level1.jsx to levelA.jsx</p>
                <div className="command-line">
                  <span className="directory-prompt">unit1 {">>"}</span>
                  <input
                    type="text"
                    style={{ fontSize: "20px", color: "white" }}
                    className="input-box"
                    value={answers.question5}
                    onChange={(e) => handleInputChange(e, "question5")}
                    onKeyDown={(e) => handleKeyPress(e, "question5")}
                    disabled={correctAnswers.question5}
                  />
                </div>
                <p className="fade-in">{responses.question5}</p>
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

export default Page6;
