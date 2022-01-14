import { Button } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ClientContext } from "../context/ClientProvider";

const ProductCard = ({ product }) => {
  const { addAndDeleteProductInCard, checkProductInCart } =
    React.useContext(ClientContext);

  return (
    <div>
      <div className="card">
        <p>{product.name}</p>
        <img width="100%" src={product.image} alt="photo" />
        <div className="buttons">
          {checkProductInCart(product.id) ? (
            <Button
              variant="outlined"
              onClick={() => addAndDeleteProductInCard(product)}
            >
              <RemoveShoppingCartIcon
                sx={{ fontSize: "40px", color: "black" }}
              />
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => addAndDeleteProductInCard(product)}
            >
              <ShoppingCartIcon sx={{ fontSize: "40px", color: "black" }} />
            </Button>
          )}

          <Button variant="outlined">
            <FavoriteIcon sx={{ fontSize: "40px", color: "black" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
