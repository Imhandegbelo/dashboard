export const toUSD = (amount) => {
  let USD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return USD.format(amount)
};
