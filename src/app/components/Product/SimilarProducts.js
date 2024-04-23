import React from "react";
import ShopItem from "../ShopItems/ShopItem";
import { client } from "@/app/lib/functions";
import { urlForImage } from "../../../../sanity/lib/image";
import { getProducts } from "@/app/lib/functions";

export async function SimilarProducts(param) {
  // const paths = products.map((product) => ({
  //   params: {},
  // }));
  // return {
  //   paths,
  //   fallback: "blocking",
  // };
  const products = await getProducts(param.category);
  return (
    <div className="flex flex-col justify-center items-center mx-auto border-t-2 border-gray-500 flex-wrap">
      {/* <ShopItem name={phone.name} price={phone.price} /> */}
      <h1 className="mt-4 text-xl">Similar Products</h1>
      <div className="flex justify-center gap-12 mx-auto flex-wrap">
        {products.map((product, index) => {
          return (
            <div key={index}>
              <ShopItem
                name={product.name}
                price={product.price}
                imageUrl={urlForImage(product.image[0])}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
