import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

import a from "../assets/images/carousel-images/435.png";
import b from "../assets/images/carousel-images/438.png";
import c from "../assets/images/carousel-images/439.png";
import d from "../assets/images/carousel-images/6233.png";
import e from "../assets/images/carousel-images/6523.png";

export default function App() {
  const swiperRef = useRef();

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 relative">
      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {[a, b, c, d, e].map((img, i) => (
          <SwiperSlide
            key={i}
            className="flex justify-center items-center h-64"
          >
            <img src={img} alt={`Slide ${i}`} className="object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="absolute bottom-4 left-4 text-white p-3 rounded-full hover:bg-black transition z-10"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        className="absolute bottom-4 right-4  text-white p-3 rounded-full hover:bg-black transition z-10"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
