import map, { ZoneMap } from "./time-zone-map";

export const findIana = (windowsTimeZone: string, territory: string = "001"): string[] => {
  const entry = map.find(
    ({ windowsName: itemName, territory: itemTerritory }) =>
      itemName === windowsTimeZone && itemTerritory === territory,
  );
  if (typeof entry === "undefined") {
    throw new Error(`Could not find { name: ${windowsTimeZone}, territory: ${territory} }`);
  }

  return entry.iana;
};

export const findOneIana = (windowsTimeZone: string, territory: string = "001"): string => {
  return findIana(windowsTimeZone, territory)[0];
};
