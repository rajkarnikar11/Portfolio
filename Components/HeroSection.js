import React, { useState,useRef, useEffect } from 'react';
import {gsap,Power3} from "gsap";
import Typewriter from "typewriter-effect";
import Image from 'next/image'
import Link from 'next/Link'
import styles from '../styles/heroSection.module.css'

function HeroSection() {
    let contact= useRef(null);
    let info= useRef(null);
    let name= useRef(null);
    let title= useRef(null);
    var tl = gsap.timeline();
    var timeLine2 = gsap.timeline();
    var t2 = gsap.timeline({repeat:-1});
    function pop(){
        t2.pause();
        window.location.reload()
        
    }
    
    
    const shake =()=>{
        t2.fromTo(contact,.2,{x:20},{x:0})
        t2.resume();
    }
    

    useEffect(()=>{
        tl.from(name,.2, {x:-7000,opacity:0,delay:1})
          .from(title,.3, {x:-7000,opacity:.1,})
          .from(contact,.2, {x:-7000})
       
        
    },[])
    return (
        <div  id="home" className={styles.container}>
            <div className={styles.textarea}>
                <h1 ref={el=>name=el} className={styles.bold}> 
                    Salil Rajkarnikar
                </h1>
                 <h1 ref={el=>title=el} className={styles.name}> 
                   Front End developer
                </h1>

                <a href='/resume/Resume.pdf' download="Resume" download target='_blank'>
                    <div onMouseEnter={shake} onClick={pop} onMouseLeave={pop} ref={el=>contact=el} className={styles.button}>
                        <div>Resume</div>
                        <Image  src="/assets/download.svg" height="20" width="20" />

                    </div>                 
                </a>
                <div className={styles.about}>
                    <Typewriter 
                        onInit={(typewriter)=> {
                            

                            typewriter
                            .pauseFor(1500)
                            .typeString("NAMASTE!!!")
                            .changeDelay(30)  
                            .pauseFor(800)
                            .deleteAll()
                            .typeString("I'm Salil. A  Front End Developer based in Kathmandu. <br/>I specialise in creating interactive experiences and functional interfaces using React.")
                            .start();
                        }}
                    />
                </div>
            </div> 
  
 
          
        </div>
    )
}

export default HeroSection
