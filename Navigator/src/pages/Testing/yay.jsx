import React, { useState, useRef, useEffect } from "react";
import "./Testing.css";
import { useNavigate } from "react-router-dom";

function CongratulationsPage() {
  const navigate = useNavigate();
  const [score, setScore] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    // Retrieve the score and time from localStorage
    const savedScore = localStorage.getItem("score");
    const savedTime = localStorage.getItem("time");

    if (savedScore && savedTime) {
      setScore(savedScore);
      setTime(savedTime);
    }
  }, []);

  const handleNavigation = () => {
    localStorage.removeItem("score");
    localStorage.removeItem("time");
    navigate("/Play");
  };

  const handleNavigation2 = () => {
    localStorage.removeItem("score");
    localStorage.removeItem("time");
    navigate("/Unit1-Contents");
  };

  return (
    <div className="gradient_background">
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
        <p>[#------] 1/7</p>
      </div>

      <div className="content">
        {score && time ? (
          <div>
            <p>
              Congratulations! You've completed Navigator.<br /><br /> You earned a score of{" "}
              {score} and completed the final mini-game in a time of {time}{" "}
              seconds! <br /><br />I hope you enjoyed this resource to help you learn unix
              commands. You can do this... and you belong here.
            </p>
          </div>
        ) : (
          <p>No score available</p>
        )}
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

export default CongratulationsPage;
