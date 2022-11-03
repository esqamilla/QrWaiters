/*
 * 7000000 => 7,000,000.00
 * */
export const toMoney = (price: number) =>
  Number(price)
    .toFixed(2)
    .toString()
    .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ",");

/*
 * 1750 => 1,750 AED
 * */
export const toMoneyWithCurrency = (price: number, currency: string = "AED") =>
  `${Number(price)
    .toFixed(0)
    .toString()
    .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ",")} ${currency}`;
