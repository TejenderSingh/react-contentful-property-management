import PropTypes from "prop-types";
import React from "react";

const Title = ({ title }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 leading-none text-center tracking-wide">
        {title}
      </h1>
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired
};
export default Title;
