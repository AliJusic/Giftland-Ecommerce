// "use client";

// import React, { useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import { client, getSearch } from "@/app/lib/functions";
import { urlForImage } from "../../../../sanity/lib/image";
import { getProducts } from "@/app/lib/functions";
import Link from "next/link";

async function ShopItems({ query, category }) {
  const products =
    query !== ""
      ? await getSearch(query)
      : category !== ""
      ? await getProducts(category)
      : await getProducts("phones");

  // const products3 = await getProducts("phones");
  // const products2 =
  //   category !== "" ? await getProducts(category) : await getProducts("phone");

  // const products = await getSearch(query);
  // const [products, setProducts] = useState([]);
  // s;
  // useEffect(() => {
  //   const getProduct = async () => {
  //     const response = await getProducts("phone");
  //     setProducts(response);
  //   };
  //   getProduct();
  // }, []);
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 items-end justify-items-center w-11/12 mx-auto">
      {/* <ShopItem name={phone.name} price={phone.price} /> */}
      <>
        {products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div key={index}>
                <ShopItem
                  name={product.name}
                  price={product.price}
                  imageUrl={urlForImage(product.image[0])}
                  route={`/shop/products/${product.slug.current}`}
                />
              </div>
            );
          })
        ) : (
          <div className="text-2xl font-bold mt-2">
            No Products were found...
          </div>
        )}
      </>
    </div>
  );
}

// export async function getProducts() {
//   const products = await client.fetch(`*[_type == "Product"]`);

//   return {
//     props: {
//       products,
//     },
//   };
// }

export default ShopItems;
