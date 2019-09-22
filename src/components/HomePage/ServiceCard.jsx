import PropTypes from "prop-types";
import React, { useContext } from "react";
import ThemeContext from "../../../src/ThemeContext";

const ServiceCard = ({ title, borderColor, img, description }) => {
  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;
  return (
    <div
      className={`overflow-hidden rounded shadow-md ${theme.bg} w-full max-w-md`}
    >
      <div className="relative pb-2/5">
        <img
          className="absolute w-full h-full object-cover"
          src={img}
          alt="property"
        />
      </div>
      <div className={`px-6 py-4 border-t-8 border-${borderColor}-600`}>
        <div
          className={`border-b ${theme.fg} pb-2 font-semibold mb-2  leading-none capitalize`}
        >
          {title}
        </div>
        <p className={` text-gray-700 leading-snug text-base`}>{description}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default ServiceCard;
