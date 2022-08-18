<script setup lang="ts">
import { strings } from "@/scripts/strings";
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
  <div class="string-tension">
    <select v-model="selected.note">
      <option v-for="note in notes" :value="note" :key="note">
        {{ note }}
      </option>
    </select>

    <select v-model="selected.string">
      <option v-for="string in strings" :value="string" :key="string.name">
        {{ string.name }} - {{ string.size }} - {{ string.unitWeight }} kg
      </option>
    </select>

    <span> Tension: {{ props.stringSettings.tension }} kg</span>
  </div>
</template>

<style scoped></style>
