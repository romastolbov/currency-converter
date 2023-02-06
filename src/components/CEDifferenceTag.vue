<script setup lang="ts">
import { computed } from "vue";

import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue";

const props = defineProps<{
  difference: number;
}>();

const isUp = computed(() => (props.difference > 0 ? true : false));
</script>

<template>
  <a-tag :color="isUp ? 'success' : 'error'">
    <template #icon>
      <arrow-up-outlined v-if="isUp" />
      <arrow-down-outlined v-else />
    </template>
    {{ difference }}
  </a-tag>
</template>
