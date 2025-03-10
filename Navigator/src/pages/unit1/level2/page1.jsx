import React, { useEffect } from "react"; // Import useEffect here
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
    <div className="gradient_background2">
      <button className="intro-button" onClick={handleNavigation} style={{ border: "2px solid white" }}>
        Level 2
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
        <p>[#-------] 1/8</p>
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

        <div className="pixel-art3"></div>
        <div className="pixel-art4"></div>
      </div>
    </div>
  );
}

export default Page1;
