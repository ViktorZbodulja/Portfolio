import React from "react";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, photoAnim } from "./Animation";
//img
import contactImg from "../img/profile_contact_1.jpg";

function Contact() {
  return (
    <motion.div className="contact_style"
      variants={pageAnimation} 
      initial="hidden" 
      animate="show" 
      exit="exit"
      style={{background: `url(${contactImg}) center center/cover no-repeat`}}
      >
      <h1 className="contact_title">
        <div className="hide">
          <motion.div className="contact_txt" variants={titleAnim}>
            <h2 >Reach out and let's make something <span>extraordinary!</span></h2>
            <p>Whether you have a question, want to collaborate, or simply want to chat, I'm all ears. Drop me a line and let's bring your vision to life.</p>
          </motion.div>
        </div>
      </h1>
      <div className="contact_container">
        <div className="contact_list">
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
          <div className="hide">
            <motion.div className="social" variants={titleAnim}>
              <div className="circle"></div>
              <h2><a href="https://www.instagram.com/viktor_zb0/" target="_blank">Instagram</a></h2>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
  

export default Contact;
