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

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [slideData, setSlideData] = useState({
    description: servicesDescription.one,
    slideNum: "01",
  });

  const getImageData = () => {
    if (isDesktop) {
      return {
        src: `/images/services/desktop/Photo${slideData.slideNum}@2x_result.webp`,
        width: 607,
        height: 429,
      };
    } else if (isTablet) {
      return {
        src: `/images/services/tablet/Photo${slideData.slideNum}@2x_tab.webp`,
        width: 463,
        height: 370,
      };
    } else {
      return {
        src: `/images/services/mobile/Photo${slideData.slideNum}@2x_mob.webp`,
        width: 280,
        height: 213,
      };
    }
  };

  const imageStyle = {
    margin: "0 auto 12px",
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
      <div className="section-container xl:h-[619px]">
        <div className="max-md:w-[280px] max-md:mx-auto md:mr-5 xl:mr-[13px]">
          <h2 className="title mb-6 md:mb-9 md:leading-tight xl:mb-[23px]">
            WE <span className="font-medium">OFFER</span>
          </h2>
          {isMobile && <SlideNumber number={slideData.slideNum} />}
          <Image
            style={isMobile ? imageStyle : ""}
            src={getImageData().src}
            width={getImageData().width}
            height={getImageData().height}
            alt="Picture of the author"
          />
          {isMobile && <SloganList slideData={slideData.slideNum} />}
        </div>
        <div className="md:w-[221px] xl:mr-[59px] xl:w-[257px]">
          {!isMobile && <SlideNumber number={slideData.slideNum} />}
          <ServicesList handlerActive={isActive} />
          {isMobile && (
            <p className="descr text-justify md:text-[13px] xl:text-lg/6">
              {slideData.description}
            </p>
          )}
          {isTablet && (
            <>
              <SloganList slideData={slideData.slideNum} />
              <p className="descr text-justify md:text-[13px] xl:text-lg/6">
                {slideData.description}
              </p>
            </>
          )}
        </div>
        {isDesktop && (
          <div className="pt-[135px] xl:w-[293px]">
            <SloganList slideData={slideData.slideNum} />
            <p className="descr text-justify">{slideData.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
