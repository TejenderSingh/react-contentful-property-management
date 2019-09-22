import React, { useContext } from "react";
import ThemeContext from "../../../ThemeContext";

const Footer = () => {
  const { darkMode, dark, light } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;

  return (
    <div className={`${theme.bg} ${theme.fg}`}>
      <div className={`container mx-auto py-4 px-4 flex justify-between`}>
        <div className="text-sm">copyright &copy; 2019</div>
        <div className="text-sm">All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
