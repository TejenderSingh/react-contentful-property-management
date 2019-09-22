import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import Form from "./Form";
import Info from "./Info";

const InfoAndFormContainer = () => {
  const { darkMode } = useContext(ThemeContext);
  const classes = darkMode
    ? "lg:flex mt-6 bg-gray-900"
    : "lg:flex mt-6 bg-gray-300";
  return (
    <div className={`${classes}`}>
      <Info />
      <Form />
    </div>
  );
};

export default InfoAndFormContainer;
