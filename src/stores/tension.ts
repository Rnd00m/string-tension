import { defineStore } from "pinia";
import { StringTension } from "@/scripts/classes/StringTension";
import { Note } from "@tonaljs/tonal";

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
    getMinimumTension(state): number {
      return Math.min(...state.strings.map((string) => string.tension));
    },
    getMaximumTension(state): number {
      return Math.max(...state.strings.map((string) => string.tension));
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
    deleteString(index: number): void {
      this.strings.splice(index, 1);
    },
    updateDiapason(newDiapason: number): void {
      this.diapason = newDiapason;

      this.strings.forEach((string, index) => {
        this.updateString(index, string);
      });
    },
    getTension(stringTension: GuitarStringTension): number {
      let tension = stringTension.tension;

      if (stringTension.note !== null && stringTension.string !== null) {
        tension = new StringTension(
          stringTension.string,
          Note.freq(stringTension.note) || 0,
          this.diapason
        ).getTensionInKg();
      }

      return Math.round(tension * 100) / 100;
    },
    calcultateTension(stringTension: GuitarStringTension): void {
      stringTension.tension = this.getTension(stringTension);
    },
  },
});
