import exchanger from "@/utils/helpers/exchanger";

import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";

const listItemRender = (
  baseCurrency: TExchangeModel,
  exchangeCurrency: TExchangeModel
) => {
  const baseNominal = baseCurrency.Nominal;
  const baseChar = baseCurrency.CharCode;
  const exchangeChar = exchangeCurrency.CharCode;
  const exchangeName = exchangeCurrency.Name;
  const exchangeResult = exchanger(baseCurrency, exchangeCurrency).toFixed(4);

  return `${baseNominal} ${baseChar} – ${exchangeResult} ${exchangeChar} (${exchangeName})`;
};

export default listItemRender;
