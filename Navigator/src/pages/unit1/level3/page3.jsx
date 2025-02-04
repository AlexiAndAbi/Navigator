import React, { useState } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page3() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState(""); // State to store user input
  const [showContinue, setShowContinue] = useState(false); // State to manage the visibility of the Continue button

  const acceptableAnswers = ["./instructions/help.txt"]; // Array of acceptable answers

  const handleInputChange = (e) => {
    setUserInput(e.target.value); // Update state with user's input
  };

  const handleNavigation = () => {
    navigate("/Unit1-Level3-page2");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level3-page4");
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
        <p>[###---------] 3/12</p>
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
          Take this example directory again:
          <br /> Postman {">>"} ls <br />
          README.txt instructions content
          <br />
        </p>
        <p>
          Suppose that there is a file within content that is called c.txt. The
          relative path of c.txt from the Postman directory is ./content/c.txt.
          <br />
          <br />
          The “./” characters are used to represent the current directory. You
          can be located in any directory, but the start of any relative path
          will always be “./”. After the current directory, the “/” character is used
          to show that c.txt is within the content folder.
          <br />
          <br />
          The relative path of content from the Postman directory would just be
          ./content
        </p>
        <p>
          If there is a file named help.txt within the instructions directory, what
          is the relative path of help.txt from the Postman directory?
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

export default Page3;
