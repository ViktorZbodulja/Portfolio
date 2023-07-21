import React from 'react'
import jsLogo from "../img/jsLogo.svg";
import reactLogo from "../img/reactLogo.svg";
import flutterLogo from "../img/flutterLogo.svg";

function CoursesList() {
  return (
    <div className='courses'>
        <h2>Finished Courses</h2>
        <div className='courses_container'>
          <div className='course'>
            <div className='img_container'>
              <img src={flutterLogo} alt='flutter logo' />
            </div>
            <div className='course_description'>
              <p>|Flutter bootcamp|</p>
              <p> HiveTech & ASEE</p>
              <p> 2023.</p>
            </div>
          </div>
          <div className='course'>
            <div className='img_container'>
              <img src={jsLogo} alt='flutter logo' />
            </div>
            <div className='course_description'>
              <p>|The Creative Javascript Course|</p>
              <p>Developed by Ed</p>
              <p>2023.</p>
            </div>
          </div>
          <div className='course'>
            <div className='img_container'>
              <img src={reactLogo} alt='flutter logo' />
            </div>
            <div className='course_description'>
              <p> |The Creative React and Redux Course|</p>
              <p> Developed by Ed</p>
              <p> 2023.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CoursesList