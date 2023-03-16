import React from 'react'
import { useSwiper } from "swiper/react"
import styles from "./CarouselRight.module.css"

function CarouselRightNavigation() {

    const swiper = useSwiper()
  return (
    <div className={styles.rightArrow} onClick={()=>swiper.slideNext()}>
     <img src={require("../../../assets/rightArrow.png")} alt="right-arrow"/>
    </div>
  )
}

export default CarouselRightNavigation
