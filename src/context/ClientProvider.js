import React from "react";
import axios from "axios";
import { API } from "../helpers/const";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";

export const ClientContext = React.createContext();

let cart = JSON.parse(sessionStorage.getItem("cart"));

const Init_State = {
  products: null,
  productsCount: cart ? cart.products.length : 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CLIENT_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_AND_DELETE_PRODUCT_IN_CART":
      return { ...state, productsCount: action.payload };
    default:
      return state;
  }
};

const ClientProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, Init_State);

  // ! Read

  const getClientProducts = async () => {
    try {
      let response = await axios(API);
      let action = {
        type: "GET_CLIENT_PRODUCTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const addAndDeleteProductInCard = (product) => {
    let cart = JSON.parse(sessionStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let cartProduct = {
      product: product,
      count: 1,
      subPrice: 0,
    };

    cartProduct.subPrice = calcSubPrice(cartProduct);

    let check = cart.products.find((item) => {
      return item.product.id === product.id;
    });

    // console.log(check);

    if (!check) {
      cart.products.push(cartProduct);
    } else {
      cart.products = cart.products.filter((item) => {
        return item.product.id !== product.id;
      });
    }

    cart.totalPrice = calcTotalPrice(cart.products);
    sessionStorage.setItem("cart", JSON.stringify(cart));

    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };

    dispatch(action);
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }

    let check = cart.products.find((item) => {
      return item.product.id === id;
    });

    if (!check) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <ClientContext.Provider
      value={{
        getClientProducts,
        addAndDeleteProductInCard,
        checkProductInCart,
        products: state.products,
        productsCount: state.productsCount,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
