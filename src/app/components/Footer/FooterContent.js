import React from "react";

function FooterContent() {
  return (
    <div className="text-black m-2 flex flex-wrap flex-col items-center justify-center sm:flex-row md:justify-evenly lg:py-12">
      <div className="pb-1">
        <p className="font-bold sm:text-xl lg:text-2xl flex justify-center my-4">
          Always there when you need it the most <br />
          Your GIFTLAND
        </p>
      </div>
      <div className="flex flex-row ">
        <div className="flex mr-8 flex-col justify-center">
          <p>
            Shopping center and hotel Vema
            <br />
            Visoko
            <br />
            +387 61 399 995
          </p>
        </div>
        <div className="flex flex-col">
          <p>info@giftland.ba</p>
          <div>
            <i className="fa-brands fa-1x fa-instagram pr-1"></i>
            giftland_ba
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterContent;
