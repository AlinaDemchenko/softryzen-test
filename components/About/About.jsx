"use client";
import Description from "./Description";
import Slogan from "./Slogan";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("parallax-left");
        } else {
          entry.target.classList.remove("parallax-left");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  return (
    <section id="about" className="about">
      <div ref={sectionRef} className="about-bg">
        <Image
          src="/background/about/about@2x.webp"
          alt="travelers at cartian mountains"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="section-container">
        <div className="md:mr-[76px] md:h-[445px] xl:mr-6 xl:h-fit xl:w-[606px]">
          <h2 className="title mb-2 max-md:text-center md:mb-[304px] xl:mb-[424px]">
            WHO <span className="font-medium">WE ARE</span>
          </h2>
          {isDesktop && <Description />}
          {isTablet && <Slogan />}
        </div>
        <div className="mb-10 mt-[9px] w-[180px] md:mb-16 md:w-[220px] xl:mr-3.5 xl:mt-4 xl:w-[292px]">
          <p className="mb-5 text-sm font-extralight md:mb-4 md:text-base/5 xl:mb-6 xl:text-lg/6">
            <span className="font-normal">a team of enthusiasts</span> who are
            fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>
          <p className="text-sm font-extralight md:text-base/5 xl:text-lg/6">
            <span className="font-normal">We believe </span>that nature has the
            power to inspire, strengthen character and provide new perspectives.
            Therefore, each of our tours is aimed at unlocking your potential,
            enriching your spiritual world and creating unforgettable memories.
          </p>
        </div>
        <div className="relative md:ml-auto md:w-[463px] xl:w-[297px]">
          {!isTablet && <Slogan />}
          {!isDesktop && <Description />}
        </div>
      </div>
    </section>
  );
}

export default About;
