import React from 'react'
import styles from '../styles/skills.module.css'
function Tools() {
    return (
        <div className="styles.container">
            <div className={styles.titlecontainer} >
                <div className={styles.lineleft}/>
                <h1 className={styles.title}>
                    TOOLS
                </h1>
                <div className={styles.lineright}/>
            </div>
            <ul className={styles.skillscontainer}>
                <li className={styles.skills}>
                    Photoshop
                </li>
                <li className={styles.skills}>
                    Figma
                </li>
                <li className={styles.skills}>
                    Illustrator
                </li>
                <li className={styles.skills}>
                    VSCode
                </li>
                
            </ul>
        </div>
    )
}

export default Tools
