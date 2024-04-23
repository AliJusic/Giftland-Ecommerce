import React from "react";

function ProductSpec(props) {
  // const addToCartHandler = () => {
  //   addItemToCart({});
  // };
  return (
    <div className="flex flex-col justify-center xl:w-1/2  flex-wrap pl-6 text-lg">
      <div>
        <h1 className="font-bold text-2xl mb-2 place-self-start">
          {props.title}
        </h1>
        <h3 className="font-bold text-xl mb-2">{props.price} KM</h3>
      </div>
      <div className="my-4">
        Display:props.display inches
        <br />
        Storage:props.storage GB
        <br />
        RAM:props.ram GB
        <br />
        Camera:props.camera <br />
        Chipset:props.chipset <br />
      </div>
      <div className="flex gap-4 items-stretch pt-2">
        <button className="bg-black hover:bg-red-900 duration-300 rounded text-white py-1 px-11">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductSpec;
