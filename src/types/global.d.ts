import { GuitarString } from "@/scripts/classes/GuitarString";

export {};

declare global {
  type GuitarStringTension = {
    note: string;
    string: GuitarString;
    tension: number;
  };
}
