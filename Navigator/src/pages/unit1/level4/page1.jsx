import React, { useEffect } from "react"; // Import useEffect here
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Contents");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page2");
  };

  // Preload images for the animations
  useEffect(() => {
    const preloadImages = (srcArray) => {
      srcArray.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    const bubbleImages = [
      "/images/bubble0.png",
      "/images/bubble1.png",
      "/images/bubble2.png",
    ];

    const fishImages = [
      "/images/Fish0.png",
      "/images/Fish1.png",
      "/images/Fish2.png",
      "/images/Fish3.png",
      "/images/Fish4.png",
    ];

    // Preload both sets of images
    preloadImages(bubbleImages);
    preloadImages(fishImages);
  }, []);

  return (
    <div className="gradient_background4">
      <button
        className="intro-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        Level 4
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
        <p>[#----------] 1/11</p>
      </div>

      <div className="content">
        <p>
          In this level we will add complexity to the Unix commands we’ve
          learned so far. We will introduce options, also known as flags, which
          allow you to interact with the filesystem in a more useful way.
        </p>
        <button
          className="navigate-button"
          onClick={handleNavigation2}
          style={{ border: "2px solid white" }}
        >
          Sail On!
        </button>

        <div className="pixel-art7"></div>
        <div className="pixel-art8"></div>
      </div>
    </div>
  );
}

export default Page1;
