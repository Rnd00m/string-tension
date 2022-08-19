<script setup lang="ts">
import { useTensionStore } from "@/stores/tension";
import { reactive, watch } from "vue";

const tensionStore = useTensionStore();

const selected = reactive({
  diapason: tensionStore.diapason,
});

watch(
  () => selected.diapason,
  (diapason) => {
    tensionStore.updateDiapason(diapason);
  }
);
</script>

<template>
  <div class="settings">
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Diapason</span>
      </label>
      <select class="select select-bordered" v-model="selected.diapason">
        <option :value="0.628">24.75</option>
        <option :value="0.635">25</option>
        <option :value="0.648">25.5</option>
        <option :value="0.673">26.5</option>
        <option :value="0.686">27</option>
        <option :value="0.762">30</option>
      </select>
    </div>
  </div>
</template>

<style scoped></style>
