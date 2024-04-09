"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Image from "next/image";

function GallerySwiper({isDesktop}) {
    const stretchValue = isDesktop ? 450 : 550;
    const modifierValue = isDesktop ? 1 : 3;

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
        stretch: stretchValue,
        depth: 800,
        modifier: modifierValue,
        slideShadows: false,
      }}
      slidesPerView={"auto"}
      modules={[EffectCoverflow, Navigation]}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
      className="h-[294px] xl:h-[437px] w-full"
    >
      <SwiperSlide>
        {({ isActive }) => (
          <Image
            className={isActive ? "active-image" : "gallery-image"}
            src="/images/gallery/gallery03@2x.webp"
            // sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px"
            alt="Lake"
            width={isDesktop ? "606" : "415"}
            height={isDesktop ? "429" : "294"}
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <Image
            className={isActive ? "active-image" : "gallery-image"}
            src="/images/gallery/gallery01@2x.webp"
            // sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px"
            width={isDesktop ? "606" : "415"}
            height={isDesktop ? "429" : "294"}
            alt="forest trail"
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <Image
            className={isActive ? "active-image" : "gallery-image"}
            src="/images/gallery/gallery02@2x.webp"
            // sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px"
            width={isDesktop ? "606" : "415"}
            height={isDesktop ? "429" : "294"}
            alt="Mountain peak"
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <Image
            className={isActive ? "active-image" : "gallery-image"}
            src="/images/gallery/gallery03@2x.webp"
            // sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px"
            width={isDesktop ? "606" : "415"}
            height={isDesktop ? "429" : "294"}
            alt="Lake"
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <Image
            className={isActive ? "active-image" : "gallery-image"}
            src="/images/gallery/gallery01@2x.webp"
            sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px"
            width={isDesktop ? "606" : "415"}
            height={isDesktop ? "429" : "294"}
            alt="forest trail"
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <Image 
            className={isActive ? "active-image" : "gallery-image"}
            src="/images/gallery/gallery02@2x.webp"
            // sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px"
            width={isDesktop ? "606" : "415"}
            height={isDesktop ? "429" : "294"}
            alt="Mountain peak"
          />
        )}
      </SwiperSlide>
      <button className="button-next md:right-[37px] xl:right-[19px] text-start">Next</button>
      <button className="button-prev md:left-[37px] xl:left-[19px] text-end">Back</button>
    </Swiper>
  );
}

export default GallerySwiper;
