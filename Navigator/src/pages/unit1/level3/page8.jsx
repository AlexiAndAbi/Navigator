import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page8() {
  const navigate = useNavigate();
  const [currentDirectory, setCurrentDirectory] = useState("home"); // Track the directory
  const [imageSrc, setImageSrc] = useState(
    "/Navigator/unit1filetrees/FileTree22.png"
  ); // Track the image

  const updateImage = (newDirectory) => {
    if (newDirectory === "copy") {
      setImageSrc("/Navigator/unit1filetrees/FileTree23.png");
    } else if (newDirectory === "down") {
      setImageSrc("/Navigator/unit1filetrees/FileTree24.png");
    } else {
      setImageSrc("/Navigator/unit1filetrees/FileTree22.png");
    }
  };

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

  // Refs for input elements
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);

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

  // When question2 is answered correctly, scroll & focus question3
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

  // When question3 is answered correctly, scroll & focus question4
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

  // When question4 is answered correctly, scroll & focus question5
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
    navigate("/Unit1-Level3-page7");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level3-page9");
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
          [questionKey]: "sample a.txt b.txt",
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
        userInput === "cp a.txt b.txt ./sample" ||
        userInput === "cp b.txt a.txt ./sample"
      ) {
        setCurrentDirectory("copy");
        updateImage("copy");
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
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "sample a.txt b.txt" });
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
      if (userInput === "cd sample") {
        setCurrentDirectory("down");
        updateImage("down");
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

    if (questionKey === "question5") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "a.txt b.txt",
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
  }, [correctAnswers]);

  return (
    <div className="gradient_background3">
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
        <p>[########-----] 8/13</p>
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
          Copy files! <br /> Abbreviated <span class="highlight3">cp</span>,
          this command copies files within and between directories.
          <br />
          <br />
          To copy a file within the current directory and give it a new name,
          type:
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            <br /> cp [file] [new file name] &emsp;&emsp;&emsp;&emsp; (ex: cp
            a.txt b.txt)
          </span>
          <br />
          <br />
          To copy a file to a different directory type:
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            <br /> cp [file] [destination] &emsp;&emsp;&emsp;&emsp; (ex: cp
            a.txt /User/username/sample/group1)
          </span>
          <br />
          <br />
          To copy multiple files to a different directory type:
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            <br /> cp [file0] [file1] [destination] &emsp;&emsp;&emsp;&emsp;
            (ex: cp a.txt b.txt ./group1)
          </span>
          <br />
        </p>
        <p>
          For the destination, you can use either the relative or absolute path
          of that directory.
        </p>

        <>
          {/* Question 1 */}
          <div ref={questionRefs.question1}>
            <p>Display the contents of the current directory.</p>
            <div className="command-line">
              <span className="directory-prompt">Group1 {">>"}</span>
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
                  Copy both files into the directory sample using a relative
                  path.
                </p>
                <div className="command-line">
                  <span className="directory-prompt">Group1 {">>"}</span>
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
              </>
            )}
          </div>

          {/* Question 3 */}
          <div ref={questionRefs.question3}>
            {correctAnswers.question2 && (
              <>
                <p>Display the contents of the current directory.</p>
                <div className="command-line">
                  <span className="directory-prompt">Group1 {">>"}</span>
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
              </>
            )}
          </div>

          {/* Question 4 */}
          <div ref={questionRefs.question4}>
            {correctAnswers.question3 && (
              <>
                <p>Move into the subdirectory.</p>
                <div className="command-line">
                  <span className="directory-prompt">Group1 {">>"}</span>
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
              </>
            )}
          </div>

          {/* Question 5 */}
          <div ref={questionRefs.question5}>
            {correctAnswers.question4 && (
              <>
                <p>Display the contents of the current directory.</p>
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
                    ref={inputRef5}
                  />
                </div>
                <p className="fade-in unique-font">{responses.question5}</p>
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

export default Page8;
