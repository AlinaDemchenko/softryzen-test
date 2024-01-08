"use client";
import { useState } from "react";
import servicesDescription from "../../public/helpers/texts"
import SlideNumber from "./SlideNumber";

function Services() {
  const [background, setBackground] = useState("slide-one");
  const [slideData, setSlideData] = useState({description: servicesDescription.first, slideNum: "01", });

  const changeBackground = (evt) => {
    setBackground(`slide-one ${background}`);
  };

  const isActive = (evt, num, descr) => {
    const active = document.querySelector(".is-active");
    active.classList.replace("is-active", "service-list");
    evt.currentTarget.classList.replace("service-list", "is-active");
    // setSlideNum(num);
    setSlideData({description: servicesDescription[descr], slideNum: num})
  };

  return (
    <section id="services" className={background}>
      <div className="section-container">
        <div className="mr-[13px]">
          <h2 className="title xl:mb-[18px]">
            WE <span className="font-medium">OFFER</span>
          </h2>
          <div className="h-[434px] w-[608px]"></div>
        </div>
        <div  className="mr-[54px] w-[265px]">
          <SlideNumber number={slideData.slideNum} />
          <ul className="ml-[7px]">
            <li className="mb-6">
              <button
                onClick={(evt) => isActive(evt, "01", "first")}
                className="is-active"
              >
                ATVs Traveling
              </button>
            </li>
            <li className="mb-6">
              <button
                onClick={(evt) => isActive(evt, "02", "second")}
                className="service-list"
              >
                Rock climbing
              </button>
            </li>
            <li className="mb-6">
              <button
                onClick={(evt) => isActive(evt, "03", "third")}
                className="service-list"
              >
                Hot air ballooning
              </button>
            </li>
            <li className="mb-6">
              <button
                onClick={(evt) => isActive(evt, "04", "fourth")}
                className="service-list"
              >
                Skydiving
              </button>
            </li>
            <li>
              <button
                onClick={(evt) => isActive(evt, "05", "fifth")}
                className="service-list"
              >
                Rafting
              </button>
            </li>
          </ul>
        </div>
        <div className="w-[293px] pt-[135px]">
          <ul className="text-xs/6 font-extralight tracking-[0.2em] mb-7">
            <li className="mb-6">
              <p className={slideData.slideNum === "01" ? "opacity-100" : "opacity-0"}>Feel the adrenaline rush</p>
            </li>
            <li className="mb-6">
              <p className={slideData.slideNum === "02" ? "opacity-100" : "opacity-0"}>Destroy your limitations</p>
            </li>
            <li className="mb-12">
              <p className={slideData.slideNum === "03" ? "opacity-100" : "opacity-0"}>Get inspired</p>
            </li>
            <li className="mb-6">
              <p className={slideData.slideNum === "04" ? "opacity-100" : "opacity-0"}>Overcome your fears</p>
            </li>
            <li>
              <p className={slideData.slideNum === "05" ? "opacity-100" : "opacity-0"}>Trust the flow</p>
            </li>
          </ul>
          <p className="descr text-justify">{slideData.description}</p>
        </div>
        {/* <button onClick={changeBackground} className='text-black'>background</button> */}
      </div>
    </section>
  );
}

export default Services;
