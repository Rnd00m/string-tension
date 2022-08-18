<script setup lang="ts">
import { useTensionStore } from "@/stores/tension";

const tensionStore = useTensionStore();
</script>

<template>
  <div class="tension-chart">
    <div class="text-center">{{ tensionStore.getTotalTension }} kg</div>
  </div>
</template>

<style scoped></style>
