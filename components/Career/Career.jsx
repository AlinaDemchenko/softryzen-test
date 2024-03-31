"use client";
import CareerList from "./CareerList";
import CareerForm from "./CareerForm";

function Career() {
  return (
    <section id="career" className="career">
      <div className="section-container gap-6">
        <div>
          <h2 className="title mb-6 leading-tight">
            CHOOSE <span className="font-medium">US</span>
          </h2>
          <p className="mb-[45px] ml-[123px] text-4xl font-extralight uppercase">
            Why us ?
          </p>
          <CareerList />
        </div>
        <div className="pt-4">
          <p className="descr mb-8 ml-auto w-[293px] text-justify">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
          <p className="descr mb-3.5 w-[234px]">
            Don&apos;t miss your opportunity! Fill out the form right now and
            join our team!
          </p>
          <CareerForm />
        </div>
      </div>
    </section>
  );
}

export default Career;
