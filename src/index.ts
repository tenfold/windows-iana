import map, { ZoneMap } from "./time-zone-map";

export const findIana = (windowsTimeZone: string, territory: string = "001"): string[] | undefined => {
  const entry = map.find(
    ({ windowsName: itemName, territory: itemTerritory }) =>
      itemName === windowsTimeZone && itemTerritory === territory,
  );

  if (typeof entry === "undefined") return undefined;

  return entry.iana;
};

export const findOneIana = (windowsTimeZone: string, territory: string = "001"): string | undefined => {
  const result = findIana(windowsTimeZone, territory);
  if (typeof result === "undefined") return undefined;
  return result[0];
};
