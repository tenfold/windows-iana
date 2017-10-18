import loapMap, { WindowsIanaMap } from "./time-zone-map";

export const findIana = async (windowsTimeZone: string, territory: string = "001"): Promise<string[]> => {
  const timeZoneMap = await loapMap();
  const key = findMapKey(timeZoneMap, windowsTimeZone, territory);
  const ianaOptions = timeZoneMap.get(key);
  if (typeof ianaOptions === "undefined") {
    throw new Error(`Could not get value for key ${key}`);
  }

  return ianaOptions;
};

export const findOneIana = async (windowsTimeZone: string, territory: string = "001"): Promise<string> => {
  return (await findIana(windowsTimeZone, territory))[0];
};

function findMapKey(map: WindowsIanaMap, name: string, territory: string) {
  const keys = map.keys();

  while (true) {
    const item = keys.next();
    if (item.done) {
      throw new Error(`Could not find key { name: ${name}, territory: ${territory} }`);
    }

    if (item.value.name === name && item.value.territory === territory) {
      return item.value;
    }
  }
}
