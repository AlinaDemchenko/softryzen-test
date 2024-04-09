import Image from "next/image";

function GalleryList() {
  return (
    <ul>
      <li>
        <Image
          className="gallery-list mb-6"
          src="/images/gallery/gallery03@2x.webp"
          // sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px"
          alt="Lake"
          width="280"
          height="187"
        />
      </li>
      <li>
        <Image
          className="gallery-list mb-6"
          src="/images/gallery/gallery01@2x.webp"
          // sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px"
          width="280"
          height="187"
          alt="forest trail"
        />
      </li>
      <li>
        <Image
          className="gallery-list"
          src="/images/gallery/gallery02@2x.webp"
          // sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px"
          width="280"
          height="187"
          alt="Mountain peak"
        />
      </li>
    </ul>
  );
}

export default GalleryList;
