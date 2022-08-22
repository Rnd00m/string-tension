export class GuitarString {
  constructor(
    public name: string,
    public size: number, // Size of the string in inches (most common usage of string size)
    public unitWeight: number, // Weight of the string in kg
    public type: string
  ) {}

  getSizeInMeter(): number {
    return this.size / 39.37;
  }
}
