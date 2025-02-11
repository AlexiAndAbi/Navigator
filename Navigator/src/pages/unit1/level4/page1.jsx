import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Contents");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page2");
  };

  return (
    <div className="gradient_background4">
      <button
        className="intro-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        Level 4
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
        <p>[#-----------] 1/12</p>
      </div>

      <div className="content">
        <p>
          In this level we will add complexity to the Unix commands
          we’ve learned so far. We will introduce options, also known as
          flags, which allow you to interact with the filesystem in a more
          useful way.
        </p>
        <button
          className="navigate-button"
          onClick={handleNavigation2}
          style={{ border: "2px solid white" }}
        >
          Sail On!
        </button>

        <div className="pixel-art5"></div>
        <div className="pixel-art6"></div>
      </div>
    </div>
  );
}

export default Page1;
