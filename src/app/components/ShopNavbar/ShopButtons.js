"use client";

import React from "react";
import Link from "next/link";

import { IoCartOutline } from "react-icons/io5";

function ShopButtons() {
  return (
    <div className="flex flex-row gap-2 items-center justify-end">
      <Link href="/cart">
        <IoCartOutline className="hover:opacity-30" size={35} />
      </Link>
    </div>
  );
}

export default ShopButtons;
