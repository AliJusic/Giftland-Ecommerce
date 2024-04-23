import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-4xl  text-white h-4/5">
      <h1 className=" text-center">Meeting your technology needs</h1>
      <button className="bg-black hover:bg-transparent duration-300 hover:border rounded text-3xl text-white py-1 px-11 mt-4">
        <Link href="/shop">SHOP</Link>
      </button>
    </div>
  );
}

export default Hero;
