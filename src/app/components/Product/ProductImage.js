import React from "react";

function ProductImage(props) {
  console.log("props.image");
  console.log(props.image);
  return (
    <div>
      <img
        src={props.image}
        className="h-[400px] w-[320px] border-r-2 border-gray-500 pr-4"
      />
    </div>
  );
}

export default ProductImage;
