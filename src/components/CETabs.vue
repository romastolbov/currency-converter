<script setup lang="ts">
export type TTabs = {
  id: number;
  name: string;
  slot: string;
};

defineProps<{
  tabs: TTabs[];
}>();
</script>

<template>
  <a-tabs type="card">
    <a-tab-pane v-for="tab in tabs" :key="tab.id" :tab="tab.name">
      <slot :name="tab.slot" />
    </a-tab-pane>
  </a-tabs>
</template>
