import React, { useContext } from "react";
import empty from "../images/empty.png";
import ThemeContext from "../ThemeContext";

const NoSearchResults = () => {
  const { darkMode, dark, light } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;
  return (
    <div
      className={`container mx-auto text-xl text-center py-8 font-bold ${theme.fg}`}
    >
      <div className="w-full md:w-1/2 lg:w-1/3 h-auto mx-auto px-4 md:px-0">
        <img className="w-full" src={empty} alt="No Results" />
      </div>
      <h3 className="mt-4">
        Unfortunately, no property matched your search criteria
      </h3>
    </div>
  );
};

export default NoSearchResults;
