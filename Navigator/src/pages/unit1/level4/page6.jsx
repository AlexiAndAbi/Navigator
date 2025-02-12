import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page6() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    question: "",
  });
  const [response, setResponse] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [isMoreActive, setIsMoreActive] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null); // Ref for the outer container
  const [isToggled, setIsToggled] = useState(false);

  const content = [
    "These are the lines of a text file. Yes, not too interesting, but certainly good enough.\n".repeat(
      7
    ),
    "I know it can be challenging some times. Keep your head up. I hope your day is going great.\n".repeat(
      7
    ),
    "(End of file)",
  ];

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
      if (e.key === " ") {
        if (pageIndex < content.length - 1) {
          setPageIndex((prev) => prev + 1);
          setDisplayText(content[pageIndex + 1]);
        } else {
          setIsMoreActive(false);
          setResponse("(End of file)");
        }
      } else if (e.key === "q") {
        setIsMoreActive(false);
        setResponse("");

        setIsToggled((prev) => {
          return !prev;
        });

        setAnswers({ question: "" });
      }
    }
  };

  useEffect(() => {
    if (isMoreActive && containerRef.current) {
      containerRef.current.focus(); // Ensure the div receives focus
    }
  }, [isMoreActive]);

  return (
    <div
      className="gradient_background4"
      onKeyDown={handleMoreKeyPress}
      tabIndex={0} // Makes the div focusable
      ref={containerRef} // Attach the ref to the div
    >
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
        <p>[######-----] 6/11</p>
      </div>

      <div className="content">
        <p>
          Show more!
          <br />
          While technically its own unique command,{" "}
          <span className="highlight4">more</span> is a better alternative for
          cat when viewing large files.
          <br />
          <br />
          The more command displays the contents of a file one “page” at a time.
          Pressing the space bar moves to the next page, and pressing q returns
          you to the command line.
          <br />
          <br />
          To use more command, you can type:
          <br /> more [filename] &emsp;&emsp;&emsp;&emsp; (ex: more
          README.txt)
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
            ref={inputRef}
          />
        </div>
        <p className="fade-in">
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
