import React from "react";

function ProductDesc({ description }) {
  return (
    <div className="flex w-full flex-col items-center mt-12">
      <h3 className="text-xl font-bold">About this item</h3>
      <p className=" self-start">{description}</p>
    </div>
  );
}

export default ProductDesc;
