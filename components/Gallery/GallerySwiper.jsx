"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Image from "next/image";

function GallerySwiper({ isDesktop }) {
  const stretchValue = isDesktop ? 450 : 550;
  const modifierValue = isDesktop ? 1 : 3;

  const images = [
    { src: "/images/gallery/gallery03@2x.webp", alt: "Lake" },
    { src: "/images/gallery/gallery01@2x.webp", alt: "Forest Trail" },
    { src: "/images/gallery/gallery02@2x.webp", alt: "Mountain Peak" },
  ];

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
      className="h-[294px] w-full xl:h-[437px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <Image
              className={isActive ? "active-image" : "gallery-image"}
              src={image.src}
              width={isDesktop ? "606" : "415"}
              height={isDesktop ? "429" : "294"}
              alt={image.alt}
            />
          )}
        </SwiperSlide>
      ))}
       {images.map((image, index) => (
      <SwiperSlide key={index + images.length}>
        {({ isActive }) => (
          <Image
            className={isActive ? "active-image" : "gallery-image"}
            src={image.src}
            width={isDesktop ? "606" : "415"}
            height={isDesktop ? "429" : "294"}
            alt={image.alt}
          />
        )}
      </SwiperSlide>
    ))}
      <button className="button-next text-start md:right-[37px] xl:right-[19px]">
        Next
      </button>
      <button className="button-prev text-end md:left-[37px] xl:left-[19px]">
        Back
      </button>
    </Swiper>
  );
}

export default GallerySwiper;
