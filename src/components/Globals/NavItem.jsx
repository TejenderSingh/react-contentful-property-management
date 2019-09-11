import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, rt }) => {
  return (
    <NavLink
      to={rt}
      exact
      className="ml-10 font-semibold py-6 border-b-2 border-solid border-transparent hover:border-teal-500"
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
