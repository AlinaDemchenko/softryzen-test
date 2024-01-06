"use client";
import Description from "./Description";
import Slogan from "./Slogan";
import { useMediaQuery } from "react-responsive";

function About() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 })

  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="md:mr-[76px] md:h-[445px] xl:w-[606px] xl:h-fit xl:mr-6">
          <h2 className="title mb-2 md:mb-[304px] xl:mb-[424px]">
            WHO <span className="font-medium">WE ARE</span>
          </h2>
          {isDesktop && <Description />}
          {isTablet && <Slogan />}
        </div>
        <div className="w-[180px] mt-[9px] mb-10 md:mb-16 md:w-[220px] xl:w-[292px] xl:mt-4 xl:mr-3.5">
          <p className="mb-5 md:mb-4 text-sm md:text-base/5 font-extralight xl:text-lg/6 xl:mb-6">
            <span className="font-normal">a team of enthusiasts</span> who are
            fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>
          <p className="text-sm md:text-base/5 font-extralight xl:text-lg/6">
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
