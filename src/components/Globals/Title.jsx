import PropTypes from "prop-types";
import React, { useContext } from "react";
import ThemeContext from "../../../src/ThemeContext";

const Title = ({ title }) => {
  const { darkMode, dark, light } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;
  return (
    <div className="container mx-auto">
      <h1
        className={`text-4xl font-bold ${theme.fgSec} leading-none text-center tracking-wide`}
      >
        {title}
      </h1>
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired
};
export default Title;
