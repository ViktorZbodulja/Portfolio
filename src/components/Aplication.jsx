import React from 'react'
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, loaderAnim, sliderContainer} from "../pages/Animation";
import { useScroll } from "../components/useScroll";

function Aplication({appData}) {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <div className="my_app">
        <h2 className='app_header'>{appData.name}</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <div className='app_container'>
          <img src={appData.cover} alt="appData.name" />
          <div className='app_description'>
            <div>
              <div>{appData.description}</div>
              <div>{appData.aditional1}</div>
              <div>{appData.aditional2}</div>
            </div>
            <div className='stack'>
            {appData.stack.map((s, index) => (
                <div className='stack_img' key={index}>
                  <img className='stack_svg' src={s} />
                </div>
              ))}
            </div>
            <div className='app_buttons'>
              <a href={appData.gitHub} target="_blank"><button>GitHub</button></a>
              <a href={appData.live} target="_blank"> <button>Live</button></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Aplication;