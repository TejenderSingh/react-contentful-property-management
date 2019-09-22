import React, { useContext } from "react";
import ThemeContext from "../../../src/ThemeContext";
import commercial from "../../images/commercial.jpg";
import propertyManagement from "../../images/property-management.jpg";
import residential from "../../images/room-1.jpeg";
import CardsContainer from "../CardsContainer";
import Title from "../Globals/Title";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;
  return (
    <>
      <div className={`${theme.sectionBg} py-12`}>
        <Title title="Services" />
        <CardsContainer>
          <ServiceCard
            title="Residential"
            borderColor="teal"
            img={residential}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corporis vel excepturi facilis adipisci,caecati nesciunt eum. Alias esse veniam quam, eius enim optio?"
          />
          <ServiceCard
            title="Commercial"
            borderColor="indigo"
            img={commercial}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corporis vel excepturi facilis adipisci, doloremque nisi sed pariatur reiciendis. Corrupti obcaecati nesciunt eum. Alias esse veniam quam, eius enim optio?"
          />
          <ServiceCard
            title="Property Management"
            borderColor="yellow"
            img={propertyManagement}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corporis vel excepturi facilis adipisci, doloremque nisi sed pariatur reiciendis"
          />
        </CardsContainer>
      </div>
    </>
  );
};

export default Services;
