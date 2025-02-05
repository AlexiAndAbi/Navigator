import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Level2");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level2-page3");
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
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "16px",
          color: "white",
        }}
      >
        <p>[##-----] 2/7</p>
      </div>

      <div className="content">
        <p>
          But first; a quick note on file types! These may be something you
          are already familiar with as many file types are household names. You
          will not need to know these in depth to learn unix commands but they
          may provide valuable insight into the contents of a file.
        </p>
        <p>
          An abbreviated list of file type extensions:
          <br /> &emsp;&emsp;.doc = microsoft word document
          <br /> &emsp;&emsp;.js = java script code
          <br /> &emsp;&emsp;.pdf = portable document format
          <br /> &emsp;&emsp;.png = portable network graphic
          <br /> &emsp;&emsp;.py = python code
          <br /> &emsp;&emsp;.txt = plain text file
          <br /> &emsp;&emsp;.zip = a file compression format
        </p>
        <p>
          Directories in a filesystem do not have a file type extension by
          convention. That is often how you know a directory is a directory, it
          has no extension.
        </p>
        <button
          className="navigate-button"
          onClick={handleNavigation2}
          style={{ border: "2px solid white" }}
        >
          continue
        </button>
      </div>
    </div>
  );
}

export default Page1;
