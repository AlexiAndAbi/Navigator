import React, { useState, useRef, useEffect } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page2() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [showContinue, setShowContinue] = useState(false);
  const inputRef = useRef(null); // Create a ref for the input element

  useEffect(() => {
    inputRef.current.focus(); // Focus the input element when the component mounts
  }, []);

  const acceptableAnswers = ["y", "yes"];

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level1");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page3");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    if (
      acceptableAnswers.some(
        (answer) => userInput.toLowerCase().trim() === answer
      )
    ) {
      setShowContinue(true);
    } else {
      setUserInput("");
    }
  };

  return (
    <div className="gradient_background1" style={{ position: "relative" }}>
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

      <button
        className="back-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        back
      </button>

      <div className="content">
        <p>
          On every computer, there is an application that allows users to
          interact with the terminal. The terminal is important because it
          allows you to give your computer instructions on a foundational level.
          <br />
          <br />
          The start page of this application looks like:
        </p>
        <p
          style={{
            fontFamily: '"Consolas", monospace',
            fontSize: "20px",
          }}
        >
          &emsp;&emsp;&emsp;Last login: [date and time] on [location] <br />
          &emsp;&emsp;&emsp;<span className="highlight">[username]@[device name] ~ %</span>
        </p>
        <p>
          The highlighted line is known as the command line. This is where you can
          enter instructions. Navigator will use the symbols {">>"} to indicate
          the command line. For general questions the symbols ?? will be used.
        </p>
        <p>
          Are you ready to start learning about the command line? (type y or n
          below and then hit enter)
        </p>
        <div className="command-line">
          <span className="directory-prompt">??</span>
          <input
            type="text"
            style={{
              fontSize: "20px",
              color: "white",
            }}
            className="input-box"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            ref={inputRef} // Attach the ref to the input element
          />
        </div>
        {showContinue && (
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
