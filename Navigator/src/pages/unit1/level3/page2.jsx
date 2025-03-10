import React, { useState, useRef, useEffect } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page2() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState(""); // State to store user input
  const [showContinue, setShowContinue] = useState(false); // State to manage the visibility of the Continue button

  const acceptableAnswers = ["Postman"]; // Array of acceptable answers
  const inputRef = useRef(null); // Ref for the input element

  useEffect(() => {
    inputRef.current.focus(); // Focus the input when the component mounts
  }, []);

  const handleInputChange = (e) => {
    setUserInput(e.target.value); // Update state with user's input
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level3");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level3-page3");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      checkAnswer(); // Check answer when Enter is pressed
    }
  };

  const checkAnswer = () => {
    // Check if the user's input matches any acceptable answer
    if (acceptableAnswers.some((answer) => userInput.trim() === answer)) {
      setShowContinue(true); // Show the Continue button
    } else {
      setUserInput(""); // Clear the input field
    }
  };

  return (
    <div className="gradient_background3" style={{ position: "relative" }}>
      {/* Top-Right Progress Display */}
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
          src={"/Navigator/unit1filetrees/FileTree15.png"}
          alt="Progress Icon"
          width="450"
          height="600"
        />
      </div>

      {/* Back Button */}
      <button
        className="back-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        back
      </button>

      {/* Main Content */}
      <div className="content">
        <p>
          Before we can move, copy, or remove files we need to understand more
          specifically where each file is located. We call where a file is as
          the “path” to that file. Paths can be (1) relative or (2) absolute.{" "}
          <br />
        </p>
        <p>
          (1) Relative Path = the location of a file in relation to where the
          user is currently viewing the file system.
          <br />
          <br />
          Your current position in the file system will always be to the left of
          the command line. For example the command line ~ {">>"} means you are
          currently viewing the home directory. directory1 {">>"} means you are
          currently viewing directory1.
        </p>
        <p>
          Take this example directory:
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            <br /> Postman {">>"} ls <br />
            README.txt content instructions
          </span>
        </p>
        <p>What directory are you currently viewing the file system from?</p>
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
            onKeyDown={handleKeyPress} // Listen for Enter key
            ref={inputRef} // Attach ref to the input
          />
        </div>
        {/* Feedback displayed below */}
        {/* Show the Continue button if the answer is correct */}
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
