<script setup lang="ts">
import StringTension from "@/components/StringTensionComponent.vue";
import { useTensionStore } from "@/stores/tension";
import { GuitarString } from "@/scripts/classes/GuitarString";
import { StringType } from "@/scripts/classes/StringType";

const tensionStore = useTensionStore();

const defaultStrings: GuitarStringTension[] = [
  {
    note: "E4",
    string: new GuitarString(
      "PL010",
      10,
      0.0003955547,
      StringType.PlainSteelLockTwist
    ),
    tension: 0,
  },
  {
    note: "B3",
    string: new GuitarString(
      "PL013",
      13,
      0.00066860352,
      StringType.PlainSteelLockTwist
    ),
    tension: 0,
  },
  {
    note: "G3",
    string: new GuitarString(
      "PL017",
      17,
      0.00114326916,
      StringType.PlainSteelLockTwist
    ),
    tension: 0,
  },
  {
    note: "D3",
    string: new GuitarString(
      "PL026",
      26,
      0.0026742355,
      StringType.PlainSteelLockTwist
    ),
    tension: 0,
  },
  {
    note: "A2",
    string: new GuitarString(
      "NW036",
      36,
      0.00427949112,
      StringType.NickelPlatedSteelRoundWound
    ),
    tension: 0,
  },
  {
    note: "E2",
    string: new GuitarString(
      "NW046",
      46,
      0.00682461328,
      StringType.NickelPlatedSteelRoundWound
    ),
    tension: 0,
  },
];

defaultStrings.forEach((string) => {
  tensionStore.addString(string);
});
</script>

<template>
  <div class="guitar-tension grid gap-3 content-center">
    <StringTension
      :string-settings="string"
      :index="index"
      v-for="(string, index) in tensionStore.strings"
      :key="'string-tension-' + string.note"
    ></StringTension>
  </div>
</template>

<style scoped></style>
