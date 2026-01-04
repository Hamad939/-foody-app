import React, { useState } from "react";
import { useContext } from "react";
import { cartData } from "./cartContext";
import foods from "./data";
import "./card.css";
import { loginData } from "./authLogin";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Cart = () => {
  const { addToCart, popUp, setPopUp } = useContext(cartData);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [userName] = useContext(loginData);

  const addToCartHandler = (food) => {
    if (!userName) {
      setShowLoginAlert(true);
      setTimeout(() => {
        setShowLoginAlert(false);
      }, 3000);
    } else {
      addToCart(food);
    }
  };

  return (
    <>
      <div className="cards ">
        {foods.map((food) => {
          return (
            <>
              <div className=" card w-[80%]  sm:w-1/2 md:w-[30%] lg:w-[22%]   ">
                <div className="image ">
                  <img className="" src={food.image} alt="" />
                </div>
                <div className="content h-[]">
                  <div className=" h-[60%]  overflow-hidden">
                    <h1 className="text-2xl text-center">{food.name}</h1>
                    <p className="line-clamp-3 md:line-clamp-2 ">
                      {food.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-around gap-2 w-full">
                    <span className="text-orange-400 text-2xl font-bold ">
                      RS:{food.price}{" "}
                    </span>
                    <span className="bg-amber-600 text-white px-1.5 py-0.3  wrap-break-word sm:p-1.5 rounded-sm ">
                      Starting Price
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      addToCartHandler(food);
                    }}
                    className="bg-orange-400 px-2.5 py-2 w-full hover:bg-orange-200 cursor-pointer ease-in-out  "
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="flex justify-center ">
        {" "}
        {popUp.visible && (
          <div className="flex items-center  p-2 gap-3 text-white  justify-center  fixed top-3.5   z-50  bg-green-500 w-[40%] sm:h-20 sm:w-[15%] ">
            <span className="rounded-full min-w-8 h-8 bg-white flex justify-center items-center">
              <CheckIcon className="w-6 h-6 text-green-500" />
            </span>{" "}
            <p>{popUp.message}</p>
          </div>
        )}
        {showLoginAlert && (
          <div className="flex items-center  p-2 gap-1 text-white  justify-center  fixed top-3   z-50  bg-red-500 h-20 w-[30%] sm:h-20 sm:w-[15%]  ">
            <span className="rounded-full min-w-8 h-8 bg-white flex justify-center items-center ">
              <XMarkIcon className="w-6 h-6 text-red-500 " />
            </span>{" "}
            Log in to continue
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
