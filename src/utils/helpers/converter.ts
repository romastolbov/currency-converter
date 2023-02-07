import exchanger from "./exchanger";

import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";

const converter = (
  amount: number,
  baseCurrency: TExchangeModel,
  exchangeCurrency: TExchangeModel
) => {
  const isEqualCurrency = baseCurrency.ID === exchangeCurrency.ID;

  if (isEqualCurrency) return amount;

  return (exchanger(baseCurrency, exchangeCurrency, true) * amount).toFixed(4);
};

export default converter;
