import React from "react";
import CurrentItemList from "./CurrentItemList";
import ShopItems from "../ShopItems/ShopItems";
import Filtering from "./Filtering";
// import { useState, useEffect } from "react";

function ShopMain({ query, category }) {
  return (
    <div className="">
      <CurrentItemList />
      <div className="flex flex-row w-11/12 mx-auto justify-stretch">
        {/* <div>
          <Filtering />
        </div> */}
        <ShopItems query={query} category={category} />
      </div>
    </div>
  );
}

export default ShopMain;
