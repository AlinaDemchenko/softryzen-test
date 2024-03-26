function SloganList({slideData}) {
  return (
    <ul className="mb-7 text-xs/6 font-extralight tracking-[0.2em]">
      <li className="mb-6">
        <p
          className={slideData === "01" ? "opacity-100" : "opacity-0"}
        >
          Feel the adrenaline rush
        </p>
      </li>
      <li className="mb-6">
        <p
          className={slideData === "02" ? "opacity-100" : "opacity-0"}
        >
          Destroy your limitations
        </p>
      </li>
      <li className="mb-12">
        <p
          className={slideData === "03" ? "opacity-100" : "opacity-0"}
        >
          Get inspired
        </p>
      </li>
      <li className="mb-6">
        <p
          className={slideData === "04" ? "opacity-100" : "opacity-0"}
        >
          Overcome your fears
        </p>
      </li>
      <li>
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
