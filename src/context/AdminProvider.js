import React from "react";
import axios from "axios";
import { API } from "../helpers/const";

export const AdminContext = React.createContext();

const Init_State = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const AdminProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, Init_State);

  // ! Create

  const addProduct = async (product) => {
    try {
      await axios.post(API, { ...product, price: +product.price });
    } catch (error) {
      console.log(error);
    }
  };

  // ! Read

  return (
    <AdminContext.Provider value={{ addProduct }}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
