<script setup lang="ts">
import { StringTension } from "@/scripts/classes/StringTension";
import { strings } from "@/scripts/strings";
import { computed, reactive, ref } from "vue";
import { Note, Scale } from "@tonaljs/tonal";

const props = defineProps(["stringSettings"]);

const selected = reactive({
  note: props.stringSettings ? props.stringSettings.note : ref("E2"),
  string: props.stringSettings ? props.stringSettings.string : null,
});

const range = Scale.rangeOf("C chromatic");
const notes = range("C1", "C5"); // All notes between C1 and C5

const selectedNoteTension = computed(() => {
  let tension = new StringTension(
      selected.string,
      Note.freq(selected.note),
      0.648
  ).getTensionInKg();

  tension = Math.round(tension * 100) / 100;

  return tension;
});
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

    <span> Tension: {{ selectedNoteTension }} kg</span>
  </div>
</template>

<style scoped></style>