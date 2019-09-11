import React from "react";

const Title = ({ title }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 leading-none text-center">
        {title}
      </h1>
    </div>
  );
};

export default Title;
