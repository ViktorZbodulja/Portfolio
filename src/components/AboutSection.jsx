import React from "react";
import home1 from "../img/home1.png";

function AboutSection() {
  return (
    <div className="about">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Hi,</h2>
          </div>
          <div className="hide">
            <h2>
              I am <span>Viktor</span>
            </h2>
          </div>
          <div className="hide">
            <h2>web developer</h2>
          </div>
        </div>
        <p>
          Contact us for any photograpy or videography ideas that you have. We
          have profesionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="profile picture" />
      </div>
    </div>
  );
}

export default AboutSection;
