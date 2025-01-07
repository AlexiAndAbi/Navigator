import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page11() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Level1-page9");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Contents");
  };

  return (
    <div className="gradient_background">
      <button
        className="navigate-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        back
      </button>
      <div className="content">
        <p>
          Congratulations! You have completed the first level of Navigator and
          have learned the following terminal commands:
        </p>
        <p>
          ls
          <br /> cd (cd .. and cd ~)
          <br /> clear
        </p>
        <p>You are now prepared to start level 2!</p>
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

export default Page11;
