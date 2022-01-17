import { Grid } from "@mui/material";
import React, { useEffect } from "react";
// import { AdminContext } from "../context/AdminProvider";
import { ClientContext } from "../context/ClientProvider";
import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";

const AllProducts = () => {
  // const { getProducts, products } = React.useContext(AdminContext);
  const {
    getClientProducts,
    products,
    currentPizzaPosts,
    currentSnacksPosts,
    currentDessertsPosts,
    currentDrinksPosts,
    currentOtherPosts,
  } = React.useContext(ClientContext);
  useEffect(() => {
    getClientProducts();
  }, []);
  if (!products) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <div className="text-menu">
        <p>Меню</p>
      </div>
      <h3 className="categor-h3" id="pizza">
        Пицца
      </h3>
      <Grid container spacing={4}>
        {currentPizzaPosts.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <div>
              <ProductCard product={item} />
            </div>
          </Grid>
        ))}
        <ProductPagination iden={"pizza"} />
      </Grid>
      <h3 className="categor-h3" id="snacks">
        Закуски
      </h3>
      <Grid container spacing={4}>
        {currentSnacksPosts.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <div>
              <ProductCard product={item} />
            </div>
          </Grid>
        ))}
        <ProductPagination iden={"snacks"} />
      </Grid>
      <h3 className="categor-h3" id="dessert">
        Десерт
      </h3>
      <Grid container spacing={4}>
        {currentDessertsPosts.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <div>
              <ProductCard product={item} />
            </div>
          </Grid>
        ))}
        <ProductPagination iden={"desserts"} />
      </Grid>
      <h3 className="categor-h3" id="drinks">
        Напитки
      </h3>
      <Grid container spacing={4}>
        {currentDrinksPosts.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <div>
              <ProductCard product={item} />
            </div>
          </Grid>
        ))}
        <ProductPagination iden={"drinks"} />
      </Grid>
      <h3 className="categor-h3" id="other">
        Другое
      </h3>
      <Grid container spacing={4}>
        {currentOtherPosts.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <div>
              <ProductCard product={item} />
            </div>
          </Grid>
        ))}
        <ProductPagination iden={"other"} />
      </Grid>
    </div>
  );
};

export default AllProducts;
