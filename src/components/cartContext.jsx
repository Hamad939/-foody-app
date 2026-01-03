import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const cartData = createContext();
const CartContextProvider = (props) => {
  const [popUp, setPopUp] = useState({ visible: false, message: "" });
  const [cart, setCart] = useState(() => {
    const cartData = localStorage.getItem("cartData");
    return cartData ? JSON.parse(cartData) : [];
  });

  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((elem) => elem.id == item.id);
      let updatedCart;
      if (exist) {
        updatedCart = prev.map((elem) =>
          elem.id == item.id ? { ...elem, qty: elem.qty + 1 } : elem
        );
      } else {
        updatedCart = [...prev, { ...item, qty: 1 }];
      }
      localStorage.setItem("cartData", JSON.stringify(updatedCart));

      return updatedCart;
    });
    setPopUp({ visible: true, message: `${item.name} added succesfully` });
    setTimeout(() => {
      setPopUp({ visible: false, message: "" });
    }, 3000);
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updatedCart = prev.filter((item) => item.id !== id);

      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <cartData.Provider
      value={{ cart, setCart, addToCart, removeFromCart, popUp, setPopUp }}
    >
      {props.children}
    </cartData.Provider>
  );
};

export default CartContextProvider;
