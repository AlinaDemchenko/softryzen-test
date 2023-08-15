"use client";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <section className="hero">
      <div className="section-container">
        {!isDesktopOrLaptop && <SectionTitle />}
        <div className="md:w-[426px] xl:w-[646px]">
          <h1 className="title xl:mb-[148px]">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>
          <p className="paragraph">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="md:w-[230px] xl:w-[305px]">
          {isDesktopOrLaptop && <SectionTitle />}
          <p className="mb-6 text-justify text-sm font-extralight md:mb-7 md:text-base/5 xl:text-lg/6">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <Link href="#contacts" className="hero-btn">
            <span className="btn-left-frame"></span>
            JOIN NOW
            <span className="btn-right-frame"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
