import React from 'react'
import styles from "./Card.module.css"

function Card() {
  return (
    <div>
      <div className={styles.card_container}>
        <div><img className={styles.image} src={require("../../assets/song.jpeg")}/></div>
        <div className={styles.follow_parent}><span className={styles.follows}>100M follows</span></div>
      </div>
      <div className={styles.image_text}>New Bollywood</div>
    </div>
  )
}

export default Card
