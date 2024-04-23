"use client";

import React from "react";

import Logo from "../UI/Logo";
import ShopButtons from "./ShopButtons";
import "./Shop.css";
import ShopCategories from "./ShopCategories";
import SearchBar from "../UI/SearchBar";
// import useStateCon

function ShopNavBar() {
  return (
    <div className="border-b-2 border-solid border-black bg-white flex flex-col">
      <div className="flex flex-col sm:flex-row lg:gap-10 w-full 3xl:w-[1400px] mx-auto pb-0 justify-center lg:justify-between items-center ">
        <div className=" mix-blend-difference ">
          <Logo />
        </div>
        <SearchBar />
      </div>
      <div className="flex flex-wrap flex-row justify-between items-center w-full 3xl:w-[1400px] mx-auto pb-2">
        <ShopCategories />
        <ShopButtons />
      </div>
    </div>
  );
}

export default ShopNavBar;
