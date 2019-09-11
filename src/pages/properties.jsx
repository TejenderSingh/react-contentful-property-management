import React from "react";
import PropertyContainer from "../components/PropertiesPage/PropertyContainer";
import StyledHero from "../components/StyledHero";
import image from "../images/10.jpg";

const Properties = () => {
  return (
    <>
      <StyledHero img={image} height="60vh" />
      <PropertyContainer />
    </>
  );
};

export default Properties;
