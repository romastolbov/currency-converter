import { BASE_CURRENCY } from "../constants";

import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";

const difference = (
  baseCurrency: TExchangeModel,
  exchangeCurrency: TExchangeModel
) => {
  const result =
    baseCurrency.ID !== BASE_CURRENCY.ID
      ? baseCurrency.Value - baseCurrency.Previous
      : exchangeCurrency.Value - exchangeCurrency.Previous;

  return Number(result.toFixed(4));
};

export default difference;
