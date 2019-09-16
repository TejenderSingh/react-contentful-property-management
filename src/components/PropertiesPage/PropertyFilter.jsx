import PropTypes from "prop-types";
import React, { useContext } from "react";
import { PropertyContext } from "../../PropertyContext";

const getUniqueVal = (items, value) => {
  return [...new Set(items.map(item => item[value]).sort())];
};
const RoomFilter = ({ pros }) => {
  const context = useContext(PropertyContext);
  const {
    handleChange,
    type,
    bedroom,
    price,
    minPrice,
    maxPrice,
    pets
  } = context;

  let proTypes = getUniqueVal(pros, "type");
  proTypes = ["all", ...proTypes].map((item, index) => {
    return (
      <option value={item} key={index} className="capitalize">
        {item}
      </option>
    );
  });

  let bedrooms = getUniqueVal(pros, "bedroom").map((item, index) => {
    return (
      <option value={item} key={index}>
        {item} or more
      </option>
    );
  });

  return (
    <section className="container mx-auto bg-gray-200 py-6 rounded">
      <form className="w-full py-4">
        {/* select type */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-3">
            <label
              className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2"
              htmlFor="type"
            >
              Property Type
            </label>
            <div className="relative">
              <select
                name="type"
                id="type"
                value={type}
                className="block appearance-none w-full cursor-pointer bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 capitalize"
                onChange={handleChange}
              >
                {proTypes}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          {/* end select type */}

          {/* guests  */}

          <div className="w-full md:w-1/2 px-3 mb-3">
            <label
              className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2"
              htmlFor="bedroom"
            >
              bedrooms
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white cursor-pointer border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="bedroom"
                value={bedroom}
                name="bedroom"
                onChange={handleChange}
              >
                {bedrooms}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* end guests */}

        {/* Room price */}
        <div className="flex flex-wrap">
          <div className="w-full h-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label
              htmlFor="price"
              className="block uppercase tracking-wider text-gray-700 text-xs font-bold mb-2"
            >
              Price upto ${price}
            </label>
            <input
              type="range"
              name="price"
              id="price"
              value={price}
              min={minPrice}
              max={maxPrice}
              onChange={handleChange}
              className="block w-full appearance-none cursor-pointer border border-gray-200 text-gray-700 rounded focus:outline-none focus:border-gray-300 hover:border-gray-300 rounded-full"
            />
          </div>
          <div className="flex w-full items-end px-3 md:w-1/2 leading-none">
            <div className="leading-snug">
              <input
                type="checkbox"
                id="pets"
                name="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets" className="pl-6">
                Pets
              </label>
            </div>
          </div>
        </div>
        {/* End of room price */}
      </form>
    </section>
  );
};

RoomFilter.propTypes = {
  pros: PropTypes.array.isRequired
};
export default RoomFilter;
