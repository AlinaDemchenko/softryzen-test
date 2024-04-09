"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Image from "next/image";

function GallerySwiper() {
  return (
    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    loop={true}
    centeredSlides={true}
    navigation={{
      nextEl: ".button-next",
      prevEl: ".button-prev",
    }}
    coverflowEffect={{
      rotate: 0,
      stretch: 450,
      depth: 800,
      modifier: 1,
      slideShadows: false,
    }}
    // spaceBetween={24}
    slidesPerView={"auto"}
    modules={[EffectCoverflow, Navigation]}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
    className="h-[437px] w-full"
  >
    <SwiperSlide>
      {({ isActive }) => (
        <Image
          className={isActive ? "active-image" : "gallery-image"}
          src="/images/gallery/gallery03@2x.webp"
          width="606"
          height="429"
          alt="Lake"
        />
      )}
    </SwiperSlide>
    <SwiperSlide>
      {({ isActive }) => (
        <Image
          className={isActive ? "active-image" : "gallery-image"}
          src="/images/gallery/gallery01@2x.webp"
          width="606"
          height="429"
          alt="forest trail"
        />
      )}
    </SwiperSlide>
    <SwiperSlide>
      {({ isActive }) => (
        <Image
          className={isActive ? "active-image" : "gallery-image"}
          src="/images/gallery/gallery02@2x.webp"
          width="606"
          height="429"
          alt="Mountain peak"
        />
      )}
    </SwiperSlide>
    <SwiperSlide>
      {({ isActive }) => (
        <Image
          className={isActive ? "active-image" : "gallery-image"}
          src="/images/gallery/gallery03@2x.webp"
          width="606"
          height="429"
          alt="Lake"
        />
      )}
    </SwiperSlide>
    <SwiperSlide>
      {({ isActive }) => (
        <Image
          className={isActive ? "active-image" : "gallery-image"}
          src="/images/gallery/gallery01@2x.webp"
          width="606"
          height="429"
          alt="forest trail"
        />
      )}
    </SwiperSlide>
    <SwiperSlide>
      {({ isActive }) => (
        <Image
          className={isActive ? "active-image" : "gallery-image"}
          src="/images/gallery/gallery02@2x.webp"
          width="606"
          height="429"
          alt="Mountain peak"
        />
      )}
    </SwiperSlide>
    <button className="button-next right-[19px] text-start">
      Next
    </button>
    <button className="button-prev left-[19px] text-end">
      Back
    </button>
  </Swiper>
  )
}

export default GallerySwiper