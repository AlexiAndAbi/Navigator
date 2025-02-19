import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page7() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Level2-page6");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Contents");
  };

  return (
    <div className="gradient_background2">
      <button
        className="navigate-button"
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
        <p>[#######] 7/7</p>
      </div>

      <div className="content">
        <p>
          Congratulations! You have completed the second level of Navigator and
          have learned the following terminal commands:
        </p>
        <p>
        cat
          <br /> mkdir
          <br /> touch
        </p>
        <p>You are now prepared to start level 3!</p>
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

export default Page7;
