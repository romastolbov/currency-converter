import { ref, computed, Ref, ComputedRef } from "vue";
import { defineStore } from "pinia";

import { api } from "@/api";

import { BASE_CURRENCY } from "@/utils/constants";
import search from "@/utils/helpers/search";

import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";

export const useExchangeStore = defineStore("exchange", () => {
  // Список валют
  const currencies: Ref<TExchangeModel[]> = ref([]);

  // Список валют для вывода в таблицу (без базовой валюты)
  const currenciesList: ComputedRef<TExchangeModel[]> = computed(() => {
    return currencies.value
      .filter((currency) => currency.ID !== activeBaseCurrencyId.value)
      .filter((currency) =>
        searchValue.value ? search(currency, searchValue.value) : true
      );
  });

  // Заполняем пустой список валют, либо добавляем в него валюты
  function setCurrencies(payload: TExchangeModel[], isPush: boolean = false) {
    if (isPush) currencies.value = [...payload, ...currencies.value];
    else currencies.value = [...payload];
  }

  // Запрашиваем и сохраняем список валют
  async function fetchCurrencies() {
    const res: TExchangeModel[] = await api.exchange.getRates();
    setCurrencies(res);
  }

  // Есть ли в списке валют Рубль
  const rubleInList = computed(() =>
    currencies.value.find((currency) => currency.ID === BASE_CURRENCY.ID)
  );

  // Рубль – базовая цена?
  const rubleIsBaseCurrency = computed(
    () => activeBaseCurrencyId.value !== BASE_CURRENCY.ID
  );

  // Удаляем рубль из списка валют
  function removeRoubleCurrency() {
    currencies.value = currencies.value.filter(
      (currency) => currency.ID !== BASE_CURRENCY.ID
    );
  }

  // Добавляем или удаляем рубль в список валют
  function toggleRoubleCurrency() {
    if (!rubleInList.value && rubleIsBaseCurrency.value)
      setCurrencies([BASE_CURRENCY], true);
    else removeRoubleCurrency;
  }

  // Базовая валюта
  const activeBaseCurrency: Ref<TExchangeModel> = ref(BASE_CURRENCY);

  // ID базовой валюты
  const activeBaseCurrencyId: ComputedRef<string> = computed(
    () => activeBaseCurrency.value.ID
  );

  // Устанваливаем базовую валюту и добавлем (удаляем) рубль в список валют
  function setActiveBaseCurrency(payload: TExchangeModel) {
    activeBaseCurrency.value = { ...payload };
    toggleRoubleCurrency();
  }

  // Получаем список опций длы вывода в select «Базовая валюта»
  const currenciesSelectOptions = computed(() => {
    const options = [...currencies.value];

    if (!rubleInList.value) options.unshift(BASE_CURRENCY);

    return options?.map((currency: TExchangeModel) => {
      return {
        ...currency,
        selectLabel: `${currency.Name} (${currency.CharCode})`,
        selectValue: currency.ID,
      };
    });
  });

  // Значение поля поиска
  const searchValue: Ref<string> = ref("");

  function setSearchValue(payload: string) {
    searchValue.value = payload;
  }

  return {
    currencies,
    currenciesList,
    fetchCurrencies,
    activeBaseCurrency,
    activeBaseCurrencyId,
    setActiveBaseCurrency,
    currenciesSelectOptions,

    searchValue,
    setSearchValue,
  };
});
