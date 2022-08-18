import { defineStore } from "pinia";
import { GuitarString } from "@/scripts/classes/GuitarString";
import { StringType } from "@/scripts/classes/StringType";
import { StringTension } from "@/scripts/classes/StringTension";
import { Note } from "@tonaljs/tonal";

type GuitarStringTension = {
  note: string;
  string: GuitarString;
  tension: number;
};

export const useTensionStore = defineStore({
  id: "tension",
  state: () => ({
    totalNeckTension: 0,
    diapason: 0.648,
    strings: [],
  }),
  getters: {
    getTotalTension(state) {
      let totalTension = 0;
      state.strings.forEach((string) => (totalTension += string.tension));
      return Math.round(totalTension * 100) / 100;
    },
  },
  actions: {
    addString(stringTension: GuitarStringTension): void {
      this.calcultateTension(stringTension);
      this.strings.push(stringTension);
    },
    updateString(index: number, stringTension: GuitarStringTension): void {
      this.calcultateTension(stringTension);
      this.strings.splice(index, 1, stringTension);
    },
    getTension(stringTension: GuitarStringTension): number {
      const tension = new StringTension(
        stringTension.string,
        Note.freq(stringTension.note),
        this.diapason
      ).getTensionInKg();

      return Math.round(tension * 100) / 100;
    },
    calcultateTension(stringTension: GuitarStringTension): void {
      stringTension.tension = this.getTension(stringTension);
    },
  },
});
