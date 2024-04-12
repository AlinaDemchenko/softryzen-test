"use client";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from 'react';

function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('parallax-right');
        } else {
          entry.target.classList.remove('parallax-right');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); 

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <section className="hero">
      <div ref={sectionRef} className="hero-bg"></div>
      <div className="section-container">
        {!isDesktopOrLaptop && <SectionTitle />}
        <div className="w-[280px] max-md:mx-auto md:w-[426px] xl:w-[646px]">
          <h1 className="title mb-6 xl:mb-[148px]">
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </h1>
          <p className="paragraph max-md:mx-auto">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="w-[280px] max-md:mx-auto md:w-[230px] xl:w-[305px]">
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
