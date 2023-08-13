import Image from "next/image";
import deskRightBtn from "../public/frame-left-desk.svg";
import deskLeftBtn from "../public/frame-right-desk.svg";

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* <div className="overlay"> */}
      <div className="overlay">
        <div className="mx-auto flex w-[1280px] justify-evenly px-6 pb-6 pt-[130px]">
          <div>
            <h1>
              <span className="font-medium">Uncover</span> Carpathian’s Secrets
            </h1>
            <p className="font-extralight tracking-[.09em]">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
          </div>
          <div className="w-[305px]">
            <h2 className="relative mb-[200px] text-[6.125rem] font-thin leading-[7.45rem]">
              <span className="mr-2 font-medium">7</span>DAYS{" "}
              <span className="absolute -bottom-[19px] left-0 text-base font-light tracking-[2.28em]">
                JOURNEY
              </span>
            </h2>
            <p className="mb-7 text-justify text-lg/6 font-extralight">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <button type="button " className="hero-btn">
              <span className="absolute left-0 top-0">
              <Image
                  src={deskLeftBtn}
                  width={44}
                  height={71}
                  alt="frame"
                ></Image>
              </span>
              JOIN NOW
              <span className="absolute right-0 top-0">
                <Image
                  src={deskRightBtn}
                  width={44}
                  height={71}
                  alt="frame"
                ></Image>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Hero;
