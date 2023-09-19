import React from "react";
import html from "../img/html.png";
import css from "../img/css.png";
import sass from "../img/sass.svg";
import js from "../img/javascript.png";
import react from "../img/react.png";
import git from "../img/git.png";
import redux from "../img/redux.png";
import { motion } from "framer-motion";
import { scrollReveal2 } from "../pages/Animation";
import { useScrollHome } from "./useScroll";
import { Link } from "react-router-dom";

function MyStack() {
  const [element, controls] = useScrollHome();
  return (
    <div className="myStack" >
      <motion.div className="stack_icons" ref={element} variants={scrollReveal2} animate={controls} initial="hidden">
        <h2>
          My tech <span>Stack</span>
        </h2>      
        <div className="skills">
          <div className="skill">
            <div className="icon">
              <img src={html} />            
            </div>
            <div className="skill_text">
              <h3>|HTML|</h3>   
            </div>       
          </div>
          <div className="skill">
            <div className="icon">
              <img src={css} />  
            </div>
            <div className="skill_text">
              <h3>|CSS|</h3>
            </div>           
          </div>
          <div className="skill">
            <div className="icon" id="icon1">
              <img src={js} /> 
            </div>
            <div className="skill_text">
              <h3>|JavaScript|</h3>
            </div>          
          </div>
          <div className="skill">
            <div className="icon" id="icon2">
              <img src={sass} /> 
            </div>
            <div className="skill_text">
              <h3>|Sass|</h3>
            </div> 
          </div>
          <div className="skill">
            <div className="icon">
              <img src={react} /> 
            </div>
            <div className="skill_text">
              <h3>|React JS|</h3>
            </div>
          </div>
          <div className="skill">
            <div className="icon">
              <img src={git} /> 
            </div>
            <div className="skill_text">
                <h3>|Git|</h3>
            </div>
          </div>
          <div className="skill">
            <div className="icon">
              <img src={redux} /> 
            </div>
            <div className="skill_text">
                <h3>|Redux|</h3>
            </div>
          </div>
        </div>
        <Link to="/work"><button className="my_work_button">My Work</button></Link>
      </motion.div>
      <motion.div className="about_text" ref={element} variants={scrollReveal2} animate={controls} initial="hidden">
        <h2>About</h2>
        <div className="short_description">As a Junior <span>Frontend</span> Developer, I am passionate about creating clean, elegant, and responsive websites that provide an exceptional user experience. I am constantly learning new technologies and best practices to improve my skills and stay up-to-date with the latest trends in web development.</div>
        <div className="short_description">Also I am actively working towards expanding my skills into the realm of <span>Quality Assurance</span> to ensure the utmost reliability and excellence in applications.</div>
      </motion.div>
    </div>
  );
}

export default MyStack;
