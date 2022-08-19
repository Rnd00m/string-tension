<script setup lang="ts">
import GuitarTension from "@/components/GuitarTensionComponent.vue";
import TensionChart from "@/components/TensionChartComponent.vue";
import TensionStat from "@/components/TensionStatComponent.vue";
import SettingsComponent from "@/components/SettingsComponent.vue";
</script>

<template>
  <div class="wrapper grid grid-flow-row items-center gap-4">
    <div class="grid justify-items-center">
      <SettingsComponent />
    </div>
    <div class="grid grid-flow-row grid-cols-2">
      <GuitarTension />
      <TensionChart />
    </div>
    <div class="grid justify-items-center">
      <TensionStat />
    </div>
  </div>
</template>

<style scoped></style>
