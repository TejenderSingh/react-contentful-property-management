import React, { useContext } from "react";
import { FiAlignLeft } from "react-icons/fi";
import { SideNavContext } from "../../../SideNavContext";
import ThemeContext from "../../../ThemeContext";

const HamburgerIcon = () => {
  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;
  const { toggleSideNav } = useContext(SideNavContext);
  return (
    <FiAlignLeft
      className={`${theme.fg} hover:text-indigo-600 text-3xl cursor-pointer`}
      style={{ transition: " all .2s ease-in-out" }}
      onClick={toggleSideNav}
    ></FiAlignLeft>
  );
};

export default HamburgerIcon;
