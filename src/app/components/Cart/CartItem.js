import React from "react";

export default function CartItem(props) {
  return (
    <div className="rounded-md p-4 flex flex-row bg-blue-gray-100 w-[400px] justify-evenly items-center">
      <img src="./iphone14.png" className="w-[100px]" />
      <div className="flex flex-col items-center ">
        <h1 className="text-xl">{props.name}</h1>
        <h1 className="text-lg font-bold">{props.price} BAM</h1>
      </div>
    </div>
  );
}
