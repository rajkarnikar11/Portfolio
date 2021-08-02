import React, { useState,useRef } from 'react';
import {gsap} from "gsap";
import styles from '../styles/skills.module.css'
import Image from 'next/dist/client/image';

function Skills() {
    const [opacity1, setOpacity1] = useState(false); 
    let head=useRef(null);
    let timeLine=gsap.timeline()
    
    
    
    function up(){
        gsap.to(head,.3,{y:-20})
    }
    function down(){
        timeLine.to(head,.1,{y:0})
                .to(head,.15,{y:-10})
                .to(head,.1,{y:0})
                .to(head,.1,{y:-3})
                .to(head,.05,{y:0})
                .to(head,.05,{y:-1})
                .to(head,.02,{y:0})
    }
    
        
      
    
    return (
        <div id="skills" className="styles.container">
            
            <div   className={styles.titlecontainer} >
                
                <h1  ref={el=>head=el} onMouseEnter={up} onMouseLeave={down} className={styles.title}>
                    SKILLS
                </h1>
                <div className={styles.titleline} />
                
            </div>
           
            <ul   className={styles.skillscontainer}>
                <div className={styles.listcontainer}> 
                    <li  className={styles.skills}>
                        <div  className={styles.starcontainer}>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star" />
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg"  alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg"  alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starempty.svg"  alt="star"/>
                        </div>
                        ReactJS
                    </li>
                </div>  
                <div className={styles.seperationlinecontainer}>
                    <div className={styles.seperatorlineleft} />
                    <div className={styles.seperatorline} />
                    <div className={styles.seperatorlineright} />
                </div>
                    
                <div className={styles.listcontainer}> 
                    <li  className={styles.skills}>
                        <div  className={styles.starcontainer}>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star" />
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                        </div>
                        HTML
                    </li>
                </div>  
                <div className={styles.seperationlinecontainer}>
                    <div className={styles.seperatorlineleft} />
                    <div className={styles.seperatorline} />
                    <div className={styles.seperatorlineright} />
                </div>
                <div className={styles.listcontainer}> 
                    <li  className={styles.skills}>
                        <div  className={styles.starcontainer}>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg"  alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starempty.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starempty.svg" alt="star"/>
                        </div>
                        CSS
                    </li>
                </div>  
                <div className={styles.seperationlinecontainer}>
                    <div className={styles.seperatorlineleft} />
                    <div className={styles.seperatorline} />
                    <div className={styles.seperatorlineright} />
                </div>
                <div className={styles.listcontainer}> 
                    <li  className={styles.skills}>
                        <div  className={styles.starcontainer}>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starempty.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starempty.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starempty.svg" alt="star"/>
                        </div>
                        GSAP
                    </li>
                </div>  
                <div className={styles.seperationlinecontainer}>
                    <div className={styles.seperatorlineleft} />
                    <div className={styles.seperatorline} />
                    <div className={styles.seperatorlineright} />
                </div>
                <div className={styles.listcontainer}> 
                    <li  className={styles.skills}>
                        <div  className={styles.starcontainer}>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starfilled.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starempty.svg" alt="star"/>
                            <Image className={styles.star} height="20" width="20" src="/assets/starempty.svg" alt="star"/>
                        </div>
                        NEXTJS
                    </li>
                </div>  
                <div className={styles.seperationlinecontainer}>
                    <div className={styles.seperatorlineleft} />
                    <div className={styles.seperatorline} />
                    <div className={styles.seperatorlineright} />
                </div>
            </ul>
        </div>
    )
}

export default Skills
