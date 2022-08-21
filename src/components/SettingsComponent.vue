<script setup lang="ts">
import { useTensionStore } from "@/stores/tension";
import { reactive, watch } from "vue";

interface Tuning {
  name: string;
  notes: string[];
}

const tensionStore = useTensionStore();

const selected = reactive({
  diapason: tensionStore.diapason,
  tuning: ["E4", "B3", "G3", "D3", "A2", "E2"],
});

const tunings: Tuning[] = [
  {
    name: "Standard",
    notes: ["E4", "B3", "G3", "D3", "A2", "E2"],
  },
  {
    name: "Drop D",
    notes: ["E4", "B3", "G3", "D3", "A2", "D2"],
  },
  {
    name: "1/2 step down",
    notes: ["Eb4", "Bb3", "F3", "C3", "G2", "Eb2"],
  },
  {
    name: "1 step down",
    notes: ["D4", "A3", "F3", "C3", "G2", "D2"],
  },
  {
    name: "Drop C",
    notes: ["D4", "A3", "F3", "C3", "G2", "C2"],
  },
  {
    name: "2 step down",
    notes: ["C4", "G3", "Eb3", "Bb2", "F2", "C2"],
  },
  {
    name: "Standard 7 strings",
    notes: ["E4", "B3", "G3", "D3", "A2", "E2", "B2"],
  },
];

watch(
  () => selected.diapason,
  (diapason) => {
    tensionStore.updateDiapason(diapason);
  }
);

watch(
  () => selected.tuning,
  (tuning) => {
    let lastIndex = 0;

    tensionStore.strings.forEach((string, index) => {
      string.note = tuning[index];
      tensionStore.updateString(index, string);
      lastIndex = index;
    });

    if (tuning.length > tensionStore.strings.length) {
      lastIndex += 1;

      for (let i = lastIndex; i < tuning.length; i++) {
        tensionStore.addString({
          note: tuning[i],
          string: null,
          tension: 0,
        });
      }
    }
  }
);
</script>

<template>
  <div class="settings grid grid-flow-col gap-4">
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
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Tuning</span>
      </label>
      <select class="select select-bordered" v-model="selected.tuning">
        <option
          :key="tuning.name"
          v-for="tuning in tunings"
          :value="tuning.notes"
        >
          {{ tuning.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped></style>
