import React from "react";
import About from "../components/AboutPage/About";
import ScrollToTopOnMount from "../components/Globals/ScrollToTop";

const AboutPage = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <About />;
    </>
  );
};

export default AboutPage;
