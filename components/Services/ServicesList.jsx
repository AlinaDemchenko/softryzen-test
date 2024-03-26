function ServicesList({handlerActive}) {
    return (
        <ul className="ml-[7px]">
        <li className="md:mb-4 xl:mb-6">
          <button
            onClick={(evt) => handlerActive(evt, "01", "one")}
            className="is-active"
          >
            ATVs Traveling
          </button>
        </li>
        <li className="md:mb-4 xl:mb-6">
          <button
            onClick={(evt) => handlerActive(evt, "02", "two")}
            className="service-list"
          >
            Rock climbing
          </button>
        </li>
        <li className="md:mb-4 xl:mb-6">
          <button
            onClick={(evt) => handlerActive(evt, "03", "three")}
            className="service-list"
          >
            Hot air ballooning
          </button>
        </li>
        <li className="md:mb-4 xl:mb-6">
          <button
            onClick={(evt) => handlerActive(evt, "04", "four")}
            className="service-list"
          >
            Skydiving
          </button>
        </li>
        <li>
          <button
            onClick={(evt) => handlerActive(evt, "05", "five")}
            className="service-list"
          >
            Rafting
          </button>
        </li>
      </ul>
    )
  }
  
  export default ServicesList