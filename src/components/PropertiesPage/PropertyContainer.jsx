import React, { useEffect } from "react";
import { withPropertyConsumer } from "../../PropertyContext";
import Loading from "../Loading";
import PropertyFilter from "./PropertyFilter";
import PropertyList from "./PropertyList";

function PropertyContainer({ context }) {
  const { loading, sortedProperties, properties, resetPros } = context;
  useEffect(() => resetPros(), [resetPros]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pt-8 pb-12">
      <PropertyFilter pros={properties} />
      <PropertyList pros={sortedProperties} />
    </div>
  );
}

export default withPropertyConsumer(PropertyContainer);
