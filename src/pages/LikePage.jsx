// import React, { useEffect } from "react";
// import { ClientContext } from "../context/ClientProvider";
// import CartTable from "../components/CartTable";
// import { Container } from "@mui/material";

// const LikePage = () => {
//   const { getCart, like, products } = React.useContext(ClientContext);

//   useEffect(() => {
//     getCart();
//   }, []);

// //   console.log(like);

//   if (!like) {
//     return <h2>Loading...</h2>;
//   }

//   if (like.products.length === 0) {
//     return <h2>Your cart is empty.</h2>;
//   }

//   return (
//     <div>
//       <Container maxWidth="md">
//         <CartTable like={like} products={products}/>
//       </Container>
     
//     </div>
//   );
// };

// export default LikePage;
