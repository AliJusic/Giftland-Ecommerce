import React from "react";
import ProductImage from "./ProductImage";

function ProductImages(props) {
  return (
    <div className="flex flex-row xl:w-1/2 justify-end">
      {/* <ProdCarousel /> */}
      <ProductImage image={props.image} />
    </div>
  );
}

export default ProductImages;
