import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";

export const API_URL: string = "https://www.cbr-xml-daily.ru/daily_json.js";

export const APP_NAME: string = "Приложение «Конвертер валют»";

export const BASE_CURRENCY: TExchangeModel = {
  ID: "1",
  NumCode: "1",
  CharCode: "RUB",
  Nominal: 1,
  Name: "Российский рубль",
  Value: 0,
  Previous: 0,
};

export const TABS = [
  {
    id: 1,
    name: "Список валют",
    slot: "firstTab",
  },
  {
    id: 2,
    name: "Конвертер",
    slot: "secondTab",
  },
];

export const APP_REPOSITORY: string =
  "https://github.com/romastolbov/currency-converter";
