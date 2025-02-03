import React, { useState } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page2() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState(""); // State to store user input
  const [showContinue, setShowContinue] = useState(false); // State to manage the visibility of the Continue button

  const acceptableAnswers = ["y", "yes"]; // Array of acceptable answers

  const handleInputChange = (e) => {
    setUserInput(e.target.value); // Update state with user's input
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level1");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level2-page3");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      checkAnswer(); // Check answer when Enter is pressed
    }
  };

  const checkAnswer = () => {
    // Check if the user's input matches any acceptable answer
    if (
      acceptableAnswers.some(
        (answer) => userInput.toLowerCase().trim() === answer
      )
    ) {
      setShowContinue(true); // Show the Continue button
    } else {
      setUserInput(""); // Clear the input field
    }
  };

  return (
    <div className="gradient_background" style={{ position: "relative" }}>
      {/* Top-Right Progress Display */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "16px",
          color: "white",
        }}
      >
        <p>[##---------] 2/11</p>
      </div>

      {/* Back Button */}
      <button
        className="navigate-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        back
      </button>

      {/* Main Content */}
      <div className="content">
        <p>
          Before we can move, copy, or remove files we need to understand more
          specifically each file is located. We call where a file is as the
          “path” to that file. Paths can be (1) relative or (2) absolute. <br />
        </p>
        <p>
          (1) Relative Path = the location of a file in relation to where the
          user is currently viewing the file system.
          <br />
          If you need a reminder of where you are viewing the file system
          currently, it will always be to the left of the command line. For
          example the command line ~ {">>"} means you are currently viewing the
          home directory. directory1 {">>"} means you are currently viewing the
          filesystem from directory1.
        </p>
        <p>
          Take this example directory:
          <br /> ~ {">>"} ls <br />
          a.txt b.txt directory1
        </p>
        <p>
          Are you ready to start learning about the command line? (type y or n
          below)
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
            onKeyDown={handleKeyPress} // Listen for Enter key
          />
        </div>
        {/* Feedback displayed below */}
        {/* Show the Continue button if the answer is correct */}
        {showContinue && (
          <button
            className="navigate-button fade-in"
            onClick={handleNavigation2}
            style={{ border: "2px solid white" }}
          >
            continue
          </button>
        )}
      </div>
    </div>
  );
}

export default Page2;
