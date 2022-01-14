import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { AdminContext } from "../context/AdminProvider";
import { ClientContext } from "../context/ClientProvider";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  // const { getProducts, products } = React.useContext(AdminContext);
  const { getClientProducts, products } = React.useContext(ClientContext);
  useEffect(() => {
    getClientProducts();
  }, []);
  if (!products) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h3 className="categor-h3" id="pizza">Пицца</h3>
      <Grid container spacing={4}>
        {products.map(
          (item) =>
            item.category === "Pizza" && (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <div >
                  <ProductCard product={item} />
                </div>
              </Grid>
            )
        )}
      </Grid>
      <h3 className="categor-h3" id="snacks">Закуски</h3>
      <Grid container spacing={4}>
        {products.map(
          (item) =>
            item.category === "Snacks" && (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <div >
                  <ProductCard product={item} />
                </div>
              </Grid>
            )
        )}
      </Grid>
      <h3 className="categor-h3" id="dessert">Десерт</h3>
      <Grid container spacing={4}>
        {products.map(
          (item) =>
            item.category === "Dessert" && (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <div >
                  <ProductCard product={item} />
                </div>
              </Grid>
            )
        )}
      </Grid>
      <h3 className="categor-h3" id="drinks">Напитки</h3>
      <Grid container spacing={4}>
        {products.map(
          (item) =>
            item.category === "Drinks" && (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <div >
                  <ProductCard product={item} />
                </div>
              </Grid>
            )
        )}
      </Grid>
      <h3 className="categor-h3" id="other">Другое</h3>
      <Grid container spacing={4}>
        {products.map(
          (item) =>
            item.category === "Other" && (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <div >
                  <ProductCard product={item} />
                </div>
              </Grid>
            )
        )}
      </Grid>
    </div>
  );
};

export default AllProducts;
