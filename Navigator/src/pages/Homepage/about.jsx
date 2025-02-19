import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="gradient_backgroundHomepage">
      <h2 className="about-title">About Us</h2>
      <div className="about-container">
        <div className="about-card">
          <h3 className="name">Alexi</h3>
          <p className="blurb">
            With a relentless optimism, Alexi strives to make the world a better
            place—starting with helping students conquer Unix commands.
          </p>
        </div>
        <div className="about-card">
          <h3 className="name">Abby</h3>
          <p className="blurb">
            Abby is the coolest person ever! (And her bio is coming soon!)
          </p>
        </div>
      </div>
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
    </div>
  );
};

export default About;
