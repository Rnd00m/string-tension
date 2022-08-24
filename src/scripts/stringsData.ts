import { GuitarString } from "@/scripts/classes/GuitarString";
import { StringType } from "@/scripts/classes/StringType";

interface Tuning {
  name: string;
  notes: string[];
}

interface StringSet {
  name: string;
  strings: GuitarString[];
}

export const strings: GuitarString[] = [
  new GuitarString("PL007", 7, 0.0001937593, StringType.PlainSteelLockTwist),
  new GuitarString("PL008", 8, 0.00025322644, StringType.PlainSteelLockTwist),
  new GuitarString(
    "PL0085",
    8.5,
    0.00028590658,
    StringType.PlainSteelLockTwist
  ),
  new GuitarString("PL009", 9, 0.00032037252, StringType.PlainSteelLockTwist),
  new GuitarString(
    "PL0095",
    9.5,
    0.00035698142,
    StringType.PlainSteelLockTwist
  ),
  new GuitarString("PL010", 10, 0.0003955547, StringType.PlainSteelLockTwist),
  new GuitarString(
    "PL0105",
    10.5,
    0.00043609236,
    StringType.PlainSteelLockTwist
  ),
  new GuitarString("PL011", 11, 0.0004785944, StringType.PlainSteelLockTwist),
  new GuitarString(
    "PL0115",
    11.5,
    0.0005232394,
    StringType.PlainSteelLockTwist
  ),
  new GuitarString("PL012", 12, 0.0005696702, StringType.PlainSteelLockTwist),
  new GuitarString("PL013", 13, 0.00066860352, StringType.PlainSteelLockTwist),
  new GuitarString(
    "PL0135",
    13.5,
    0.00072092746,
    StringType.PlainSteelLockTwist
  ),
  new GuitarString("PL014", 14, 0.00077539436, StringType.PlainSteelLockTwist),
  new GuitarString("PL015", 15, 0.00089004272, StringType.PlainSteelLockTwist),
  new GuitarString("PL016", 16, 0.00101272718, StringType.PlainSteelLockTwist),
  new GuitarString("PL017", 17, 0.00114326916, StringType.PlainSteelLockTwist),
  new GuitarString("PL018", 18, 0.00128166866, StringType.PlainSteelLockTwist),
  new GuitarString("PL019", 19, 0.00142810426, StringType.PlainSteelLockTwist),
  new GuitarString("PL020", 20, 0.00158239738, StringType.PlainSteelLockTwist),
  new GuitarString("PL022", 22, 0.00191473476, StringType.PlainSteelLockTwist),
  new GuitarString("PL024", 24, 0.0022786808, StringType.PlainSteelLockTwist),
  new GuitarString("PL026", 26, 0.0026742355, StringType.PlainSteelLockTwist),
  new GuitarString(
    "NW017",
    17,
    0.00098647592,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW018",
    18,
    0.0011098747,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW019",
    19,
    0.00124059526,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW020",
    20,
    0.0013384571,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW021",
    21,
    0.00148096394,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW022",
    22,
    0.00164007872,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW024",
    24,
    0.00193884306,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW026",
    26,
    0.00226278718,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW028",
    28,
    0.00261905428,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW030",
    30,
    0.00307800488,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW032",
    32,
    0.00345498726,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW034",
    34,
    0.0038555422,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW036",
    36,
    0.00427949112,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW038",
    38,
    0.00472719118,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW039",
    39,
    0.00498809656,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW042",
    42,
    0.00576438382,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW044",
    44,
    0.00628280156,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW046",
    46,
    0.00682461328,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW048",
    48,
    0.00738999756,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW049",
    49,
    0.00768144012,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW052",
    52,
    0.00859130522,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW054",
    54,
    0.00961439004,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW056",
    56,
    0.01028585084,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW059",
    59,
    0.01146322878,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW060",
    60,
    0.01188307036,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW062",
    62,
    0.01262507026,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW064",
    64,
    0.01339064272,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW065",
    65,
    0.01382861017,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW066",
    66,
    0.01426657762,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW068",
    68,
    0.01511036812,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW070",
    70,
    0.01594790832,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW072",
    72,
    0.01680866392,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW074",
    74,
    0.01765602602,
    StringType.NickelPlatedSteelRoundWound
  ),
  new GuitarString(
    "NW080",
    80,
    0.02053866438,
    StringType.NickelPlatedSteelRoundWound
  ),
];

export const tunings: Tuning[] = [
  {
    name: "Standard",
    notes: ["E4", "B3", "G3", "D3", "A2", "E2"],
  },
  {
    name: "Drop D",
    notes: ["E4", "B3", "G3", "D3", "A2", "D2"],
  },
  {
    name: "1/2 step down",
    notes: ["Eb4", "Bb3", "F3", "C3", "G2", "Eb2"],
  },
  {
    name: "1 step down",
    notes: ["D4", "A3", "F3", "C3", "G2", "D2"],
  },
  {
    name: "Drop C",
    notes: ["D4", "A3", "F3", "C3", "G2", "C2"],
  },
  {
    name: "2 step down",
    notes: ["C4", "G3", "Eb3", "Bb2", "F2", "C2"],
  },
  {
    name: "Standard 7 strings",
    notes: ["E4", "B3", "G3", "D3", "A2", "E2", "B1"],
  },
  {
    name: "Standard 8 strings",
    notes: ["E4", "B3", "G3", "D3", "A2", "E2", "B1", "Gb1"],
  },
];

export const stringSets: StringSet[] = [
  {
    name: "EXL110 (10-46)",
    strings: getGuitarStringFromList([
      "PL010",
      "PL013",
      "PL017",
      "NW026",
      "NW036",
      "NW046",
    ]),
  },
  {
    name: "EXL120 (9-42)",
    strings: getGuitarStringFromList([
      "PL009",
      "PL011",
      "PL016",
      "NW024",
      "NW032",
      "NW042",
    ]),
  },
  {
    name: "EXL120+ (9.5-44)",
    strings: getGuitarStringFromList([
      "PL0095",
      "PL0115",
      "PL016",
      "NW024",
      "NW034",
      "NW044",
    ]),
  },
  {
    name: "EXL125 (9-46)",
    strings: getGuitarStringFromList([
      "PL009",
      "PL011",
      "PL016",
      "NW026",
      "NW036",
      "NW046",
    ]),
  },
  {
    name: "EXL130 (8-38)",
    strings: getGuitarStringFromList([
      "PL008",
      "PL010",
      "PL015",
      "NW021",
      "NW030",
      "NW038",
    ]),
  },
  {
    name: "EXL115 (11-49)",
    strings: getGuitarStringFromList([
      "PL011",
      "PL014",
      "PL018",
      "NW028",
      "NW038",
      "NW049",
    ]),
  },
  {
    name: "EXL115W (11-49)",
    strings: getGuitarStringFromList([
      "PL011",
      "PL014",
      "NW021",
      "NW028",
      "NW038",
      "NW049",
    ]),
  },
  {
    name: "EXL116 (11-52)",
    strings: getGuitarStringFromList([
      "PL011",
      "PL014",
      "PL018",
      "NW030",
      "NW042",
      "NW052",
    ]),
  },
  {
    name: "EXL117 (11-56)",
    strings: getGuitarStringFromList([
      "PL011",
      "PL014",
      "PL019",
      "NW032",
      "NW044",
      "NW056",
    ]),
  },
  {
    name: "EXL110-7 (10-59)",
    strings: getGuitarStringFromList([
      "PL010",
      "PL013",
      "PL017",
      "NW026",
      "NW036",
      "NW046",
      "NW059",
    ]),
  },
  {
    name: "EXL120-7 (9-54)",
    strings: getGuitarStringFromList([
      "PL009",
      "PL011",
      "PL016",
      "NW024",
      "NW032",
      "NW042",
      "NW054",
    ]),
  },
  {
    name: "EXL120-8 (9-65)",
    strings: getGuitarStringFromList([
      "PL009",
      "PL011",
      "PL016",
      "NW024",
      "NW032",
      "NW042",
      "NW054",
      "NW065",
    ]),
  },
  {
    name: "EXL140-8 (10-74)",
    strings: getGuitarStringFromList([
      "PL010",
      "PL013",
      "PL017",
      "NW030",
      "NW042",
      "NW054",
      "NW064",
      "NW074",
    ]),
  },
];

export function getGuitarStringFromList(list: string[]): GuitarString[] {
  return strings.filter((string) => list.includes(string.name));
}
