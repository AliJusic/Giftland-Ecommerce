import React from "react";

import "./Header.css";

import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className="header background">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
