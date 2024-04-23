import React from "react";

import Link from "next/link";

const Logo = () => {
  return (
    <Link name="" href="/">
      <img
        className="newLogo mt-5 logo w-[300px] sm:w-[300px] hover:opacity-20 duration-100"
        src="/logo.png"
      />
    </Link>
  );
};

export default Logo;
