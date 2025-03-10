import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page11() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Level1-page9");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level1-page10");
  };

  return (
    <div className="gradient_background1">
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
        <p>[##########--] 10/12</p>
      </div>

      <div className="content">
        <p>
          <b>Review:</b> <br /> Before each mini-game there will be a review
          page to help you remeber what commnands were covered in each level.
        </p>
        <p>
          <span className="highlight" style={{ fontSize: "18px" }}>
            ls
          </span>{" "}
          Displays the contents of the current directory.
          <br />{" "}
          <span className="highlight" style={{ fontSize: "18px" }}>
            cd [directory]
          </span>{" "}
          Moves into the specified directory.
          <br />{" "}
          <span className="highlight" style={{ fontSize: "18px" }}>
            cd ..
          </span>{" "}
          Moves to the parent directory.
          <br />{" "}
          <span className="highlight" style={{ fontSize: "18px" }}>
            cd ~
          </span>{" "}
          Moves to the root directory.
          <br />{" "}
          <span className="highlight" style={{ fontSize: "18px" }}>
            clear
          </span>{" "}
          Clears the command line.
          <br />{" "}
          <span className="highlight" style={{ fontSize: "18px" }}>
            ctrl + l
          </span>{" "}
          Clears the command line
        </p>
        <p>You are now prepared to start the level 1 mini-game!</p>
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

export default Page11;
