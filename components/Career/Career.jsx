"use client";
import CareerList from "./CareerList";
import CareerForm from "./CareerForm";
import { useMediaQuery } from "react-responsive";

function Career() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section id="career" className="career">
      <div className="section-container gap-x-6 md:pl-7 xl:pl-6">
        <div>
          <h2 className="title mb-0 inline-block align-top leading-tight xl:mb-6 xl:align-baseline">
            CHOOSE <span className="font-medium">US</span>
          </h2>
          {!isDesktop && (
            <p className="descr mb-[5px] ml-[115px] mt-2 inline-block w-[221px] text-justify md:text-[13px]">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
          )}
          <p className="mb-[55px] ml-20 text-3xl font-extralight uppercase xl:mb-[45px] xl:ml-[123px] xl:text-4xl">
            Why us ?
          </p>
          {isDesktop && <CareerList />}
        </div>
        <div className="gap-5 md:flex xl:block xl:pt-4">
          {!isDesktop && <CareerList />}
          {isDesktop && (
            <>
              <p className="descr mb-8 ml-auto w-[293px] text-justify">
                Your chance to join our passionate team in Carpathian tourism.
                Seeking talented professionals to share our common mission.
              </p>
              <p className="descr mb-3.5 w-[234px]">
                Don&apos;t miss your opportunity! Fill out the form right now
                and join our team!
              </p>
            </>
          )}
          <div>
            {!isDesktop && (
              <p className="descr mb-8 w-44 md:text-[13px]">
                Don&apos;t miss your opportunity! Fill out the form right now
                and join our team!
              </p>
            )}
            <CareerForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
