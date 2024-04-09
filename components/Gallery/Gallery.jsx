"use client";
import GallerySwiper from "./GallerySwiper";
import GalleryList from "./GalleryList";
import { useMediaQuery } from "react-responsive";

function Gallery() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section id="gallery" className="gallery">
      <div className="section-container block px-5 md:px-0">
        <h2 className="title mx-auto text-start mb-6 md:mx-0 md:mb-[72px] md:text-center md:leading-tight w-[280px] md:w-full xl:mb-[15px] xl:ml-[23px] xl:text-start">
          OUR <span className="font-medium">GALLERY</span>
        </h2>
        <div>
          {!isMobile && <GallerySwiper isDesktop={isDesktop} />}
          {isMobile && <GalleryList/>}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
