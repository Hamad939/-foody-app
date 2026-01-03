import React, { useState } from "react";
import { useContext } from "react";
import { cartData } from "./cartContext";
import foods from "./data";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import {
  TrashIcon,
  ArrowLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const AddToCart = () => {
  const navigate = useNavigate();
  const { cart, setCart, removeFromCart } = useContext(cartData);

  const incQty = (id) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.id == id ? { ...item, qty: item.qty + 1 } : item
      );

      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const decQty = (id) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.id == id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item
      );
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const grandTotal = () =>
    cart.reduce((sum, item) => {
      return sum + item.qty * item.price;
    }, 0);

  return (
    <div>
      <div className="cart  flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap  ">
        <div className="items">
          <div className=" sticky top-18 bg-white  flex gap-2.5">
            {" "}
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              <ArrowLeftIcon className="w-10 h-9 " />
            </button>{" "}
            <h1 className="text-4xl font-bold">CART</h1>
          </div>{" "}
          {cart.length == 0 ? (
            <>
              {" "}
              <p className="text-center text-2xl font-medium ">
                {" "}
                Cart is empty
              </p>
            </>
          ) : (
            cart.map((item) => {
              return (
                <div className="item">
                  <div className="detail">
                    <div className="img  ">
                      <img className="" src={item.image} alt="" />
                    </div>
                    <div className="prize">
                      <h1 className="text-2xl">{item.name}</h1>
                      <span className="text-2xl text-orange-500">
                        RS:{item.price}
                      </span>
                    </div>
                  </div>
                  <div className="count">
                    <button
                      onClick={() => {
                        item.qty > 1
                          ? decQty(item.id)
                          : removeFromCart(item.id);
                      }}
                      className={
                        item.qty > 1
                          ? "px-3 text-2xl  rounded-[50%] bg-amber-500 hover:cursor-pointer"
                          : "bg-red-500 p-1 rounded-[50%] hover:cursor-pointer "
                      }
                    >
                      {item.qty > 1 ? (
                        "-"
                      ) : (
                        <TrashIcon className="w-5 h-6  text-white" />
                      )}
                    </button>
                    {item.qty}
                    <button
                      onClick={() => {
                        incQty(item.id);
                      }}
                      className="px-2.5 text-2xl rounded-[50%] bg-amber-500 hover:cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="total flex flex-col gap-3 ">
          <h1 className="sticky top-18 bg-white text-4xl font-bold   ">
            Total
          </h1>
          {cart.length == 0 ? (
            <p>No items to Calculate</p>
          ) : (
            <div className="calculation min-h-40    ">
              {cart.map((item) => {
                return (
                  <div className="flex justify-between">
                    <div>
                      {item.qty} x {item.name}
                    </div>
                    <div>{item.qty * item.price}</div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="total flex justify-between text-3xl mt-3 border-t-2 py-1 font-medium">
            <h1>Total Payment</h1> <h1>{grandTotal()}</h1>
          </div>
          <div className="pay">
            <button className="bg-amber-400 w-full p-2 rounded-lg active:scale-95 hover:bg-amber-200 ">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
