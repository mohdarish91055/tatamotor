import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import a from "../assets/images/carousel-images/435.png";
import b from "../assets/images/carousel-images/438.png";
import c from "../assets/images/carousel-images/439.png";
import d from "../assets/images/carousel-images/6233.png";
import e from "../assets/images/carousel-images/6523.png";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  "
      >
        <SwiperSlide className=" text-white flex justify-center items-center h-64 text-2xl font-semibold">
          <img src={a} />
        </SwiperSlide>
        <SwiperSlide className=" text-white flex justify-center items-center h-64 text-2xl font-semibold">
          <img src={b} />
        </SwiperSlide>
        <SwiperSlide className=" text-white flex justify-center items-center h-64 text-2xl font-semibold">
          <img src={c} />
        </SwiperSlide>
        <SwiperSlide className=" text-white flex justify-center items-center h-64 text-2xl font-semibold">
          <img src={d} />
        </SwiperSlide>
        <SwiperSlide className=" text-white flex justify-center items-center h-64 text-2xl font-semibold">
          <img src={e} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
