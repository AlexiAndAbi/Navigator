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
            Alexi is on a mission to make the world a better place — one Unix
            command at a time. Inspired to build the tools she wished she had, Alexi
            is passionate about helping students learn in a way that is
            encouraging and fun.
          </p>
        </div>
        <div className="about-card">
          <h3 className="name">Abby</h3>
          <p className="blurb">
            Abby’s dream is to make computer science a place for everyone by
            increasing accessibility and eliminating barriers — like lack of prior
            experience — through fun and engaging games. Computer science is for
            everyone!
          </p>
        </div>
      </div>
      <button className="return-button" onClick={handleBackClick}>
        Back
      </button>
    </div>
  );
};

export default About;
