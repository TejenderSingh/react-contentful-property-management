import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import SocialIcons from "../../SocialIcons";
import HamburgerIcon from "../MobileNav/HamburgerIcon";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="bg-white fixed w-full z-20 shadow-md main-nav">
      <div className="flex items-center justify-between py-3 md:py-0 px-4 container m-auto">
        <div className={`md:hidden`}>
          <HamburgerIcon />
        </div>
        <NavLink to="/" className={`flex items-center`}>
          <img src={logo} alt="The Lux" />
        </NavLink>
        <NavItem
          navClasses="hidden md:block"
          ulClasses="m-0 p-0"
          pd="1.6rem"
          linkClasses="text-gray-800 px-6 font-semibold hover:bg-gray-800 hover:text-white"
        />
        <div className="flex">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
