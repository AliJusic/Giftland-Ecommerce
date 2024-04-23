"use client";

import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import Link from "next/link";

function CurrentItemList() {
  return (
    <div className="flex flex-col items-center sm:flex-row border-b-2 border-solid border-blue-gray-300 justify-between w-11/12 mx-auto pt-10 mt-10">
      <Link
        href="/shop"
        className="font-bold text-blue-gray-600 hover:text-blue-500 sm:text-2xl pl-8"
      >
        Shop
      </Link>
      <span>
        Sort by{" "}
        <select className="border-gray-400 border-2 mb-1 rounded-md">
          <option>Date added/asc</option>
          <option>Date added/desc</option>
          <option>Name/asc</option>
          <option>Name/desc</option>
          <option>Price/asc</option>
          <option>Price/desc</option>
        </select>
      </span>
    </div>
  );
}

export default CurrentItemList;
