import React, { useEffect } from "react";
import { ClientContext } from "../context/ClientProvider";
import CartTable from "../components/CartTable";
import { Container } from "@mui/material";
import TotalPrice from "../components/TotalPrice";

const CartPage = () => {
  const { getCart, cart } = React.useContext(ClientContext);

  useEffect(() => {
    getCart();
  }, []);

  if (!cart) {
    return <h2>Loading...</h2>;
  }

  if (cart.products.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div className="cart-menu">
      <Container maxWidth="md">
        <CartTable cart={cart} />
      </Container>
      <Container maxWidth="xs">
        <TotalPrice />
      </Container>
    </div>
  );
};

export default CartPage;
