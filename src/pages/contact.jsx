import React from "react";
import InfoAndFormContainer from "../components/ContactPage/InfoAndFormContainer";
import Map from "../components/ContactPage/Map";
import Title from "../components/Globals/Title";

const Contact = () => {
  return (
    <div className="container mx-auto py-12">
      <Title title="Contact us" />
      <InfoAndFormContainer />
      <Map />
    </div>
  );
};

export default Contact;
