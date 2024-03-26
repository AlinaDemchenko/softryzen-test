"use client";
import { useState } from "react";
import Image from "next/image";
import servicesDescription from "../../public/helpers/texts";
import SlideNumber from "./SlideNumber";

function Services() {
  const [slideData, setSlideData] = useState({
    description: servicesDescription.first,
    slideNum: "01",
  });

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
              src={`/images/Photo${slideData.slideNum}@2x_result.webp`}
              width={607}
              height={429}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="mr-[59px] w-[257px]">
          <SlideNumber number={slideData.slideNum} />
          <ul className="ml-[7px]">
            <li className="mb-6">
              <button
                onClick={(evt) => isActive(evt, "01", "one")}
                className="is-active"
              >
                ATVs Traveling
              </button>
            </li>
            <li className="mb-6">
              <button
                onClick={(evt) => isActive(evt, "02", "two")}
                className="service-list"
              >
                Rock climbing
              </button>
            </li>
            <li className="mb-6">
              <button
                onClick={(evt) => isActive(evt, "03", "three")}
                className="service-list"
              >
                Hot air ballooning
              </button>
            </li>
            <li className="mb-6">
              <button
                onClick={(evt) => isActive(evt, "04", "four")}
                className="service-list"
              >
                Skydiving
              </button>
            </li>
            <li>
              <button
                onClick={(evt) => isActive(evt, "05", "five")}
                className="service-list"
              >
                Rafting
              </button>
            </li>
          </ul>
        </div>
        <div className="w-[293px] pt-[135px]">
          <ul className="mb-7 text-xs/6 font-extralight tracking-[0.2em]">
            <li className="mb-6">
              <p
                className={
                  slideData.slideNum === "01" ? "opacity-100" : "opacity-0"
                }
              >
                Feel the adrenaline rush
              </p>
            </li>
            <li className="mb-6">
              <p
                className={
                  slideData.slideNum === "02" ? "opacity-100" : "opacity-0"
                }
              >
                Destroy your limitations
              </p>
            </li>
            <li className="mb-12">
              <p
                className={
                  slideData.slideNum === "03" ? "opacity-100" : "opacity-0"
                }
              >
                Get inspired
              </p>
            </li>
            <li className="mb-6">
              <p
                className={
                  slideData.slideNum === "04" ? "opacity-100" : "opacity-0"
                }
              >
                Overcome your fears
              </p>
            </li>
            <li>
              <p
                className={
                  slideData.slideNum === "05" ? "opacity-100" : "opacity-0"
                }
              >
                Trust the flow
              </p>
            </li>
          </ul>
          <p className="descr text-justify">{slideData.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
