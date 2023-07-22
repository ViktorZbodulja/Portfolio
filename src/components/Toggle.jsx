import React, {useState} from 'react';
import { motion } from 'framer-motion';

function Toggle({children, title, variants}) {
    const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className='question' onClick={() => setToggle(!toggle)} variants={variants}>
        <motion.h4 layout>{title}</motion.h4>
        {toggle ? children : ""}
        <div className={`faq-line ${toggle ? "highlight_line" : ""}`}></div>
    </motion.div>
  )
}

export default Toggle