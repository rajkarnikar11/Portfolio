import React from 'react'
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.container} >
            <div className={styles.logo}>
                RAJKARNIKAR
            </div>
            <div className={styles.sticky}>
                <ul >
                    <li className={styles.navItems}>Home</li>
                    <li className={styles.navItems}>Skills</li>
                    <li className={styles.navItems}>Tools</li>
                    <li className={styles.navItems}>Contact</li>
                </ul>
            </div>
           
           
        </div>
    )
}

export default Navbar
