import { GuitarString } from "@/scripts/classes/GuitarString";

export class StringTension {
  #newtonCoefficient = 9.81;

  constructor(
    private string: GuitarString,
    private noteFrequency: number,
    private diapason: number = 0.648 // (in meters) default diapason 25.5 in
  ) {}

  /**
   * Get tension of string in Newtons
   * m * F² * 4 * L²
   *
   * F frequency in Hz
   * L string length in m (scale)
   * m unit weight in kg/m
   *
   * @return number tension in newtons (N)
   */
  getTension(): number {
    return (
      this.string.unitWeight *
      Math.pow(this.noteFrequency, 2) *
      4 *
      Math.pow(this.diapason, 2)
    );
  }

  /**
   * Convert string tension in Kg
   */
  getTensionInKg(): number {
    return this.getTension() / this.#newtonCoefficient;
  }

  /**
   * Get the mass per unit length
   *
   * @param weight (in kg)
   * @param length (in meters)
   */
  massPerUnitLength(weight: number, length: number): number {
    return weight / length;
  }
}
