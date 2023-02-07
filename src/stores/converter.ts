import { ref, computed } from "vue";

import { defineStore } from "pinia";

import { BASE_CURRENCY } from "@/utils/constants";
import converter from "@/utils/helpers/converter";

import type { TExchangeModel } from "@/api/exchangeService/exchangeModel";
import type { Ref, ComputedRef } from "vue";

export const useConverterStore = defineStore("converter", () => {
  // Базовая сумма
  const baseValue: Ref<string> = ref("");

  // Базовая валюта
  const baseCurrency: Ref<TExchangeModel> = ref(BASE_CURRENCY);

  // ID базовой валюты
  const baseCurrencyId: ComputedRef<string> = computed(
    () => baseCurrency.value.ID
  );

  const exchangeValueConvert: ComputedRef<string> = computed(() => {
    return String(
      converter(
        Number(baseValue.value),
        baseCurrency.value,
        exchangeCurrency.value
      )
    );
  });

  // Устанавливаем итоговую сумму
  function setExchangeValue(payload: string) {
    exchangeValue.value = payload;
  }

  // Устанавливаем базовую сумму
  function setBaseValue(payload: string) {
    baseValue.value = payload;
    setExchangeValue(exchangeValueConvert.value);
  }

  // Устанавливаем базовую валюту
  function setBaseCurrency(payload: TExchangeModel) {
    baseCurrency.value = { ...payload };
    setExchangeValue(exchangeValueConvert.value);
  }

  // Базовая сумма
  const exchangeValue: Ref<string> = ref("");

  // Итоговая валюта
  const exchangeCurrency: Ref<TExchangeModel> = ref(BASE_CURRENCY);

  // ID итоговой валюты
  const exchangeCurrencyId: ComputedRef<string> = computed(
    () => exchangeCurrency.value.ID
  );

  // Устанавливаем итоговую валюту
  function setExchangeCurrency(payload: TExchangeModel) {
    exchangeCurrency.value = { ...payload };
    setExchangeValue(exchangeValueConvert.value);
  }

  // Меняем валюты местами
  function toggleCurrencies() {
    const copyBaseValue = baseValue.value;
    const copyExhcnageValue = exchangeValue.value;

    setBaseValue(copyExhcnageValue);
    setExchangeValue(copyBaseValue);

    const copyBaseCurrency = { ...baseCurrency.value };
    const copyExchangeCurrency = { ...exchangeCurrency.value };

    setBaseCurrency(copyExchangeCurrency);
    setExchangeCurrency(copyBaseCurrency);
  }

  // Отключаем кнопку тоггла
  const toggleDisabled = computed(() => {
    if (!baseValue.value || !exchangeValue.value) return true;
    else return false;
  });

  return {
    baseValue,
    baseCurrency,
    baseCurrencyId,
    setBaseValue,
    setBaseCurrency,

    exchangeValue,
    exchangeCurrency,
    exchangeCurrencyId,
    setExchangeCurrency,

    toggleCurrencies,
    toggleDisabled,
  };
});
