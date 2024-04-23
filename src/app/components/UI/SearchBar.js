"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";

import { useDebouncedCallback } from "use-debounce";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  // const [products, setProducts] = useState();

  // const getSubmit = async (e) => {
  //   e.preventDefault();
  //   if (products !== "") {
  //     try {
  //       const searchedProducts = await getSearch(products);
  //       console.log(searchedProducts);
  //       onSearch(searchedProducts);
  //     } catch {
  //       console.log("jbg");
  //     }
  //   }
  // };
  // const getInput = (event) => {
  //   setProducts(event.target.value);
  // };

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="pt-2 relative  text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 lg:w-[500px] px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search for products"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        <FaSearch />
      </button>
    </div>
  );
}
