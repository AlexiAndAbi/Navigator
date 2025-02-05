import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page12() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Level3-page11");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Contents");
  };

  return (
    <div className="gradient_background3">
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
        <p>[############] 12/12</p>
      </div>

      <div className="content">
        <p>
          Congratulations! You have completed the third level of Navigator and
          have learned the following terminal commands.
        </p>
        <p>
          pwd
          <br /> mv
          <br /> cp
          <br /> rm
        </p>
        <p>You are now prepared to start level 4!</p>
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

export default Page12;
