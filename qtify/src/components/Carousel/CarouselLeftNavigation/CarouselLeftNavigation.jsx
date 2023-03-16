import React from 'react'
import styles from "./CarouselLeft.module.css"
import { useSwiper } from "swiper/react"

function CarouselLeftNavigation() {

    const swiper = useSwiper()

  return (
    <div onClick={()=>swiper.slidePrev()} className={styles.leftarrow}>
      <img src={require("../../../assets/leftArrow.png")} alt="left-arrow"/>
    </div>
  )
}

export default CarouselLeftNavigation
