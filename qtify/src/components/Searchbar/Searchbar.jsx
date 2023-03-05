import React from 'react'
import styles from "./Searchbar.module.css"

function Searchbar() {
  return (
    <div>
      <input placeholder='search a song by your choice..' type="text" className={styles.searchbar} />
    </div>
  )
}

export default Searchbar
