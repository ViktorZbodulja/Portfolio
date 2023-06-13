import React from "react";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
//animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, loaderAnim, sliderContainer } from "./Animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

function MyWork() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <motion.div 
      className="my_work"
      variants={pageAnimation} 
      initial="hidden" 
      animate="show" 
      exit="exit"
      style={{background: "#fff"}}
    >
      <motion.div variants={sliderContainer}>
        <motion.div className="frame1" variants={loaderAnim}></motion.div>
        <motion.div className="frame2" variants={loaderAnim}></motion.div>
        <motion.div className="frame3" variants={loaderAnim}></motion.div>
        <motion.div className="frame4" variants={loaderAnim}></motion.div>
      </motion.div>
      <div className="my_app">
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <div className="hide_img">
          <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </div> 
        </Link>
      </div>
      <motion.div className="my_app" ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer"><img src={theracer} alt="athlete" /></Link>
      </motion.div>
      <motion.div className="my_app" ref={element2} variants={fade} animate={controls2} initial="hidden">
        <h2>Bood Times</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/good-times"><img src={goodtimes} alt="athlete" /></Link>
      </motion.div>
      <ScrollTop />
    </motion.div>
  );
}

export default MyWork;
