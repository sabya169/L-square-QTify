import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <>
     <div className={styles.hero}>
        <div className={styles.text}>100 Thousand Songs, ad-free<br/>Over thousands product episodes</div>
        <div><img className={styles.headphone} src={require("../../assets/headphone.png")} alt="headphone-image"/></div>
    </div>
    
    </>
   
  )
}

export default Hero;
