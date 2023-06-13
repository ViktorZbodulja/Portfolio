import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import {AppState} from "../AppState";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

function AppDetails() {
   
    let params = useParams();
    const [apps, setApps] = useState(AppState());
    const [app, setApp] = useState(null);
    
    useEffect(() => {
        const currentApp = apps.filter((stateApp) => stateApp.url === `/work/${params.id}`);
        setApp(currentApp[0]);
      }, [apps, params]);

  return (
    <>
    {app && (
        <motion.div className='details' 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show" 
            exit="exit"
        >
            <div className="head_line">
                <h1>{app.title}</h1>
                <img src={app.mainImg} alt="app" />
            </div>
            <div className="awards">
                {app.awards.map((award) => (
                    <Award title={award.title} 
                            description={award.description} 
                            key={award.title} />
                ))}
            </div>
            <div className="image_display">
                <img src={app.secondaryImg} alt="app" />
            </div>
        </motion.div>
    )}   
    </>
  )
}

function Award({title, description}) {
    return(
        <div className='award_style'>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </div>
    )
}
export default AppDetails