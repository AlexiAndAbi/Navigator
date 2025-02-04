import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page9() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
  });
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
  });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false,
  });

  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
    question4: useRef(null),
    question5: useRef(null),
    question6: useRef(null),
    question7: useRef(null),
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level3-page8");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level3-page10");
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
          [questionKey]: "sample coral.jpeg jellyfish.jpeg",
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
      if (userInput === "pwd") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "/User/username/project",
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
      if (userInput === "cd sample") {
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
          [questionKey]: "otter.jpeg",
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
      if (userInput === "cp otter.jpeg /User/username/project") {
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

    if (questionKey === "question6") {
      if (userInput === "cd ..") {
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

    if (questionKey === "question7") {
        if (userInput === "ls") {
          setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
          setResponses({
            ...responses,
            [questionKey]: "sample coral.jpeg jellyfish.jpeg otter.jpeg",
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
    } else if (correctAnswers.question4 && questionRefs.question5.current) {
      questionRefs.question5.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    else if (correctAnswers.question5 && questionRefs.question6.current) {
        questionRefs.question6.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      else if (correctAnswers.question6 && questionRefs.question7.current) {
        questionRefs.question7.current.scrollIntoView({
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
        <p>[#########---] 9/12</p>
      </div>

      <div className="content">
        <p>Now lets practice with absolute pathing.</p>

        <>
          {/* Question 1 */}
          <div ref={questionRefs.question1}>
            <p>Display the contents of the current directory.</p>
            <div className="command-line">
              <span className="directory-prompt">project {">>"}</span>
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
                <p>Display the current absolute path.</p>
                <div className="command-line">
                  <span className="directory-prompt">project {">>"}</span>
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
                <p>Move into the subdirectory.</p>
                <div className="command-line">
                  <span className="directory-prompt">project {">>"}</span>
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
                  <span className="directory-prompt">sample {">>"}</span>
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
                <p>
                Copy the file from sample to its parent directory using an absolute path.
                </p>
                <div className="command-line">
                  <span className="directory-prompt">sample {">>"}</span>
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

          {/* Question 6 */}
          <div ref={questionRefs.question6}>
            {correctAnswers.question5 && (
              <>
                <p>Move into the parent directory.</p>
                <div className="command-line">
                  <span className="directory-prompt">sample {">>"}</span>
                  <input
                    type="text"
                    style={{ fontSize: "20px", color: "white" }}
                    className="input-box"
                    value={answers.question6}
                    onChange={(e) => handleInputChange(e, "question6")}
                    onKeyDown={(e) => handleKeyPress(e, "question6")}
                    disabled={correctAnswers.question6}
                  />
                </div>
                <p className="fade-in">{responses.question6}</p>
              </>
            )}
          </div>

          {/* Question 7 */}
          <div ref={questionRefs.question7}>
            {correctAnswers.question5 && (
              <>
                <p>Display the contents of the current directory.</p>
                <div className="command-line">
                  <span className="directory-prompt">project {">>"}</span>
                  <input
                    type="text"
                    style={{ fontSize: "20px", color: "white" }}
                    className="input-box"
                    value={answers.question7}
                    onChange={(e) => handleInputChange(e, "question7")}
                    onKeyDown={(e) => handleKeyPress(e, "question7")}
                    disabled={correctAnswers.question7}
                  />
                </div>
                <p className="fade-in">{responses.question7}</p>
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

export default Page9;
