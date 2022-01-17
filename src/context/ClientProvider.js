import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../helpers/const";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";

export const ClientContext = React.createContext();

let cart = JSON.parse(sessionStorage.getItem("cart"));

const Init_State = {
  products: null,
  productsCount: cart ? cart.products.length : 0,
  likeProducts: null,
  modal: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CLIENT_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_AND_DELETE_PRODUCT_IN_CART":
      return { ...state, productsCount: action.payload };

    case "GET_CART":
      return { ...state, cart: action.payload };
    case "GET_MODAL":
      return { ...state, modal: action.payload };
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

  // ! Add/Delete cart product

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

  // ! For the stepen'

  const checkProductInCart = (id) => {
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
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

  // ! GET for cart

  const getCart = async () => {
    let cart = JSON.parse(sessionStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let action = {
      type: "GET_CART",
      payload: cart,
    };
    dispatch(action);
  };

  // ! UPD for count in cart

  const changeCountCartProduct = (value, id) => {
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.count = value;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  // ! Delete in cart

  const deleteProductInCart = (id) => {
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    cart.products = cart.products.filter((item) => {
      return item.product.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    getCart();

    let action = {
      type: "ADD_AND_DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };

    dispatch(action);
  };

  // ! Product Pagination

  // normal

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (state.products) {
      setPosts(state.products);
    }
  }, [state.products]);

  const postsPerPage = 4;
  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalProductsCount = posts.length;
  // pizza

  const [currentPizzaPage, setCurrentPizzaPage] = useState(1);
  const pizzaPosts = posts.filter((item) => {
    return item.category === "Pizza";
  });
  const totalPizzaProductsCount = pizzaPosts.length;
  const indexOfLastPizzaPost = postsPerPage * currentPizzaPage;
  const indexOfFirstPizzaPost = indexOfLastPizzaPost - postsPerPage;
  const currentPizzaPosts = pizzaPosts.slice(
    indexOfFirstPizzaPost,
    indexOfLastPizzaPost
  );

  // snacks

  const [currentSnacksPage, setCurrentSnacksPage] = useState(1);
  const snacksPosts = posts.filter((item) => {
    return item.category === "Snacks";
  });
  const totalSnacksProductsCount = snacksPosts.length;
  const indexOfLastSnacksPost = postsPerPage * currentSnacksPage;
  const indexOfFirstSnacksPost = indexOfLastSnacksPost - postsPerPage;
  const currentSnacksPosts = snacksPosts.slice(
    indexOfFirstSnacksPost,
    indexOfLastSnacksPost
  );

  // desserts

  const [currentDessertsPage, setCurrentDessertsPage] = useState(1);
  const dessertsPosts = posts.filter((item) => {
    return item.category === "Dessert";
  });
  const totalDessertsProductsCount = dessertsPosts.length;
  const indexOfLastDessertsPost = postsPerPage * currentDessertsPage;
  const indexOfFirstDessertsPost = indexOfLastDessertsPost - postsPerPage;
  const currentDessertsPosts = dessertsPosts.slice(
    indexOfFirstDessertsPost,
    indexOfLastDessertsPost
  );

  // drinks

  const [currentDrinksPage, setCurrentDrinksPage] = useState(1);
  const drinksPosts = posts.filter((item) => {
    return item.category === "Drinks";
  });
  const totalDrinksProductsCount = drinksPosts.length;
  const indexOfFirstDrinksPost = postsPerPage * currentDrinksPage;
  const indexOfLastDrinksPost = indexOfFirstDrinksPost - postsPerPage;
  const currentDrinksPosts = drinksPosts.slice(
    indexOfFirstDrinksPost,
    indexOfLastDrinksPost
  );

  // other

  const [currentOtherPage, setCurrentOtherPage] = useState(1);
  const otherPosts = posts.filter((item) => {
    return item.category === "Other";
  });
  const totalOtherProductsCount = otherPosts.length;
  const indexOfFirstOtherPost = postsPerPage * currentOtherPage;
  const indexOfLastOtherPost = indexOfFirstOtherPost - postsPerPage;
  const currentOtherPosts = otherPosts.slice(
    indexOfFirstOtherPost,
    indexOfLastOtherPost
  );

  // favorite
  const addAndDeleteProductInLike = (likeproduct) => {
    let likecart = JSON.parse(localStorage.getItem("like"));

    let likecartProduct = {
      likeproduct: likeproduct,
    };

    likecartProduct.subPrice = calcSubPrice(likecartProduct);

    let check = likecart.likeProducts.find((item) => {
      return item.product.id === likeproduct.id;
    });

    console.log(check);

    if (!check) {
      likecart.likeProducts.push(likecartProduct);
    } else {
      likecart.LikeProducts = cart.LikeProducts.filter((item) => {
        return item.product.id !== likeproduct.id;
      });
    }

    localStorage.setItem("like", JSON.stringify(likecart));
  };

  // ! ModalPizza

  const getModal = (setModal) => {
    let action = {
      type: "GET_MODAL",
      payload: setModal,
    };
    dispatch(action);
  };

  return (
    <ClientContext.Provider
      value={{
        getClientProducts,
        addAndDeleteProductInCard,
        checkProductInCart,
        getCart,
        changeCountCartProduct,
        deleteProductInCart,
        setCurrentPage,
        setCurrentPizzaPage,
        setCurrentSnacksPage,
        setCurrentDessertsPage,
        setCurrentDrinksPage,
        setCurrentOtherPage,
        getModal,
        modal: state.modal,
        cart: state.cart,
        // products: state.products,
        products: state.products,
        productsCount: state.productsCount,
        // pag
        totalProductsCount,
        postsPerPage,
        currentPage,
        // pizza pagination
        totalPizzaProductsCount,
        currentPizzaPosts,
        currentPizzaPage,
        // snacks pagination
        totalSnacksProductsCount,
        currentSnacksPosts,
        currentSnacksPage,
        // desserts pagination
        totalDessertsProductsCount,
        currentDessertsPosts,
        currentDessertsPage,
        // drinks pagination
        totalDrinksProductsCount,
        currentDrinksPosts,
        currentDrinksPage,
        // other pagination
        totalOtherProductsCount,
        currentOtherPosts,
        currentOtherPage,
        addAndDeleteProductInLike,
        products: state.products,
        productsCount: state.productsCount,
        cart: state.cart,
        likeProducts: state.likeProducts,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
