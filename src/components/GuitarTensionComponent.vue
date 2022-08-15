<script setup lang="ts">
import { GuitarString } from "@/scripts/classes/GuitarString";
import { StringType } from "@/scripts/classes/StringType";
import StringTension from "@/components/StringTensionComponent.vue";

const defaultStringSettings = [
  {
    note: "E4",
    string: new GuitarString(
      "PL010",
      10,
      0.0003955547,
      StringType.PlainSteelLockTwist
    ),
  },
  {
    note: "B3",
    string: new GuitarString(
      "PL013",
      13,
      0.00066860352,
      StringType.PlainSteelLockTwist
    ),
  },
  {
    note: "G3",
    string: new GuitarString(
      "PL017",
      17,
      0.00114326916,
      StringType.PlainSteelLockTwist
    ),
  },
  {
    note: "D3",
    string: new GuitarString(
      "PL026",
      26,
      0.0026742355,
      StringType.PlainSteelLockTwist
    ),
  },
  {
    note: "A2",
    string: new GuitarString(
      "NW036",
      36,
      0.00427949112,
      StringType.NickelPlatedSteelRoundWound
    ),
  },
  {
    note: "E2",
    string: new GuitarString(
      "NW046",
      46,
      0.00682461328,
      StringType.NickelPlatedSteelRoundWound
    ),
  },
];

console.log(defaultStringSettings);
</script>

<template>
  <div class="guitar-tension">
    <StringTension
      :string-settings="defaultString"
      v-for="defaultString in defaultStringSettings"
      :key="'string-tension-' + defaultString.note"
    ></StringTension>
  </div>
</template>

<style scoped></style>
