<script setup lang="ts">
import GuitarTension from "@/components/GuitarTensionComponent.vue";
import TensionChart from "@/components/TensionChartComponent.vue";
import TensionStat from "@/components/TensionStatComponent.vue";
import SettingsComponent from "@/components/SettingsComponent.vue";
</script>

<template>
  <div class="wrapper grid grid-flow-row items-center gap-4">
    <div class="grid justify-items-center mb-4">
      <h1 class="text-4xl font-bold">String tension calculator</h1>
    </div>
    <div class="grid grid-flow-row grid-cols-2">
      <div class="grid gap-4">
        <SettingsComponent />
        <GuitarTension />
      </div>

      <TensionChart />
    </div>
    <div class="grid justify-items-center">
      <TensionStat />
    </div>
  </div>
</template>

<style scoped></style>
