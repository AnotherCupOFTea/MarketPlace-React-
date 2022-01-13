import { Button } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="card">
        <p>{product.name}</p>
        <img width="100%" src={product.image} alt="photo" />
        <div className="buttons">
          <Button variant="outlined">
            <ShoppingCartIcon sx={{ fontSize: "40px", color: "black" }} />
          </Button>
          <Button variant="outlined">
            <FavoriteIcon sx={{ fontSize: "40px", color: "black" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
