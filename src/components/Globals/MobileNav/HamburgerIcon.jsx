import React, { useContext } from "react";
import { FiAlignLeft } from "react-icons/fi";
import { SideNavContext } from "../../../SideNavContext";

const HamburgerIcon = () => {
  const { toggleSideNav } = useContext(SideNavContext);
  return (
    <FiAlignLeft
      className={`text-gray-800 hover:text-indigo-600 text-3xl cursor-pointer`}
      style={{ transition: " all .2s ease-in-out" }}
      onClick={toggleSideNav}
    ></FiAlignLeft>
  );
};

export default HamburgerIcon;
