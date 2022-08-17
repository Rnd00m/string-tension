<script setup lang="ts">
import { StringTension } from "@/scripts/classes/StringTension";
import { strings } from "@/scripts/strings";
import { reactive, ref, watch } from "vue";
import { Note, Scale } from "@tonaljs/tonal";
import { useTensionStore } from "@/stores/tension";

const tensionStore = useTensionStore();
const props = defineProps(["stringSettings", "index"]);

const selected = reactive({
  note: props.stringSettings ? props.stringSettings.note : ref("E2"),
  string: props.stringSettings ? props.stringSettings.string : null,
});

const range = Scale.rangeOf("C chromatic");
const notes = range("C1", "C5"); // All notes between C1 and C5

watch(
  () => selected.note,
  (note) => {
    let tension = new StringTension(
      selected.string,
      Note.freq(note),
      0.648
    ).getTensionInKg();

    tension = Math.round(tension * 100) / 100;

    tensionStore.setTension(props.index, tension);
  }
);

watch(
  () => selected.string,
  (string) => {
    let tension = new StringTension(
      string,
      Note.freq(selected.note),
      0.648
    ).getTensionInKg();

    tension = Math.round(tension * 100) / 100;

    tensionStore.setTension(props.index, tension);
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