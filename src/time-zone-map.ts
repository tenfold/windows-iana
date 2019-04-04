import mapContent = require("../windowsZones.json");

const map: ZoneMap = mapContent as any;

export type ZoneMap = ZoneMapEntry[];

export interface ZoneMapEntry {
  windowsName: string;
  territory: string;
  iana: string[];
}

export default map;
