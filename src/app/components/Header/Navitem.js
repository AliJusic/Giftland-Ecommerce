import React from "react";
import Link from "next/link";

const NavItem = () => {
  return (
    <div className="flex flex-row justify-center gap-4 md:justify-end sm:gap-5 text-xl sm:text-2xl items-center mt-5 font text-white">
      <Link href="/shop" className="navitems">
        Shop
      </Link>
      {/* <Link href="/signin" className="navitems">
        Sign in
      </Link> */}
      {/* <div className="navitems">Shop</div>
      <div className="navitems">Sign in</div> */}
    </div>
  );
};

export default NavItem;
