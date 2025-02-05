import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Contents");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level3-page2");
  };

  return (
    <div className="gradient_background3">
      <button
        className="intro-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        Level 3
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
          In this level we will begin to move and remove files (and directories)
          from our filesystem. We will introduce the following four commands
          that help us further organize and utilize the filesystem:
        </p>
        <p>
          pwd
          <br /> mv
          <br /> cp
          <br /> rm
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
