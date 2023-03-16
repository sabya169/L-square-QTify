import React from "react";
import styles from "./Card.module.css";

function Card({ data }) {
  // console.log("data from card",data)
  return (
    <div>
      <div className={styles.card_container}>
        <div>
          <img className={styles.image} src={data.image} alt="song-image" />
        </div>
        <div className={styles.follow_parent}>
          <span className={styles.follows}>{data.likes} follows</span>
        </div>
      </div>
      <div className={styles.image_text}>{data.title}</div>
    </div>
  );
}

export default Card;
