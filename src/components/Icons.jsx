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

export default Icons;
