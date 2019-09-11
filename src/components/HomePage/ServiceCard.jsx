import React from "react";

const ServiceCard = ({ title, borderColor, img, description }) => {
  return (
    <div className="overflow-hidden rounded shadow-md bg-white w-full max-w-md">
      <div className="relative pb-2/5">
        <img
          className="absolute w-full h-full object-cover"
          src={img}
          alt="property"
        />
      </div>
      <div className={`px-6 py-4 border-t-8 border-${borderColor}-600`}>
        <div className="border-b pb-2 font-semibold mb-2 leading-none capitalize">
          {title}
        </div>
        <p className="text-gray-700 leading-snug text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
