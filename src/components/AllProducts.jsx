import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { AdminContext } from "../context/AdminProvider";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const { getProducts, products } = React.useContext(AdminContext);
  useEffect(() => {
    getProducts();
  }, []);
  // console.log(products)
  if (!products) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Grid container spacing={4}>
        {products.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <div id="pizza">
              {item.category === "Pizza" ? (
                <ProductCard product={item} />
              ) : (
                item
              )}
            </div>
            <div id="pizza">
              {item.category === "Snacks" ? (
                <ProductCard product={item} />
              ) : (
                item
              )}
            </div>
            <div id="pizza">
              {item.category === "Dessert" ? (
                <ProductCard product={item} />
              ) : (
                item
              )}
            </div>
            <div id="pizza">
              {item.category === "Drinks" ? (
                <ProductCard product={item} />
              ) : (
                item
              )}
            </div>
            <div id="pizza">
              {item.category === "Other" ? (
                <ProductCard product={item} />
              ) : (
                item
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllProducts;
