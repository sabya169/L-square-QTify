import React from 'react'
import styles from "./Searchbar.module.css"

function Searchbar() {
  return (
    <div className={styles.wrapper}>
      <input placeholder='search a song by your choice..' type="text" className={styles.searchbar} />
      <button className={styles.searchbutton}><img src={require("../../assets/Search-icon.png")} /></button>
    </div>
  )
}

export default Searchbar
