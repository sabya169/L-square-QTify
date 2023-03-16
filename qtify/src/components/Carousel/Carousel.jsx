// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css"

// Import Swiper styles
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

export default function Carousel({ cards, renderComponent }) {
  return (
    <div>
      <Swiper
        spaceBetween={40}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <CarouselLeftNavigation />
        {cards.map((data) => (
          <SwiperSlide>{renderComponent(data)}</SwiperSlide>
        ))}
        <CarouselRightNavigation />
      </Swiper>
    </div>
  );
}
