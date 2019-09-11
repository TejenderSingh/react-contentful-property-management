import React from "react";
import loading from "../images/loading.png";
const Loading = () => {
  return (
    <div className="container mx-auto w-full max-w-md py-8 lg:w-2/5 bg-indigo-200">
      <img src={loading} alt="Loading" className="w-full" />
    </div>
  );
};

export default Loading;
