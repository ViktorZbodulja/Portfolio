import React from "react";
import AboutSection from "../components/AboutSection";
import MyStack from "../components/MyStack";
import FaqSection from "../components/FaqSection";
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";
import ScrollTop from "../components/ScrollTop";

function AboutUs() {
  return (
    <motion.div 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show" 
        exit="exit"
      >
      <AboutSection />
      <MyStack />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
}

export default AboutUs;
