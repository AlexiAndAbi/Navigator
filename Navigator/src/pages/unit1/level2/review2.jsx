import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Review2() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Level2-page5");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level2-page6");
  };

  return (
    <div className="gradient_background2">
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
        <p>[[######--] 6/8</p>
      </div>

      <div className="content">
        <p>
          <b>Review:</b> <br /> Before each mini-game there will be a review
          page to help you remeber what commnands were covered in each level.
        </p>
        <p>
          <span className="highlight" style={{ fontSize: "18px" }}>
            cat
          </span>{" "}
          Displays the contents of any file.
          <br />{" "}
          <span className="highlight" style={{ fontSize: "18px" }}>
            mkdir
          </span>{" "}
          Creates an empty directory.
          <br />{" "}
          <span className="highlight" style={{ fontSize: "18px" }}>
            touch
          </span>{" "}
          Creates an empty file.
          <br />{" "}
        </p>
        <p>You are now prepared to start the level 2 mini-game!</p>
        <button
          className="back-button"
          onClick={handleNavigation2}
          style={{ border: "2px solid white" }}
        >
          Lets go!
        </button>
      </div>
    </div>
  );
}

export default Review2;
