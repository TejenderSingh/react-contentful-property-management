import React from "react";
import Form from "./Form";
import Info from "./Info";

const InfoAndFormContainer = () => {
  return (
    <div className="lg:flex mt-6 bg-gray-300">
      <Info />
      <Form />
    </div>
  );
};

export default InfoAndFormContainer;
