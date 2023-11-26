import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import './slider1.css';
// import required modules
import { Navigation } from 'swiper/modules';
import Slider from './Slider';

export default function Slider1() {
  return (
    <>
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Slider/></SwiperSlide>
        <SwiperSlide><Slider/></SwiperSlide>
        <SwiperSlide><Slider/></SwiperSlide>
        <SwiperSlide><Slider/></SwiperSlide>
        <SwiperSlide><Slider/></SwiperSlide>
        <SwiperSlide><Slider/></SwiperSlide>
        <SwiperSlide><Slider/></SwiperSlide>
        <SwiperSlide><Slider/></SwiperSlide>
        
      </Swiper>
    </>
  )
}
