import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Unit1() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Level1-page2");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Contents");
  };

  return (
    <div className="gradient_background">
      <button className="intro-button" onClick={handleNavigation2} style={{ border: "2px solid white"}}>
        Level 1
      </button>
      <div style={{ position: "absolute", top: "10px", right: "20px", fontSize: "16px", color: "white" }}>
        <p>[#----------]  1/11</p>
      </div>
      <div className="content">
        <p>
          Welcome to Navigator, a sea themed, text-based adventure game designed
          to help students learn command line prompts.
        </p>
        <p>
          Each level will be comprised of several learning pages. These will
          include many learn by doing examples. Each level concludes with a
          short mini-game.
        </p>
        <p>
          At the end of each unit there will be a longer challenge game in which
          points can be earned. A score of 80 points is recommended before
          continuing to the next unit.
        </p>
        <p>
          In Level 1 we will cover the basics. No computer skills or coding
          experience is required.
        </p>
        <button
          className="navigate-button"
          onClick={handleNavigation}
          style={{ border: "2px solid white" }}
        >
          Anchors Away!
        </button>
      </div>
    </div>
  );
}

export default Unit1;
