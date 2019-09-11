import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="bg-white fixed w-full z-20 shadow-md">
      <div className="flex items-center justify-between py-6 px-4 container m-auto">
        <div className="">Logo here</div>
        <nav>
          <NavItem name="Home" rt="/" />
          <NavItem name="About" rt="/about" />
          <NavItem name="Properties" rt="/properties" />
          <NavItem name="Contact" rt="/contact" />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
