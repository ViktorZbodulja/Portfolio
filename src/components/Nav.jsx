import React from 'react';
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function Nav() {
    const {pathname} = useLocation();
  return (
    <nav>
        <h1><Link id="logo" to="/">Portfolio</Link></h1>
        <ul>
            <li>
                <Link to="/">1. About Me</Link>
                <motion.div className='nav_line' 
                transition={{duration: 0.75}} 
                initial={{width: "0%"}} 
                animate={{width: pathname === "/" ? "50%" : "0"}}>
                </motion.div>
            </li>
            <li>
                <Link to="/work">2. My Work</Link>
                <motion.div className='nav_line' 
                transition={{duration: 0.75}} 
                initial={{width: "0%"}} 
                animate={{width: pathname === "/work" ? "50%" : "0"}}>
                </motion.div>
            </li>
            <li>
                <Link to="/contact">3. Contact</Link>
                <motion.div className='nav_line' 
                transition={{duration: 0.75}} 
                initial={{width: "0%"}} 
                animate={{width: pathname === "/contact" ? "50%" : "0"}}>
                </motion.div>
            </li>
        </ul>
    </nav>
  )
}

export default Nav