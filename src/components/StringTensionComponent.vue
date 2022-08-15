<script setup lang="ts">
import { StringTension } from "@/scripts/classes/StringTension";
import { strings } from "@/scripts/strings";
import { computed, reactive, ref } from "vue";
import { Note, Scale } from "@tonaljs/tonal";

const props = defineProps(["stringSettings"]);

console.log(props.stringSettings);

const selectedNote = props.stringSettings
  ? props.stringSettings.note
  : reactive(ref("E2"));
const selectedString = props.stringSettings
  ? props.stringSettings.string
  : null;
const range = Scale.rangeOf("C chromatic");
const notes = range("C1", "C5"); // All notes between C1 and C5

console.log(selectedString);

const selectedNoteTension = computed(() => {
  return new StringTension(
    selectedString,
    Note.freq(selectedNote.value),
    0.648
  ).getTensionInKg();
});
</script>

<template>
  <div class="string-tension">
    <select v-model="selectedNote">
      <option v-for="note in notes" :value="note" :key="note">
        {{ note }}
      </option>
    </select>

    <select v-model="selectedString">
      <option v-for="string in strings" :value="string" :key="string.name">
        {{ string.name }} - {{ string.size }} - {{ string.unitWeight }} kg
      </option>
    </select>

    <div>Note: {{ selectedNote }}</div>
    <div>Tension: {{ selectedNoteTension.toPrecision(2) }} kg</div>
    <div>String: {{ selectedString }}</div>
  </div>
</template>

<style scoped></style>
