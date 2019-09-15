import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SideNavContext } from "../../../SideNavContext";

const NavItem = ({ ulClasses, navClasses, linkClasses, pd }) => {
  const { closeSideNav } = useContext(SideNavContext);

  const navbar = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Properties", link: "/properties" },
    { id: 4, name: "Contact", link: "/contact" }
  ];
  return (
    <nav className={`navbar py-6 ${navClasses}`}>
      <ul className={ulClasses}>
        {navbar.map(item => {
          return (
            <NavLink
              key={item.id}
              to={item.link}
              className={linkClasses}
              onClick={closeSideNav}
              style={{ transition: ".2s ease-in-out", padding: `${pd}` }}
              exact
            >
              {item.name}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavItem;
