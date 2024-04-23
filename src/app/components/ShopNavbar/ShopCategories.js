"use client";
import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function ShopCategories() {
  const searchParams = useSearchParams();
  const pathname = "/shop";
  const { replace } = useRouter();

  const handleCategories = (term) => {
    const params = new URLSearchParams(searchParams);
    term;
    if (term) {
      params.set("category", term.toLowerCase());
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex flex-wrap lg:flex-row justify-start items-start lg:pl-9 lg:gap-2 2xl:w-[1400px] ">
      <div className="flex flex-wrap lg:flex-row items-start gap-4 text-black">
        <Button
          className="bg-white text-black focus:bg-blue-100"
          onClick={(e) => {
            handleCategories(e.currentTarget.textContent);
          }}
        >
          Phones
        </Button>
        <Button
          className="bg-white text-black focus:bg-blue-100"
          onClick={(e) => {
            handleCategories(e.currentTarget.textContent);
          }}
        >
          Tablets
        </Button>
        <Button
          className="bg-white text-black focus:bg-blue-100"
          onClick={(e) => {
            handleCategories(e.currentTarget.textContent);
          }}
        >
          Accessories
        </Button>
        {/* <Menu allowHover={true}>
          <MenuHandler className="lg:w-[135px] rounded-none shadow-none bg-white text-black text-md ">
            <Button
              onClick={(e) => {
                handleCategories(e.currentTarget.textContent);
              }}
            >
              Phones
            </Button>
          </MenuHandler>
          <MenuList className="lg:w-[200px]">
            <MenuItem> iPhone</MenuItem>
            <MenuItem>Samsung</MenuItem>
            <MenuItem>Xiaomi</MenuItem>
          </MenuList>
        </Menu> */}
      </div>
      {/* <div>
        <Menu allowHover={true}>
          <MenuHandler className="lg:w-[135px] rounded-none shadow-none bg-white text-black text-md">
            <Button
              onClick={(e) => {
                handleCategories(e.currentTarget.textContent);
              }}
            >
              Tablets
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>iPad</MenuItem>
            <MenuItem>Samsung</MenuItem>
            <MenuItem>Xiaomi</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div>
        <Menu allowHover={true}>
          <MenuHandler className="lg:w-[140x] rounded-none bg-white text-black text-md shadow-none">
            <Button
              onClick={(e) => {
                handleCategories(e.currentTarget.textContent);
              }}
            >
              Accessories
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Chargers</MenuItem>
            <MenuItem>Phone Cases</MenuItem>
            <MenuItem>Headphones</MenuItem>
          </MenuList>
        </Menu>
      </div> */}
    </div>
  );
  //   <div className="flex justify-start pl-9 mx-auto gap-11 pb-5 2xl:lg:w-[1400px]">
  //     <div>Phones</div>
  //     <div>Tablets</div>
  //     <div>Accessories</div>
  //     <div>Appliances</div>
  //   </div>
  // );
}
