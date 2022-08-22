<script setup lang="ts">
import { stringData } from "@/scripts/stringData";
import { reactive, ref, watch } from "vue";
import { Scale } from "@tonaljs/tonal";
import { useTensionStore } from "@/stores/tension";

const tensionStore = useTensionStore();
const props = defineProps(["stringSettings", "index"]);

const selected = reactive({
  note: props.stringSettings ? props.stringSettings.note : ref("E2"),
  string: props.stringSettings ? props.stringSettings.string : ref(null),
});

const range = Scale.rangeOf("C chromatic");
const notes = range("C1", "C5"); // All notes between C1 and C5

watch(
  () => selected.note,
  (note) => {
    tensionStore.updateString(props.index, {
      note: note,
      string: selected.string,
      tension: 0,
    });
  }
);

watch(
  () => selected.string,
  (string) => {
    tensionStore.updateString(props.index, {
      note: selected.note,
      string: string,
      tension: 0,
    });
  }
);
</script>

<template>
  <div
    class="string-tension grid grid-flow-col auto-cols-max place-content-center place-items-center gap-3"
  >
    <select
      v-model="selected.note"
      class="select select-accent max-w-xs flex-none"
    >
      <option v-for="note in notes" :value="note" :key="note">
        {{ note }}
      </option>
    </select>

    <select
      v-model="selected.string"
      class="select select-accent w-72 max-w-xs flex-auto"
    >
      <option v-for="string in stringData" :value="string" :key="string.name">
        {{ string.name }} - {{ string.size }} - {{ string.unitWeight }} kg
      </option>
    </select>

    <div class="w-20">
      <span class="string-tension-span font-semibold">
        {{ props.stringSettings.tension }} kg
      </span>
    </div>

    <button
      class="btn btn-square btn-outline btn-sm"
      @click="tensionStore.deleteString(index)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
