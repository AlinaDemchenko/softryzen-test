import GallerySwiper from "./GallerySwiper";
import GalleryList from "./GalleryList";
import Image from "next/image";

function Gallery() {

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-bg">
        <Image
          src="/background/gallery/gallery@2x.webp"
          alt="forest"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="section-container block px-5 md:px-0">
        <h2 className="title mx-auto mb-6 w-[280px] text-start md:mx-0 md:mb-[72px] md:w-full md:text-center md:leading-tight xl:mb-[15px] xl:ml-[23px] xl:text-start">
          OUR <span className="font-medium">GALLERY</span>
        </h2>
        <div>
           <div className="hidden md:block">
             <GallerySwiper />
           </div>
          {/* {isMobile &&  */}
          <div className="md:hidden">
            <GalleryList />
          </div>
          {/* } */}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
