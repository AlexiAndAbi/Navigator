import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Contents");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level2-page2");
  };

  return (
    <div className="gradient_background">
      <button className="intro-button" onClick={handleNavigation} style={{ border: "2px solid white"}}>
        Level 2
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
        <p>[#------] 1/7</p>
      </div>

      <div className="content">
        <p>
          In this level we will begin to interact more with the file system
          structure. We will introduce the following three commands that help us
          create and view files and directories:
        </p>
        <p>
        cat
          <br /> mkdir
          <br /> touch
        </p>
        <button
          className="navigate-button"
          onClick={handleNavigation2}
          style={{ border: "2px solid white" }}
        >
          Sail On!
        </button>
      </div>
    </div>
  );
}

export default Page1;
