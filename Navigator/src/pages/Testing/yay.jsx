import React, { useEffect } from "react"; // Import useEffect here
import "./Testing.css";
import { useNavigate } from "react-router-dom";

function CongratulationsPage() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Play");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Contents");
  };

  // Preload images for the animations
  useEffect(() => {
    const preloadImages = (srcArray) => {
      srcArray.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    const kelpImages = [
      "/images/kelp0.png",
      "/images/kelp1.png",
      "/images/kelp2.png",
    ];
    // Preload both sets of images
    preloadImages(kelpImages);
  }, []);

  return (
    <div className="gradient_background">
      <button className="back-button" onClick={handleNavigation} style={{ border: "2px solid white" }}>
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

export default CongratulationsPage;



/*import React, { useEffect, useState } from 'react';

const CongratulationsPage = () => {
  const [score, setScore] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    // Retrieve the score and time from localStorage
    const savedScore = localStorage.getItem('score');
    const savedTime = localStorage.getItem('time');

    if (savedScore && savedTime) {
      setScore(savedScore);
      setTime(savedTime);
    }
  }, []);

  return (
    <div>
      {score && time ? (
        <div>
          <h1>Congratulations!</h1>
          <p>You completed the game with a score of {score} and a time of {time} seconds!</p>
        </div>
      ) : (
        <p>No score available</p>
      )}
    </div>
  );
};

export default CongratulationsPage;*/
