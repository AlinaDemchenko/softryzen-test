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
        <div className="max-md:mx-auto w-[280px] md:w-[426px] xl:w-[646px]">
          <h1 className="title mb-6 xl:mb-[148px]">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>
          <p className="paragraph max-md:mx-auto">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="max-md:mx-auto w-[280px] md:w-[230px] xl:w-[305px]">
          {isDesktopOrLaptop && <SectionTitle />}
          <p className="descr mb-6 text-justify md:mb-7">
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
