<script setup lang="ts">
import { ref } from "vue";

const activeKey = ref("1");
</script>

<template>
  <a-card title="Приложение «Конвертёр валют»">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="1" tab="Список валют">Список валют</a-tab-pane>
      <a-tab-pane key="2" tab="Конвертёр">Конвертёр</a-tab-pane>
    </a-tabs>
  </a-card>
</template>
