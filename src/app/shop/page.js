import React from "react";
import ShopNavBar from "../components/ShopNavbar/ShopNavbar";
import ShopMenu from "../components/ShopNavbar/ShopMenu";
import ShopMain from "../components/ShopMain/ShopMain";

export default function Shop({ searchParams }) {
  const query = searchParams.query || "";
  const category = searchParams.category || "";

  // const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="flex flex-col">
      {console.log(category)}
      {/* {console.log("Ali")} */}
      <ShopMain query={query} category={category} />
      <ShopMenu />
    </div>
  );
}
