import React, { useContext } from "react";
import { MdBrightness3, MdWbSunny } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logoDark from "../../../images/logo-dark-tp.png";
import logoLight from "../../../images/logo-light.png";
import ThemeContext from "../../../ThemeContext";
import SocialIcons from "../../SocialIcons";
import HamburgerIcon from "../MobileNav/HamburgerIcon";
import NavItem from "./NavItem";

const Navbar = () => {
  const { darkMode, light, dark, toggleMode } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;

  return (
    <div className={`${theme.bg} fixed w-full z-20 shadow-md main-nav`}>
      <div className="flex items-center justify-between py-3 md:py-0 px-4 container m-auto">
        <div className={`md:hidden`}>
          <HamburgerIcon />
        </div>
        <NavLink to="/" className={`flex items-center`}>
          <div style={{ width: "130px", height: "50px" }}>
            {darkMode ? (
              <img src={logoDark} alt="The Lux" />
            ) : (
              <img src={logoLight} alt="The Lux" />
            )}
          </div>
        </NavLink>
        <NavItem
          navClasses="hidden md:block"
          ulClasses="m-0 p-0"
          pd="1.6rem"
          linkClasses={`${theme.fg} hover:${theme.hoverBg} hover:${theme.hoverText} px-6 font-semibold`}
        />
        <div className="flex items-ceneter">
          <SocialIcons />
          <div
            className={`cursor-pointer ml-2 text-2xl flex items-center`}
            onClick={toggleMode}
          >
            {darkMode ? (
              <span className="text-orange-400">
                <MdWbSunny />
              </span>
            ) : (
              <span
                className={`text-purple-600`}
                style={{ transform: "rotate(135deg)" }}
              >
                <MdBrightness3 />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
