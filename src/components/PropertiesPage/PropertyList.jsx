import PropTypes from "prop-types";
import React from "react";
import CardsContainer from "../CardsContainer";
import PropertyCard from "../Globals/PropertyCard";
import NoSearchResults from "../NoSearchResults";

const PropertyList = ({ pros }) => {
  if (!pros.length) {
    return <NoSearchResults />;
  }
  return (
    <CardsContainer>
      {pros.map(pro => {
        return <PropertyCard key={pro.id} pro={pro} />;
      })}
    </CardsContainer>
  );
};

PropertyList.propTypes = {
  pros: PropTypes.array.isRequired
};
export default PropertyList;
