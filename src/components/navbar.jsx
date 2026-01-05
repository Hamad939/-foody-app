import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginData } from "./authLogin";
import { useContext } from "react";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/solid";

import { cartData } from "./cartContext";
const Navbar = () => {
  const { cart, setCart } = useContext(cartData);
  const [userName, setUserName] = useContext(loginData);
  const [emptyCartAlert, setEmptyCartAlert] = useState(false);
  const [logOutAlert, setLogOutAlert] = useState(false);

  const emptyCartHandler = () => {
    if (!cart.length > 0) {
      setEmptyCartAlert(true);
      setTimeout(() => {
        setEmptyCartAlert(false);
      }, 2000);
    }
  };

  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const logout = () => {
    setUserName("");
    localStorage.removeItem("Name");
    setCart([]);
  };
  const handleClick = () => {
    if (userName) {
      setLogOutAlert(true);
    } else {
      login();
    }
  };
  return (
    <div>
      <nav className="flex justify-between items-center font-bold font-serif px-4 py-4 fixed top-0  w-full bg-white   ">
        <h1 className="text-4xl ">Foody</h1>
        <div className="menu flex items-center gap-2 sm:gap-4">
          <button
            className="sm:bg-amber-400 flex sm:gap-2 justify-center border-0 items-center font-bold font-serif   sm:w-full sm:px-10 py-4  rounded-xl  hover:cursor-pointer hover:bg-slate-600"
            onClick={() => {
              cart.length > 0 ? navigate("/addToCart") : emptyCartHandler();
            }}
          >
            <span className="hidden sm:block md:block lg:block">Cart</span>{" "}
            {<ShoppingCartIcon className=" w-7 h-7 sm:w-5 sm:h-5" />}
            {cart.length >= 0 && (
              <span
                className={` ${
                  userName ? "block" : "hidden lg:block"
                }    absolute top-4.5 right-22 sm:top-4.5 sm:right-33.5 border-2 border-amber-50      bg-red-600 text-white rounded-[50%] w-5 h-5 text-white-500 text-sm`}
              >
                {cart.length}
              </span>
            )}
          </button>
          <button
            to="/login.jsx"
            className="bg-amber-400 flex justify-center items-center text-sm  w-fit px-2 py-2 sm:w-28  sm:px-10 sm:py-4 border-0 font-bold font-serif rounded-xl  hover:cursor-pointer hover:bg-slate-600"
            onClick={handleClick}
          >
            {" "}
            {userName ? (
              <>
                {" "}
                <span className=" ">Logout</span>
              </>
            ) : (
              <span>Login</span>
            )}
          </button>
        </div>
      </nav>

      {emptyCartAlert && (
        <div className="flex justify-center">
          <div className="fixed top-3 w-[80%] lg:w-[40%] flex justify-center items-center z-50 bg-red-500 text-white p-3">
            <p>Your Cart is Empty</p>
          </div>
        </div>
      )}
      {logOutAlert && (
        <div className="flex justify-center  ">
          <div className="fixed top-20 right-4 p-2 z-50 h-32 bg-red-600 flex flex-col gap-2 justify-center items-center  ">
            <p className="text-white">Are you sure you want to logOut</p>
            <button
              className="w-[80%] bg-white text-red-500 hover:cursor-pointer"
              onClick={() => {
                logout();
                setLogOutAlert(false);
              }}
            >
              Yes
            </button>
            <button
              className="w-[80%] bg-white text-red-500 hover:cursor-pointer"
              onClick={() => {
                setLogOutAlert(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
