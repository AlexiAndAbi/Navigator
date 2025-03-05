import React, { useState } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page5() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState(""); // State to store user input
  const [showContinue, setShowContinue] = useState(false); // State to manage the visibility of the Continue button

  const acceptableAnswers = ["4", "four"]; // Array of acceptable answers

  const handleInputChange = (e) => {
    setUserInput(e.target.value); // Update state with user's input
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level1-page4");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page6");
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
    <div className="gradient_background1">
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
        <p>[#####------] 5/11</p>
      </div>

      <div className="content">
        <p>
          3. The Parent and Children:
          <br />
          &emsp;&emsp;In the file system we say that directories and files can
          have parent/child relationships. For example, if a directory has two
          files in it, it is their parent, and they are its children. The parent
          directory is one level “outside” or “above” the files and directories
          in it. The children are “under” or “within” the parent.
        </p>
        <p>
          A parent directory has two files and two directories within it. How
          many children does it have?
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

export default Page5;
