import React from "react";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, contactAnim, borderAnim } from "./Animation";
//img
import contactImg from "../img/contact_background.jpg";

function Contact() {
  return (
    <motion.div className="contact_style"
      variants={pageAnimation} 
      initial="hidden" 
      animate="show" 
      exit="exit"
      style={{background: `url(${contactImg}) center center/cover no-repeat`}}
      >
        <h2 className="contact_header"> Get In Touch.</h2>
      <div className="contact_container">
        <motion.div className="contact_list" variants={borderAnim}>
          <div className="hide">
            <motion.div className="social" variants={titleAnim}>
              <div className="circle"></div>
              <h2><a href = "mailto: viktorzbodulja@gmail.com">Send An Email</a></h2>
            </motion.div>
          </div>
          <div className="hide">
            <motion.div className="social" variants={titleAnim}>
              <div className="circle"></div>
              <h2><a href="https://github.com/ViktorZbodulja" target="_blank">Github</a></h2>
            </motion.div>
          </div>
          <div className="hide">
            <motion.div className="social" variants={titleAnim}>
              <div className="circle"></div>
              <h2><a href="https://www.linkedin.com/in/viktor-zbodulja-4b0408228/?originalSubdomain=hr" target="_blank">Linkedin</a></h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="contact_title">
        <div className="hide">
          <motion.div className="contact_txt" variants={contactAnim}>
            <h2 >Let's make something <span>extraordinary!</span></h2>
            <p>Whether you have a question, want to collaborate, or simply want to chat, I'm all ears. Drop me a line and let's bring your vision to life.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
  
export default Contact;
