import React from 'react';
import { useScroll } from "./useScroll";
import jsLogo from "../img/jsLogo.svg";
import reactLogo from "../img/reactLogo.svg";
import flutterLogo from "../img/flutterLogo.svg";
//animations
import { motion } from "framer-motion";
import { courseAnim } from "../pages/Animation";

function CoursesList() {
  const [element, controls] = useScroll();
  return (
    <div className='courses'>
        <h2>Finished Courses</h2>
        <motion.div className='courses_container' variants={courseAnim} ref={element} animate={controls} initial="hidden">
          <motion.div className='course' variants={courseAnim}>
            <div className='img_container'>
              <img src={flutterLogo} alt='flutter logo' />
            </div>
            <div className='course_description'>
              <p>|Flutter bootcamp|</p>
              <p> HiveTech & ASEE</p>
              <p> 2023.</p>
            </div>
          </motion.div>
          <motion.div className='course' variants={courseAnim}>
            <div className='img_container'>
              <img src={jsLogo} alt='flutter logo' />
            </div>
            <div className='course_description'>
              <p>|The Creative Javascript Course|</p>
              <p>Developed by Ed</p>
              <p>2023.</p>
            </div>
          </motion.div>
          <motion.div className='course' variants={courseAnim}>
            <div className='img_container'>
              <img src={reactLogo} alt='flutter logo' />
            </div>
            <div className='course_description'>
              <p> |The Creative React and Redux Course|</p>
              <p> Developed by Ed</p>
              <p> 2023.</p>
            </div>
          </motion.div>
        </motion.div>
    </div>
  )
}

export default CoursesList