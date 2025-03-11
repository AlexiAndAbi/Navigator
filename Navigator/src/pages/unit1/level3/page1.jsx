import React, { useEffect } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Contents");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level3-page2");
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

    const jellyImages = [
      "/images/jelly0.png",
      "/images/jelly1.png",
      "/images/jelly2.png",
      "/images/jelly3.png",
      "/images/jelly4.png",
    ];

    // Preload both sets of images
    preloadImages(bubbleImages);
    preloadImages(jellyImages);
  }, []);

  return (
    <div className="gradient_background3">
      <button
        className="intro-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        Level 3
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
        <p>[#------------] 1/13</p>
      </div>

      <div className="content">
        <p>
          In this level we will begin to move and remove files (and directories)
          from our filesystem. We will introduce the following four commands
          that help us further organize and utilize the filesystem:
        </p>
        <p>
          pwd
          <br /> mv
          <br /> cp
          <br /> rm
          <br /> rmdir
        </p>
        <button
          className="navigate-button"
          onClick={handleNavigation2}
          style={{ border: "2px solid white" }}
        >
          Sail On!
        </button>

        <div className="pixel-art5"></div>
        <div className="pixel-art6"></div>
      </div>
    </div>
  );
}

export default Page1;
