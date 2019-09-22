import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import Stat from "../Stat";

const HomeAbout = () => {
  const { darkMode, dark, light } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;
  return (
    <div className={`${theme.homeStatBg} ${theme.homeStatFg} py-16 md:py-20`}>
      <div className="container mx-auto px-6 grid grid-columns-8 grid-gap-8 sm:grid-gap-4">
        <Stat title="12" subtitle="Agents" />
        <Stat title="5" subtitle="Management Experts" />
        <Stat title="9+" subtitle="Years of Success" />
        <Stat title="2" subtitle="Award Winning Teams" />
      </div>
    </div>
  );
};

export default HomeAbout;
