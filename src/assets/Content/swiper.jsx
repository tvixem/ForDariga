import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import photo1 from "../Content/dariga1.JPG"
import photo2 from "../Content/dariga2.JPG"
import photo3 from "../Content/dariga3.JPG"
import photo4 from "../Content/dariga4.JPG"
import photo5 from "../Content/holymoly.jpeg"
import photo6 from "../Content/shit.jpg"
import photo7 from "../Content/shish.jpeg"
import photo8 from "../Content/c.jpeg"
import photo9 from "../Content/dariga7.JPG"
import photo10 from "../Content/hellyeah.jpeg"
import photo11 from "../Content/miss.jpeg"
import photo12 from "../Content/fucksad.jpeg"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

export default function Swiperr() {
  return (
    <>
      <Swiper

pagination={{ dynamicBullets: true }}
modules={[Pagination, Autoplay]}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
loop={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={photo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo10} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo11} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo12} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
