<script setup lang="ts">
import { onMounted, ref } from "vue";

import { useExchangeStore } from "@/stores/exchange";

import { APP_NAME, TABS, APP_REPOSITORY } from "@/utils/constants";

import type { Ref } from "vue";

import CETabs from "@/components/CETabs.vue";
import CEExchnage from "@/components/CEExchnage.vue";
import CEConverter from "@/components/CEConverter.vue";

const exchange = useExchangeStore();

const isLoading: Ref<boolean> = ref(true);

onMounted(async () => {
  await exchange.fetchCurrencies();
  isLoading.value = false;
});
</script>

<template>
  <a-card :title="APP_NAME" :loading="isLoading">
    <template #extra>
      <a :href="APP_REPOSITORY" target="_blank">Репозиторий</a>
    </template>
    <CETabs :tabs="TABS">
      <template #firstTab>
        <CEExchnage />
      </template>
      <template #secondTab>
        <CEConverter />
      </template>
    </CETabs>
  </a-card>
</template>
