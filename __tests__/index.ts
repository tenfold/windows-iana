import { findIana, findOneIana } from "../src";

describe("findOneIana()", () => {
  test("returns a IANA time zone when passed just a Windows time zone name", () => {
    expect(findOneIana("UTC-11")).toBe("Etc/GMT+11");
    expect(findOneIana("US Mountain Standard Time")).toBe("America/Phoenix");
    expect(findOneIana("Central Standard Time")).toBe("America/Chicago");
    expect(findOneIana("W. Europe Standard Time")).toBe("Europe/Berlin");
    expect(findOneIana("China Standard Time")).toBe("Asia/Shanghai");
  });

  test("returns a IANA time zone when passed just a Windows time zone name and territory", () => {
    expect(findOneIana("UTC-11", "UM")).toBe("Pacific/Midway");
    expect(findOneIana("US Mountain Standard Time", "CA")).toBe("America/Dawson_Creek");
    expect(findOneIana("Central Standard Time", "US")).toBe("America/Chicago");
    expect(findOneIana("W. Europe Standard Time", "DE")).toBe("Europe/Berlin");
    expect(findOneIana("China Standard Time", "HK")).toBe("Asia/Hong_Kong");
  });

  test("throws if the Windows time zone cannot be converted", () => {
    expect(() => findOneIana("fake time zone")).toThrow();
  });

  test("throws if the territory cannot be converted", () => {
    expect(() => findOneIana("US Mountain Standard Time", "fake")).toThrow();
  });
});

describe("findIana()", () => {
  test("returns a list of IANA time zones when passed just a Windows time zone name", () => {
    expect(findIana("UTC-11")).toEqual(["Etc/GMT+11"]);
    expect(findIana("US Mountain Standard Time")).toEqual(["America/Phoenix"]);
    expect(findIana("Central Standard Time")).toEqual(["America/Chicago"]);
    expect(findIana("W. Europe Standard Time")).toEqual(["Europe/Berlin"]);
    expect(findIana("China Standard Time")).toEqual(["Asia/Shanghai"]);
  });

  test("returns a list of IANA time zones when passed just a Windows time zone name and territory", () => {
    expect(findIana("UTC-11", "UM")).toEqual(["Pacific/Midway"]);
    expect(findIana("US Mountain Standard Time", "CA")).toEqual([
      "America/Dawson_Creek",
      "America/Creston",
      "America/Fort_Nelson",
    ]);
    expect(findIana("Central Standard Time", "US")).toEqual([
      "America/Chicago",
      "America/Indiana/Knox",
      "America/Indiana/Tell_City",
      "America/Menominee",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
    ]);
    expect(findIana("W. Europe Standard Time", "DE")).toEqual(["Europe/Berlin", "Europe/Busingen"]);
    expect(findIana("China Standard Time", "HK")).toEqual(["Asia/Hong_Kong"]);
  });

  test("throws if the Windows time zone cannot be converted", () => {
    expect(() => findIana("fake time zone")).toThrow();
  });

  test("throws if the territory cannot be converted", () => {
    expect(() => findIana("US Mountain Standard Time", "fake")).toThrow();
  });
});
