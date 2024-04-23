"use client";

import React from "react";
import Link from "next/link";
import useCartStore from "@/app/context/CartContext";
// import { useContext } from "react";
// import CartContext from "@/app/context/CartContext";
// import Shop from "../../shop/page";
// import { FaHeart } from "react-icons/fa";
// import product from "../../../../sanity/product";

function ShopItem(product) {
  // const { addItemToCart } = useContext(CartContext);
  // const addToCartHandler = () => {
  //   addItemToCart({
  //     product: product._id,
  //     name: product.name,
  //     price: product.price,
  //     image: product.image,
  //   });
  // };

  // const { addItem } = useCartStore();
  // const handleAddToCart = () => {
  //   addItem({ id: "123", name: "Product name", price: "9.9", quantity: 1 });
  // };

  return (
    <div className="flex flex-col my-12">
      <Link href={product.route || "/"}>
        <div className=" hover:border-gray-400 hover:rounded-sm hover:border-solid hover:border-2 hover:duration-75 border-r-2 border-solid border-bray-600 sm:w-[250px] sm:h-[450px] flex flex-col items-center justify-between">
          <div className="">
            <img
              src={product.imageUrl}
              className="object-fit w-[250px]"
              alt="aaaa"
            />
          </div>
          <div className="w-full flex justify-center flex-col items-center mb-2">
            <h1 className="font-bold">{product.name}</h1>
            <h1 className="  p-1 text-black text-xl mix text-center">
              {product.price} BAM
            </h1>
          </div>
        </div>
      </Link>

      <button className="mt-2 bg-black text-white hover:bg-red-800 rounded-sm p-2">
        Add to cart
      </button>
    </div>
  );
}

export default ShopItem;
