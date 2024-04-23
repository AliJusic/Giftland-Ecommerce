import React from "react";

export default function Filtering() {
  return (
    <div>
      <span>
        Category{" "}
        <select className="border-gray-400 border-2 mb-1 rounded-md">
          <option>Phones</option>
          <option>Tablets</option>
          <option>Accessories</option>
          <option>Appliances</option>
        </select>
      </span>
    </div>
  );
}
