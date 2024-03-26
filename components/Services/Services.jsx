"use client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import servicesDescription from "../../public/helpers/texts";
import SlideNumber from "./SlideNumber";
import ServicesList from "./ServicesList";
import SloganList from "./SloganList";

function Services() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  const [slideData, setSlideData] = useState({
    description: servicesDescription.one,
    slideNum: "01",
  });

  const imageSrc = () => {
    if (isDesktop) {
      return `/images/services/desktop/Photo${slideData.slideNum}@2x_result.webp`;
    }
    else if (isTablet) {
      return `/images/services/desktop/Photo${slideData.slideNum}@2x_result.webp`;
    }
    else {
      return `/images/services/desktop/Photo${slideData.slideNum}@2x_result.webp`;
    }
  };

  const isActive = (evt, num, descr) => {
    const active = document.querySelector(".is-active");
    active.classList.replace("is-active", "service-list");
    evt.currentTarget.classList.replace("service-list", "is-active");
    const activeSlide = document.querySelector(".active-slide");
    activeSlide.classList.replace("active-slide", "slide-change");
    const newActiveSlide = document.querySelector(`.slide-${descr}`);
    if (newActiveSlide.classList.contains("slide-change")) {
      newActiveSlide.classList.replace("slide-change", "active-slide");
    } else {
      newActiveSlide.classList.add("active-slide");
    }
    setSlideData({ description: servicesDescription[descr], slideNum: num });
  };

  return (
    <section id="services" className="services">
      <div className="slide-one active-slide"></div>
      <div className="slide-two"></div>
      <div className="slide-three"></div>
      <div className="slide-four"></div>
      <div className="slide-five"></div>
      <div className="section-container">
        <div className="mr-[13px]">
          <h2 className="title leading-tight xl:mb-[23px]">
            WE <span className="font-medium">OFFER</span>
          </h2>
          <div className="h-[429px] w-[607px]">
            <Image
              src={imageSrc()}
              width={607}
              height={429}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="mr-[59px] w-[257px]">
          <SlideNumber number={slideData.slideNum} />
          <ServicesList handlerActive={isActive} />
          {isTablet && (
            <>
              <SloganList slideData={slideData.slideNum} />
              <p className="descr text-justify">{slideData.description}</p>
            </>
          )}
        </div>
        {isDesktop && (
          <div className="w-[293px] pt-[135px]">
            <SloganList slideData={slideData.slideNum} />
            <p className="descr text-justify">{slideData.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
