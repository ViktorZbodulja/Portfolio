import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

function MyStack() {
  return (
    <div className="myStack">
      <div className="description">
        <h2>
          My <span>stack</span>
        </h2>
        <div className="skills">
          <div className="skill">
            <div className="icon">
              <img src={clock} />
              <h3>HTML</h3>
            </div>
          <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="skill">
            <div className="icon">
              <img src={teamwork} />
              <h3>CSS</h3>
            </div>
          <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="skill">
            <div className="icon">
              <img src={diaphragm} />
              <h3>JavaScript</h3>
            </div>
          <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="skill">
            <div className="icon">
              <img src={money} />
              <h3>React</h3>
            </div>
          <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <img src={home2} />
    </div>
  );
}

export default MyStack;
