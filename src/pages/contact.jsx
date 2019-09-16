import React from "react";
import InfoAndFormContainer from "../components/ContactPage/InfoAndFormContainer";
import Map from "../components/ContactPage/Map";
import ScrollToTopOnMount from "../components/Globals/ScrollToTop";
import Title from "../components/Globals/Title";

const Contact = () => {
  return (
    <div className="container mx-auto py-12">
      <ScrollToTopOnMount />
      <Title title="Contact Us" />
      <InfoAndFormContainer />
      <Map />
    </div>
  );
};

export default Contact;
