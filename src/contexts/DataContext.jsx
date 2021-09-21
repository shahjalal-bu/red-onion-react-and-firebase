import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
import foodsData from "../data/FoodsData";

const cart = createContext();
const DataContext = ({ children }) => {
  const products = foodsData;
  //use reducer
  const initialState = {
    products: products,
    cart: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <cart.Provider value={{ state, dispatch }}>{children}</cart.Provider>;
};

export default DataContext;

export const CartState = () => {
  return useContext(cart);
};
