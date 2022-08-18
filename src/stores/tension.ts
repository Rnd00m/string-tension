import { defineStore } from "pinia";
import { GuitarString } from "@/scripts/classes/GuitarString";
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
    diapason: 0.648 as number,
    strings: [] as GuitarStringTension[],
  }),
  getters: {
    getTotalTension(state): number {
      let totalTension = 0;
      state.strings.forEach(
        (string: GuitarStringTension) => (totalTension += string.tension)
      );
      return Math.round(totalTension * 100) / 100;
    },
    getAverageTension(state): number {
      return (
        Math.round((this.getTotalTension / state.strings.length) * 100) / 100
      );
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
        Note.freq(stringTension.note) || 0,
        this.diapason
      ).getTensionInKg();

      return Math.round(tension * 100) / 100;
    },
    calcultateTension(stringTension: GuitarStringTension): void {
      stringTension.tension = this.getTension(stringTension);
    },
  },
});
