import React from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page11() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Unit1-Level3-page11");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Contents");
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
        <p>[###########] 11/11</p>
      </div>

      <div className="content">
        <p>
          Congratulations! You have completed the fourth level of Navigator and
          have learned the following terminal commands and (some of) their
          options.
        </p>
        <p>
          ls -a -R -l
          <br /> cat -n
          <br /> more
          <br /> mv -i -v
          <br /> cp -r -i -v
          <br /> rm -r -i
        </p>
        <p>You are now prepared to finish Navigator!</p>
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

export default Page11;
