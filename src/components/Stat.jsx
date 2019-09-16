import PropTypes from "prop-types";
import React from "react";

const Stat = ({ title, subtitle }) => {
  return (
    <div className="col-span-8 sm:col-span-4 lg:col-span-2">
      <div>
        <p className="text-white text-center text-6xl leading-none mb-2">
          {title}
        </p>
        <p className="text-center text-xl text-white text-center">{subtitle}</p>
      </div>
    </div>
  );
};

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};
export default Stat;
