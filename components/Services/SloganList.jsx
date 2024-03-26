function SloganList({slideData}) {
  return (
    <ul className="text-xs/6 font-extralight tracking-[0.2em] md:mb-[34px] md:h-6 xl:h-auto xl:mb-7">
      <li className="xl:mb-6">
        <p
          className={slideData === "01" ? "opacity-100" : "opacity-0"}
        >
          Feel the adrenaline rush
        </p>
      </li>
      <li className="md:-translate-y-6 xl:mb-6 xl:translate-y-0">
        <p
          className={slideData === "02" ? "opacity-100" : "opacity-0"}
        >
          Destroy your limitations
        </p>
      </li>
      <li className="md:-translate-y-12 xl:mb-12 xl:translate-y-0">
        <p
          className={slideData === "03" ? "opacity-100" : "opacity-0"}
        >
          Get inspired
        </p>
      </li>
      <li className="md:-translate-y-[4.5rem] xl:mb-6 xl:translate-y-0">
        <p
          className={slideData === "04" ? "opacity-100" : "opacity-0"}
        >
          Overcome your fears
        </p>
      </li>
      <li className="md:-translate-y-24 xl:translate-y-0">
        <p
          className={slideData === "05" ? "opacity-100" : "opacity-0"}
        >
          Trust the flow
        </p>
      </li>
    </ul>
  );
}

export default SloganList;
