import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import { SideNavContext } from "../../../SideNavContext";
import ThemeContext from "../../../ThemeContext";
import NavItem from "../Navbar/NavItem";

const SideNav = () => {
  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;
  const { navOpen, closeSideNav } = useContext(SideNavContext);
  let classes = "side-nav";
  if (navOpen) {
    classes = "side-nav open";
  }
  return (
    <div className={`relative block md:hidden`}>
      <div className={`${classes} ${theme.bg}`}>
        <div style={{ position: "absolute", top: 20, left: 20 }}>
          <span
            className={`text-4xl ${theme.fg} hover:text-indigo-600 cursor-pointer`}
            onClick={closeSideNav}
            style={{ transition: " all .2s ease-in-out" }}
          >
            <FiX />
          </span>
        </div>
        <NavItem
          ulClasses="flex flex-col text-lg font-semibold"
          linkClasses={`${theme.fg} hover:text-indigo-500 text-xl my-4 font-semibold`}
        />
      </div>
    </div>
  );
};

export default SideNav;
