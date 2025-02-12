import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page8() {
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
    navigate("/Unit1-Level7");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page9");
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
          [questionKey]: "sample newFolder screenshot.png",
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
        userInput === "cp -r -v sample ./newFolder" ||
        userInput === "cp -v -r sample ./newFolder" ||
        userInput === "cp -v -r sample /User/username/newFolder" ||
        userInput === "cp -r -v sample /User/username/newFolder"
      ) {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]:
            "sample -> newFolder/sample\nsample/c.txt -> newFolder/sample/c.txt\nsample/b.txt -> newFolder/sample/b.txt\nsample/a.txt -> newFolder/sample/a.txt",
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
  //IM HERE
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
        <p>[#####-------] 5/12</p>
      </div>

      <div className="content">
        <p>
          Copy files! <br /> The <span class="highlight4">cp</span> command can
          be modified with the -r, -i, and -v flags.
          <br />
          <br />
          -r <br /> If you are copying directories, use the -r flag to
          recursively copy all of the files within the directory as well.
          <br />
          <br />
          -i <br /> The -i flag, standing for interactive, prompts the user
          before overwriting files.
          <br />
          <br />
          -v <br /> The -v flag, standing for verbose, will show in greater
          detail what has been copied and where it was copied to.
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
                  Copy the directory sample into newFolder using the recursive
                  and verbose option.
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

export default Page8;
