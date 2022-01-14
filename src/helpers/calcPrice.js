export const calcSubPrice = (cardProduct) => {
  return cardProduct.count * cardProduct.product.price;
};

export const calcTotalPrice = (products) => {
  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.subPrices;
  });
  return totalPrice;
};
