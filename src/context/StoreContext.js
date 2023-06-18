import React, { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../api/product";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [wishList, setWishList] = useState([]);

  const addToWishList = (product) => {
    const existingItemIndex = wishList.findIndex(
      (item) => item._id === product._id
    );
    if (existingItemIndex >= 0) {
      console.log("Already Added");
    } else {
      setWishList([...wishList, product]);
    }
  };

  const removeItemWishList = (item) => {
    const updatedWishList = wishList.filter(
      (product) => product._id !== item._id
    );
    setWishList(updatedWishList);
  };

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item._id === product._id);
    if (existingItemIndex >= 0) {
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setTotal(total + product.price);
    }
  };

  const incrQuan = (item) => {
    const updatedCart = cart.map((product) =>
      product._id === item._id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
    setTotal(total + item.price);
  };

  const decrQuan = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cart.map((product) =>
        product._id === item._id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      setCart(updatedCart);
      setTotal(total - item.price);
    }
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((product) => product._id !== item._id);
    setCart(updatedCart);
    setTotal(total - item.price * item.quantity);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const store = {
    cart,
    total,
    wishList,
    addToCart,
    incrQuan,
    decrQuan,
    removeItem,
    clearCart,
    removeItemWishList,
    addToWishList,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
