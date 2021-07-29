import React, { useState,useRef, useEffect } from 'react';
import {gsap,Power3} from "gsap";
import Image from 'next/image'
import Link from 'next/Link'
import styles from '../styles/heroSection.module.css'

function HeroSection() {
    let contact= useRef(null);
    let name= useRef(null);
    let title= useRef(null);
    var tl = gsap.timeline();
    var t2 = gsap.timeline({repeat:-1});
    
    const shake =()=>{
        t2.fromTo(contact,.2,{x:20},{x:0})
        t2.resume();
    }
    const stop =()=>{
        t2.pause();
    }

    useEffect(()=>{
        tl.from(name,.1, {x:-7000,delay:1})
          .from(title,.1, {x:-7000})
          .from(contact,.05, {x:-7000})
          
        
    },[])
    return (
        <div className={styles.container}>
            <div className={styles.textarea}>
                <h1 ref={el=>name=el} className={styles.bold}> 
                    Salil Rajkarnikar
                </h1>
                 <h1 ref={el=>title=el} className={styles.name}> 
                   Front End developer
                </h1>
                <Link href="/">
                    <div onMouseEnter={shake} onMouseLeave={stop} ref={el=>contact=el} className={styles.button}>
                        Contact
                    </div>                 
                </Link>
            </div>    
            
        </div>
    )
}

export default HeroSection
