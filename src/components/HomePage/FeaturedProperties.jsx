import React, { Component } from "react";
import { PropertyContext } from "../../PropertyContext";
import CardsContainer from "../CardsContainer";
import PropertyCard from "../Globals/PropertyCard";
import Title from "../Globals/Title";
import Loading from "../Loading";

class FeaturedRooms extends Component {
  static contextType = PropertyContext;
  render() {
    let { featuredProperties: properties, loading } = this.context;
    properties = properties.map(property => {
      return <PropertyCard key={property.id} pro={property} />;
    });
    return (
      <>
        <div className="py-12">
          <Title title="Featured Rooms" />
          {loading ? (
            <Loading />
          ) : (
            <CardsContainer>{properties}</CardsContainer>
          )}
        </div>
      </>
    );
  }
}

export default FeaturedRooms;
