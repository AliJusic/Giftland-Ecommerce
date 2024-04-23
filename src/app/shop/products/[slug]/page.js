import React from "react";
import ProductSpec from "../../../components/Product/ProductSpec";
import ProductDesc from "../../../components/Product/ProductDesc";
import { client } from "../../../../../sanity/lib/client";
import { urlForImage } from "../../../../../sanity/lib/image";
import ProductImages from "@/app/components/Product/ProductImages";
import { SimilarProducts } from "@/app/components/Product/SimilarProducts";
import { getProducts } from "@/app/lib/functions";
async function Product({ params }) {
  // const d = slug;
  const query = `*[slug.current == "${params.slug}"][0]`;
  const product = await client.fetch(query);
  // const similarProductQuery = `*[_type == "phone"],`;

  return (
    <div>
      <div className=" flex flex-col justify-center items-center m-10 lg:m-20">
        <div className="flex flex-col items-center gap-4 lg:flex-row justify-center">
          <ProductImages image={urlForImage(product.image[0])} />
          <ProductSpec
            title={product.name}
            price={product.price}
            description={product.details}
          />
        </div>
        {/* <ProductDesc description={product.details} /> */}
      </div>
      <SimilarProducts category={product._type} />
    </div>
  );
}

// export const getStaticProps = async ({ params: { slug } }) => {
//   const query = `*[_slug.current == "${slug}"][0]`;
//   // const productsQuery =
//   const product = await client.fetch(query);

//   return {
//     props: { product },
//   };
// };

export default Product;
