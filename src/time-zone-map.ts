import * as fs from "mz/fs";
import * as path from "path";
import * as xml2js from "xml2js";

export type WindowsIanaMap = Map<WindowsTimeZone, string[]>;

export interface WindowsTimeZone {
  name: string;
  territory: string;
}

const readFile = async (): Promise<WindowsIanaMap> => {
  const map = new Map() as WindowsIanaMap;
  const fileContent = await fs.readFile(path.join(__dirname, "../windowsZones.xml"), "utf-8");

  let xmlObject = await new Promise<any>((resolve, reject) => {
    xml2js.parseString(fileContent, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

  xmlObject = await xmlObject.supplementalData.windowsZones[0].mapTimezones[0].mapZone;

  xmlObject.forEach(({ $: entry }) => {
    map.set({ name: entry.other, territory: entry.territory }, entry.type.split(" "));
  });

  return map;
};

export default readFile;
