"use client";
import GallerySwiper from "./GallerySwiper";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="section-container block px-0">
        <h2 className="title leading-tight mb-[66px] mx-0 text-center xl:mb-[15px] xl:ml-[23px] xl:text-start">
          OUR <span className="font-medium">GALLERY</span>
        </h2>
        <div>
          <GallerySwiper />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
