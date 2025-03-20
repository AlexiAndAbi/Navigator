// src/pages/Homepage/Homepage.jsx
import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  // Function to handle the click event
  const handleStartClick = () => {
    navigate("/Unit1-Contents"); // Now this is called when the button is clicked
  };

  const handleAboutClick = () => {
    navigate("/about"); // Now this is called when the button is clicked
  };

  return (
    <div className="gradient_backgroundHomepage">
      <div className="center-container">
        <h2 className="title">Navigator</h2>
        <h4 className="description">Learn the Unix Command Line</h4>
        <button className="start-button" onClick={handleStartClick}>
          Start
        </button>
      </div>

      {/* Small text at the bottom */}
      <div className="footer">
        <a className="footer-link" onClick={handleAboutClick}>
          by alexi and abby
        </a>
      </div>
    </div>
  );
};

export default Homepage;
