import PropTypes from "prop-types";
import React from "react";

const Icons = ({ children, name, number }) => {
  return (
    <div className="mr-8 lg:mr-0">
      <div className="flex items-center text-gray-600 leading-none">
        {children}
        <p className="ml-1 text-xs">{number}</p>
      </div>
      <p className="text-xs leading-tight capitalize">
        {number > 1 ? `${name}s` : `${name}`}
      </p>
    </div>
  );
};

Icons.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};
export default Icons;
