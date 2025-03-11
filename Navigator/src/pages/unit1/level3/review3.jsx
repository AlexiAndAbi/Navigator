import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Review3() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Level3-page10");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level3-page11");
  };

  return (
    <div className="gradient_background3">
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
        <p>[###########--] 11/13</p>
      </div>

      <div className="content">
        <p>
          <b>Review:</b> <br /> Before each mini-game there will be a review
          page to help you remeber what commnands were covered in each level.
        </p>
        <p>
          <span className="highlight3" style={{ fontSize: "18px" }}>
            pwd
          </span>{" "}
          Displays the absolute path to the current directory.
          <br />{" "}
          <span className="highlight3" style={{ fontSize: "18px" }}>
            mv
          </span>{" "}
          Moves files.
          <br />{" "}
          <span className="highlight3" style={{ fontSize: "18px" }}>
            cp
          </span>{" "}
          Copies files.
          <br />{" "}
          <span className="highlight3" style={{ fontSize: "18px" }}>
            rm
          </span>{" "}
          Removes files.
          <br />{" "}
          <span className="highlight3" style={{ fontSize: "18px" }}>
            rmdir
          </span>{" "}
          Removes empty directories.
          <br />{" "}
        </p>
        <p>You are now prepared to start the level 3 mini-game!</p>
        <button
          className="back-button"
          onClick={handleNavigation2}
          style={{ border: "2px solid white" }}
        >
          Lets go!
        </button>
      </div>
    </div>
  );
}

export default Review3;
