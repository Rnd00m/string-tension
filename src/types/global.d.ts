import { GuitarString } from "@/scripts/classes/GuitarString";

export {};

declare global {
  type GuitarStringTension = {
    note: string | null;
    string: GuitarString | null;
    tension: number | 0;
  };
}
