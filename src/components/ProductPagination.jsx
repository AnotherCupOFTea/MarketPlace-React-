import { Pagination, Stack } from "@mui/material";
import React from "react";
import { ClientContext } from "../context/ClientProvider";

const ProductPagination = ({ iden }) => {
  const {
    postsPerPage,
    totalPizzaProductsCount,
    currentPizzaPage,
    setCurrentPizzaPage,
    // snks
    totalSnacksProductsCount,
    currentSnacksPage,
    setCurrentSnacksPage,
    // des
    totalDessertsProductsCount,
    currentDessertsPage,
    setCurrentDessertsPage,
    // drinks
    totalDrinksProductsCount,
    currentDrinksPage,
    setCurrentDrinksPage,
    // other
    totalOtherProductsCount,
    currentOtherPage,
    setCurrentOtherPage,
  } = React.useContext(ClientContext);

  const pizzaPagesCount = Math.ceil(totalPizzaProductsCount / postsPerPage);
  const snacksPagesCount = Math.ceil(totalSnacksProductsCount / postsPerPage);
  const dessertsPagesCount = Math.ceil(
    totalDessertsProductsCount / postsPerPage
  );
  const drinksPagesCount = Math.ceil(totalDrinksProductsCount / postsPerPage);
  const otherPagesCount = Math.ceil(totalOtherProductsCount / postsPerPage);

  if (iden === "pizza") {
    return (
      <Stack spacing={2}>
        <Pagination
          count={pizzaPagesCount}
          page={currentPizzaPage}
          onChange={(_, newPage) => {
            setCurrentPizzaPage(newPage);
          }}
          color="primary"
        />
      </Stack>
    );
  } else if (iden === "snacks") {
    return (
      <Stack spacing={2}>
        <Pagination
          count={snacksPagesCount}
          page={currentSnacksPage}
          onChange={(_, newPage) => {
            setCurrentSnacksPage(newPage);
          }}
          color="primary"
        />
      </Stack>
    );
  } else if (iden === "desserts") {
    return (
      <Stack spacing={2}>
        <Pagination
          count={dessertsPagesCount}
          page={currentDessertsPage}
          onChange={(_, newPage) => {
            setCurrentDessertsPage(newPage);
          }}
          color="primary"
        />
      </Stack>
    );
  } else if (iden === "drinks") {
    return (
      <Stack spacing={2}>
        <Pagination
          count={drinksPagesCount}
          page={currentDrinksPage}
          onChange={(_, newPage) => {
            setCurrentDrinksPage(newPage);
          }}
          color="primary"
        />
      </Stack>
    );
  } else if (iden === "other") {
    return (
      <Stack spacing={2}>
        <Pagination
          count={otherPagesCount}
          page={currentOtherPage}
          onChange={(_, newPage) => {
            setCurrentOtherPage(newPage);
          }}
          color="primary"
        />
      </Stack>
    );
  }
};

export default ProductPagination;
