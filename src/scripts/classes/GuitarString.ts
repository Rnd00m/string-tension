export class GuitarString {
  constructor(
    public name: string,
    public size: number, // Size of the string in inches (most common usage of string)
    public unitWeight: number, // Weight of the string in kg
    public type: string
  ) {
    this.name = name;
    this.size = size;
    this.unitWeight = unitWeight;
    this.type = type;
  }

  getSizeInMeter(): number {
    return this.size / 39.37;
  }
}
