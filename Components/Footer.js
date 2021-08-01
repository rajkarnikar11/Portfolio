import React from 'react'
import Link from 'next/link'
import styles from '../styles/footer.module.css'
function Footer() {
    const refreshPage = ()=>{
       
        // window.scrollTo({
        //     top: 0,
        //     behavior: "smooth"
        //   });
        window.location.reload()
     }
    
    return (
        <div className={styles.container}>
           <Link href="/">
           <button onClick={refreshPage}>Refresh Page</button>   
            </Link> 
        </div>
    )
}

export default Footer
