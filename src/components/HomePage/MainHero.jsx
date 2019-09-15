import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../images/suburbs.svg";

const MainHero = () => {
  return (
    <div className="flex justify-center container mx-auto lg:px-6">
      <div className="lg:h-xl flex flex-col lg:flex-row-reverse">
        <div className="w-full sm:w-3/4 lg:w-2/5 pt-8 lg:pt-0 px-4 lg:px-0 self-center">
          <img src={heroImg} alt="Apartments" className="w-full" />
        </div>
        <div className=" w-full lg:w-3/5 pt-8 pb-12 lg:py-8 px-4 sm:px-8 lg:px-0 self-center lg:mr-20">
          <h1 className="text-4xl xl:text-5xl md:text-center lg:text-left text-gray-800 font-extrabold leading-tight">
            Find Your Dream Home
          </h1>
          <p className="text-lg font-semibold mt-4 leading-normal text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            architecto. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Lorem ipsum dolor sit amet.
          </p>
          <div className="mt-8 text-center py-2">
            <Link
              to="/properties"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6"
            >
              Find Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
