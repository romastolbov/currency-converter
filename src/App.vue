<script setup lang="ts">
import { computed, onMounted } from "vue";

import { useExchangeStore } from "@/stores/exchange";

import { APP_NAME, TABS } from "@/utils/constants";

import CETabs from "@/components/CETabs.vue";
import CESearch from "@/components/CESearch.vue";
import CESelectBasePrice from "@/components/CESelectBasePrice.vue";
import CECurrenciesList from "@/components/CECurrenciesList.vue";

const store = useExchangeStore();
const value = computed(() => store.activeBaseCurrencyId);
const options = computed(() => store.currenciesSelectOptions);
const data = computed(() => store.currenciesList);
const activeBaseCurrency = computed(() => store.activeBaseCurrency);
const selectHandler = (selectedOption) => {
  store.setActiveBaseCurrency(selectedOption);
};

const searchHandler = (searchValue) => {
  store.setSearchValue(searchValue);
};

onMounted(async () => {
  await store.fetchCurrencies();
});
</script>

<template>
  <a-card :title="APP_NAME">
    <CETabs :tabs="TABS">
      <template #firstTab>
        <CESearch
          label="Поиск"
          placeholder="Введите название или код валюты..."
          @onSearch="searchHandler"
        />
        <CESelectBasePrice
          label="Базовая валюта"
          :value="value"
          :options="options"
          @onSelect="selectHandler"
        />
        <CECurrenciesList
          title="Курс валют"
          :data="data"
          :baseCurrency="activeBaseCurrency"
        />
      </template>
      <template #secondTab> Конвертер </template>
    </CETabs>
  </a-card>
</template>
