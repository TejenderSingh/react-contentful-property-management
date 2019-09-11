import PropTypes from "prop-types";
import React from "react";
import { FaBath, FaBed, FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
import defaultImg from "../../images/room-1.jpeg";
import Icons from "../Icons";

const PropertyCard = ({ pro }) => {
  const {
    name,
    slug,
    images,
    price,
    featured,
    location,
    bedroom,
    bathroom,
    garage
  } = pro;
  return (
    <Link
      to={`properties/${slug}`}
      className="room-card rounded overflow-hidden shadow-lg bg-white w-full max-w-md"
    >
      <div className="relative pb-2/3">
        <img
          className="absolute w-full h-full object-cover"
          src={images[0] || defaultImg}
          alt="Room"
        />
      </div>
      <div className="p-6">
        <div className="flex items-baseline">
          {featured ? (
            <span className="inline-block px-2 mr-2 bg-teal-200 text-teal-800 text-xs rounded rounded-full uppercase font-bold">
              new
            </span>
          ) : null}
          <div className="font-bold text-xl capitalize leading-relaxed mb-1 truncate">
            {name}
          </div>
        </div>
        <p className="text-gray-700 text-base truncate leading-relaxed capitalize">
          {location}
        </p>
        <div className="font-semibold bg-green-20 mb-3">
          ${price}{" "}
          <span className="leading-relaxed text-gray-600 text-sm">/ wk</span>
        </div>
        <div className="flex justify-between w-4/5">
          <Icons number={bedroom} name="bedroom">
            <FaBed />
          </Icons>
          <Icons number={bathroom} name="bathroom">
            <FaBath />
          </Icons>
          <Icons number={garage} name="garage">
            <FaCar />
          </Icons>
        </div>
      </div>
    </Link>
  );
};

PropertyCard.propTypes = {
  pro: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired,
    bedroom: PropTypes.number.isRequired,
    bathroom: PropTypes.number.isRequired
  })
};
export default PropertyCard;
