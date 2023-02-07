import { BASE_CURRENCY } from "../constants";

import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";

const exchanger = (
  baseCurrency: TExchangeModel,
  exchangeCurrency: TExchangeModel,
  isConverter?: boolean
) => {
  // Базовая валюта – рубль?
  const isBaseRuble = baseCurrency.ID === BASE_CURRENCY.ID;

  // Итоговая валюта – рубль?
  const isExchangeRuble = exchangeCurrency.ID === BASE_CURRENCY.ID;

  // Базовая валюта имеет меньший номинал
  const isBaseLower = baseCurrency.Nominal > 1;

  // Итоговая валюта имеет меньший номинал
  const isExchangeLower = exchangeCurrency.Nominal > 1;

  // Итоговая валюта имеет больший номинал
  const isExchangeUpper = exchangeCurrency.Nominal <= 1;

  // Базовая валюта имеет больший номинал
  const isBaseUpper = baseCurrency.Nominal <= 1;

  // Номинал базовой валюты
  const baseNominal = baseCurrency.Nominal;

  // Номинал итоговой валюты
  const exchangeNominal = exchangeCurrency.Nominal;

  // Сумма итоговой валюты
  const exchangeValue = exchangeCurrency.Value;

  // Сумма базовой валюты
  const baseValue = baseCurrency.Value;

  // Если итоговая валюта рубль, просто возвращаем значение базовой валюты
  if (isExchangeRuble) {
    return isConverter ? baseValue / baseNominal : baseValue;
  }

  // Если базовая валюта рубль
  if (isBaseRuble) {
    // Если номинал итоговой валюты меньше
    return isExchangeLower
      ? // Делим номинал итоговой валюты на сумму итоговой валюты
        exchangeNominal / exchangeValue
      : // Инчае делим номинал базовой валюты на сумму итоговой
        baseNominal / exchangeValue;
  }

  // Если базовая валюта имеет меньший номинал, а итоговая больший
  if (isBaseLower && isExchangeUpper) {
    return (baseValue / baseNominal / exchangeValue) * baseNominal;
  }

  // Если итоговая имеет меньший номинал, а базовая больший
  if (isExchangeLower && isBaseUpper) {
    return (baseNominal / exchangeValue) * baseValue * exchangeNominal;
  }

  // Если базовая и итоговая валюты имеют меньший номинал,
  // и итоговый номинал больше чем базовый
  if (isBaseLower && isExchangeLower && exchangeNominal > baseNominal) {
    return (baseNominal / exchangeValue) * baseValue * baseNominal;
  }

  // Если базовая и итоговая валюты имеют меньший номинал
  if (isBaseLower && isExchangeLower) {
    return ((baseNominal / exchangeValue) * baseValue) / exchangeNominal;
  }

  return (baseNominal / exchangeValue) * baseValue;
};

export default exchanger;
