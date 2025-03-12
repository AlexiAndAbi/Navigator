import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Review4() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Level4-page9");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page10");
  };

  return (
    <div className="gradient_background4">
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
          <span className="highlight4" style={{ fontSize: "18px" }}>
            ls
          </span>{" "}
          <br />
          -a (all) displays hidden files <br />
          -R (recursive) shows current directory and subdirectory contents
          <br /> -l (long) shows additional information about each file
          <br />{" "}
          <span className="highlight4" style={{ fontSize: "18px" }}>
            cat
          </span>{" "}
          <br />"{">"}" concatenates files together <br />
          -n (numbers) displays line numbers for each line of the file displayed
          <br />{" "}
          <span className="highlight4" style={{ fontSize: "18px" }}>
            more
          </span>{" "}
          Displays the contents of a file one “page” at a time. Pressing the
          space key displays the next page and the q key quits
          <br />{" "}
          <span className="highlight4" style={{ fontSize: "18px" }}>
            mv
          </span>{" "}
          <br />
          -i (interactive) prompts the user before overwriting files <br />
          -v (verbose) shows what was moved and where it was moved to
          <br />{" "}
          <span className="highlight3" style={{ fontSize: "18px" }}>
            cp
          </span>{" "}
          <br />
          -r (recursive) recursively copy all of the files within a directory{" "}
          <br />
          -i (interactive) prompts the user before overwriting files <br />
          -v (verbose) shows what was copied and where it was copied to
          <br />{" "}
          <span className="highlight3" style={{ fontSize: "18px" }}>
            rm
          </span>{" "}
          <br />
          -r (recursive) recursively removes a directory and all the files in it{" "}
          <br />
          -i (interactive) prompts the user before removing files
          <br />{" "}
        </p>
        <p>You are now prepared to start the level 4 mini-game!</p>
        <button
          className="back-button"
          onClick={handleNavigation2}
          style={{ border: "2px solid white", marginBottom: "40px" }}
        >
          Lets go!
        </button>
      </div>
    </div>
  );
}

export default Review4;
