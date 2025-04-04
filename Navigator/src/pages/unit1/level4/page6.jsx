import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page6() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({ question: "" });
  const [response, setResponse] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [isMoreActive, setIsMoreActive] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [isToggled, setIsToggled] = useState(false);

  const content = [
    "These are the lines of a text file. Yes, they are not too interesting, but certainly good enough.\n".repeat(7),
    "I know it can be challenging some times. Keep your head up. I hope your day is going great.\n".repeat(7),
    "(End of file)",
  ];

    // Refs for input elements
  const inputRef1 = useRef(null);

  // Initially focus the first input
  useEffect(() => {
    if (inputRef1.current) {
      inputRef1.current.focus();
    }
  }, []);

  const handleNavigation = () => {
    navigate("/Unit1-Level4-page5");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page7");
  };

  const handleInputChange = (e) => {
    setAnswers({ question: e.target.value });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (answers.question.trim() === "more long.txt") {
        setIsMoreActive(true);
        setPageIndex(0);
        setDisplayText(content[0]);
      } else {
        setResponse(`command not found: ${answers.question.trim()}`);
      }
    }
  };

  const handleMoreKeyPress = (e) => {
    if (isMoreActive) {
      if (e.key === "q") {
        setIsMoreActive(false);
        setResponse("");
        setIsToggled((prev) => !prev);
        setAnswers({ question: "" });
      } else if (e.key === " ") {
        if (pageIndex < content.length - 1) {
          setPageIndex((prev) => prev + 1);
          setDisplayText(content[pageIndex + 1]);
        } 
        // If already at the last page, do nothing so that 'q' remains active.
      }
    }
  };

  useEffect(() => {
    if (isMoreActive && containerRef.current) {
      containerRef.current.focus();
    }
  }, [isMoreActive]);

  return (
    <div
      className="gradient_background4"
      onKeyDown={handleMoreKeyPress}
      tabIndex={0}
      ref={containerRef}
    >
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
        <p>[######------] 6/12</p>
      </div>

      <div
        style={{
          position: "fixed",
          top: "85px",
          right: "20px",
        }}
      >
        <img
          src={"/Navigator/unit1filetrees/FileTree35.png"}
          alt="Progress Icon"
          width="450"
          height="600"
        />
      </div>

      <div className="content">
        <p>
          Show more!
          <br />
          The <span className="highlight4">more</span> command is a better alternative for cat when viewing large files.
          <br />
          <br />
          This command displays the contents of a file one “page” at a time.
          Pressing the space bar moves to the next page, and pressing q returns you to the command line.
          <br />
          <br />
          To use the more command, you can type:
          <span style={{ fontFamily: "Consolas", fontSize: "18px" }}>
            <br /> more [filename] &emsp;&emsp;&emsp;&emsp; (ex: more README.txt)
          </span>
          <br />
        </p>

        <p>Display the contents of long.txt using more.</p>
        <div className="command-line">
          <span className="directory-prompt">~ {">>"}</span>
          <input
            type="text"
            style={{ fontSize: "20px", color: "white" }}
            className="input-box"
            value={answers.question}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            disabled={isMoreActive}
            ref={inputRef1}
          />
        </div>
        <p className="fade-in unique-font">
          <pre>{isMoreActive ? displayText : response}</pre>
        </p>

        {isToggled && (
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
