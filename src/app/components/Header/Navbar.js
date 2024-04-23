import React from "react";

import Logo from "../UI/Logo";
import NavItem from "./Navitem";
import "./Header.css";

const Navbar = () => {
  return (
    <div className="navbar flex flex-col items-center justify-center lg:flex-row lg:justify-around align-center">
      <Logo />
      <NavItem />
    </div>
  );
};

export default Navbar;
