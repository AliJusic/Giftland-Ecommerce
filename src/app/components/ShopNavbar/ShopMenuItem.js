import React from "react";

function ShopMenuItem(props) {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl">{props.title}</h1>
      {/* {props.submenu.map((menu, index) => {
        return <Link to={index}>{menu}</Link>;
      })} */}
      {/* <h3>{props.submenu[1].title}</h3> */}
      <h3>Samsung</h3>
      <h3>Xiaomi</h3>
    </div>
  );
}

export default ShopMenuItem;
