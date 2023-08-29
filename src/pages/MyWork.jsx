import React, {useState} from "react";
import { Link } from "react-router-dom";
import myApps from "../components/myApps";
import Aplication from "../components/Aplication";
//animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, loaderAnim, sliderContainer } from "./Animation";

import ScrollTop from "../components/ScrollTop";

function MyWork() {

  const [appsData, setAppsData] = useState(myApps());
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
      <motion.div className="my_app" variants={fade}>
        <div className="map_apps">
        {appsData.map((appData, index) => (
            <Aplication
              key={index}
              appData={appData}
             /> 
          ))}
        </div> 
      </motion.div>
      <ScrollTop />
    </motion.div>
  );
}

export default MyWork;
