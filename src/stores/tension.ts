import { defineStore } from "pinia";
import { GuitarString } from "@/scripts/classes/GuitarString";
import { StringType } from "@/scripts/classes/StringType";

export const useTensionStore = defineStore({
  id: "tension",
  state: () => ({
    totalNeckTension: 0,
    strings: [
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
    ],
  }),
  getters: {
    getTotalTension(state) {
      let totalTension = 0;
      state.strings.forEach((string) => (totalTension += string.tension));
      return totalTension;
    },
  },
  actions: {
    setTension(index: number, tension: number): void {
      this.strings[index].tension = tension;
    },
  },
});
