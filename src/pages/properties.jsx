import React from "react";
import ScrollToTopOnMount from "../components/Globals/ScrollToTop";
import PropertyContainer from "../components/PropertiesPage/PropertyContainer";
import StyledHero from "../components/StyledHero";
import image from "../images/10.jpg";

const Properties = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <StyledHero img={image} height="60vh" />
      <PropertyContainer />
    </>
  );
};

export default Properties;
