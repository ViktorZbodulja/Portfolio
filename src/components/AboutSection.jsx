import React from "react";
import home1 from "../img/home_2.jpg";
import {motion} from "framer-motion";
import { titleAnim, fade, photoAnim } from "../pages/Animation";
import { Link } from "react-router-dom";
import Wave from "./Wave";

function AboutSection() {

  return (
    <div className="about">
      <div className="description">
        <motion.div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>Hi,</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim} >
              I am <span>Viktor,</span>
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>Frontend developer</motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
        I create visually appealing and intuitive user interfaces by combining my passion for design with my experience in HTML, CSS and JavaScript.
        </motion.p>
        <Link to="/contact"><motion.button variants={fade}>Contact Me</motion.button></Link>
      </div>
      <div className="image">
        <motion.img variants={photoAnim} src={home1} alt="profile picture" />
      </div>
      <Wave />
    </div>
  );
}

export default AboutSection;
