<script setup lang="ts">
import StringTension from "@/components/StringTensionComponent.vue";
import { useTensionStore } from "@/stores/tension";

const tensionStore = useTensionStore();
</script>

<template>
  <div class="guitar-tension">
    <StringTension
      :string-settings="string"
      :index="index"
      v-for="(string, index) in tensionStore.strings"
      :key="'string-tension-' + string.note"
    ></StringTension>
    <div>{{ tensionStore.getTotalTension }}</div>
  </div>
</template>

<style scoped></style>