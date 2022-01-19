import { Grid } from "@mui/material";
import React, { useEffect } from "react";
// import { AdminContext } from "../context/AdminProvider";
import { ClientContext } from "../context/ClientProvider";
import OurProduct from "./OurProduct";
import ProductCard from "./ProductCard";

const AllProducts = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [product, setProduct] = React.useState({})
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
       <div className="text-menu">
         <p>Меню</p>
       </div>
      <h3 className="categor-h3" id="pizza">Пицца</h3>
      <Grid container spacing={4}>
        {products.map(
          (item) =>
            item.category === "Pizza" && (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <div >
                  <ProductCard product={item} onClick={()=>{
                    handleOpen(true)
                    setProduct(item)
                    
                    }} />
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
                  <ProductCard product={item} onClick={()=>{
                    handleOpen(true)
                    setProduct(item)
                    
                    }} />
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
                  <ProductCard product={item} onClick={()=>{
                    handleOpen(true)
                    setProduct(item)
                    
                    }} />
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
                  <ProductCard product={item}  onClick={()=>{
                    handleOpen(true)
                    setProduct(item)
                    
                    }} />
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
                  <ProductCard product={item} onClick={()=>{
                    handleOpen(true)
                    setProduct(item)
                    
                    }} />
                </div>
              </Grid>
            )
        )}
      </Grid>
      <OurProduct open={open} product={product} handleClose={handleClose}/>
    </div>
  );
};

export default AllProducts;
