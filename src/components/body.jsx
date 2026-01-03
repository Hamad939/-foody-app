import React from "react";
import Cart from "./card";
import "./card.css";
const Body = () => {
  return (
    <>
      <h1 className="text-3xl font-medium ml-8 sm:mt-8 sm:mb-8 ">
        EXPLORE MENU
      </h1>
      <div className="p-4 ">
        <Cart />
      </div>
    </>
  );
};

export default Body;
