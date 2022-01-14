import React, { useEffect } from "react";
import { ClientContext } from "../context/ClientProvider";
import CartTable from "../components/CartTable";
import { Container } from "@mui/material";

const CartPage = () => {
  const { getCart, cart } = React.useContext(ClientContext);

  useEffect(() => {
    getCart();
  }, []);

  console.log(cart);

  if (!cart) {
    return <h2>Loading...</h2>;
  }

  if (cart.products.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div>
      <Container maxWidth="md">
        <CartTable cart={cart} />
      </Container>
      <Container maxWidth="xs"></Container>
    </div>
  );
};

export default CartPage;
