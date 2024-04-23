import React from "react";
<time datetime="2016-10-25" suppressHydrationWarning />;

import "./Footer.css";
import Logo from "../UI/Logo";
import FooterContent from "./FooterContent";
import FooterCopyright from "./FooterCopyright";

function Footer() {
  return (
    <div suppressHydrationWarning={true} className=" bg-gray-200">
      <div className="flex justify-center items-center p-2 lg:p-20 mix-blend-difference">
        <Logo />
      </div>
      <FooterContent />
      <FooterCopyright />
    </div>
  );
}

export default Footer;
