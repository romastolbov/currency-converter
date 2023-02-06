<script setup lang="ts">
import { ref, onMounted } from "vue";
import { api } from "./api"

const activeKey = ref("1");

onMounted(async () => {
  console.log(await api.exchange.getRates());
})
</script>

<template>
  <a-card title="Приложение «Конвертер валют»">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="1" tab="Список валют">Список валют</a-tab-pane>
      <a-tab-pane key="2" tab="Конвертер">Конвертер</a-tab-pane>
    </a-tabs>
  </a-card>
</template>
