// import { Button } from "@mui/material";
import React from "react";
import AddToCartIcon from "../images/add-to-cart.png";
import TickCartIcon from "../images/cart-tick.png";
import LikeIcon from "../images/heart.png";
import NotLike from "../images/heart (1).png";
import { ClientContext } from "../context/ClientProvider";
import ModalPizza from "./ModalPizza";

const ProductCard = ({ product }) => {
  const {
    addAndDeleteProductInCard,
    addAndDeleteProductInLike,
    checkProductInCart,
    checkProductInLike,
  } = React.useContext(ClientContext);

  return (
    <div>
      <div className="card">
        <img
          width="100%"
          src={product.image}
          alt="photo"
          className="card-img"
        />
        <div className="card-buttons">
          {checkProductInCart(product.id) ? (
            <button
              className="card-cart"
              onClick={() => addAndDeleteProductInCard(product)}
            >
              <img width={40} src={TickCartIcon} alt="CartIcon" />
            </button>
          ) : (
            <button
              className="card-cart"
              onClick={() => addAndDeleteProductInCard(product)}
            >
              <img width={40} src={AddToCartIcon} alt="CartIcon" />
            </button>
          )}
          {checkProductInLike(product.id) ? (
            <button
              className="card-like"
              onClick={() => addAndDeleteProductInLike(product)}
            >
              <img width={40} src={LikeIcon} alt="CartIcon" />
            </button>
          ) : (
            <button
              className="card-like"
              onClick={() => addAndDeleteProductInLike(product)}
            >
              <img width={40} src={NotLike} alt="CartIcon" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
