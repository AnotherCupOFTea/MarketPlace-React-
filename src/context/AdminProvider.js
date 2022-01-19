import React from "react";
import axios from "axios";
import { API, APIzakaz } from "../helpers/const";

export const AdminContext = React.createContext();

const Init_State = {
  products: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload }
    case "GET_ZAKAZ" :
      return {...state, zakaz: action.payload}
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

  const getProducts = async () => {
    try {
      let response = await axios(API);

      let action = {
        type: "GET_PRODUCTS",
        payload: response.data,
      };

      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  // ! Delete

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // ! Update

  const saveEditedProduct = async (product) => {
    try {
      await axios.patch(`${API}/${product.id}`, {
        ...product,
        price: +product.price,
      });
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  // Zakazat

  const addZakaz = async (product) => {
    try {
      await axios.post(APIzakaz, { ...product});
    } catch (error) {
      console.log(error);
    }
  };

  const getZakaz = async () => {
    try {
      let response = await axios(APIzakaz);

      let action = {
        type: "GET_ZAKAZ",
        payload: response.data,
      };

      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        addProduct,
        getProducts,
        deleteProduct,
        saveEditedProduct,
        products: state.products,
        addZakaz: addZakaz,
        getZakaz: getZakaz,
        zakaz: state.zakaz,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
