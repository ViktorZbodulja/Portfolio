import React from 'react';
import Toggle from './Toggle';
import { LayoutGroup, motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { faqAnim } from '../pages/Animation';

function FaqSection() {
    const [element, controls] = useScroll();
  return (
    <motion.div className='faq' variants={faqAnim} ref={element} animate={controls} initial="hidden">
        <h2>Additional <span>Informations</span></h2>
        <LayoutGroup>
            <Toggle title={"My future plans"} variants={faqAnim}>
                    <div className='answer'>
                        <p>My goal as a Junior Front-End Developer is to continue to learn and grow in my skills and abilities, and also want to extend my knowledge to Backend.</p>  
                    </div> 
            </Toggle>
            <Toggle title={"Location"} variants={faqAnim}>  
                    <div className='answer'>
                        <p>Developer based in Zagreb, Croatia 📍</p>
                    </div> 
            </Toggle>
            <Toggle title={"Hobbies"} variants={faqAnim}>
                    <div className='answer'>
                        <p>Cycling, Photography, Video Games</p>
                    </div>
            </Toggle>
        </LayoutGroup>
    </motion.div>
  )
}

export default FaqSection