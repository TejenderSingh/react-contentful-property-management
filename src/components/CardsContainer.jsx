import React from "react";

const CardsContainer = ({ children }) => {
  return (
    <div className="container mx-auto">
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gridGap: "2rem",
          justifyItems: "center"
        }}
        className="pt-8 px-4"
      >
        {children}
      </section>
    </div>
  );
};

export default CardsContainer;
