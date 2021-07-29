import React, { useState,useRef, useEffect } from 'react';
import {gsap,Power3} from "gsap";
import styles from '../styles/skills.module.css'
function Skills() {
    
    return (
        <div className="styles.container">
            <div className={styles.titlecontainer} >
                <div className={styles.lineleft}/>
                <h1  className={styles.title}>
                    SKILLS
                </h1>
                <div className={styles.lineright}/>
            </div>
            <ul  className={styles.skillscontainer}>
                <li  className={styles.skills}>
                    ReactJS
                </li>
                <div className={styles.seperatorline} />
                <li className={styles.skills}>
                    HTML
                </li>
                <li className={styles.skills}>
                    CSS
                </li>
                <li className={styles.skills}>
                    GSAP
                </li>
                <li className={styles.skills}>
                    NEXTJS
                </li>
            </ul>
        </div>
    )
}

export default Skills
