import React, { useContext } from "react";
import { SideNavContext } from "../../../SideNavContext";

const Backdrop = () => {
  const { closeSideNav } = useContext(SideNavContext);
  return (
    <div
      style={{ background: "rgba(0,0,0, 0.5)" }}
      className={`h-screen fixed w-full z-20 cursor-pointer block md:hidden`}
      onClick={closeSideNav}
    />
  );
};

export default Backdrop;
