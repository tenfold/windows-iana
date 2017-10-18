import { findIana, findOneIana } from "../src";

describe("findOneIana()", () => {
  test("returns a IANA time zone when passed just a Windows time zone name", async () => {
    expect(await findOneIana("UTC-11")).toBe("Etc/GMT+11");
    expect(await findOneIana("US Mountain Standard Time")).toBe("America/Phoenix");
    expect(await findOneIana("Central Standard Time")).toBe("America/Chicago");
    expect(await findOneIana("W. Europe Standard Time")).toBe("Europe/Berlin");
    expect(await findOneIana("China Standard Time")).toBe("Asia/Shanghai");
  });

  test("returns a IANA time zone when passed just a Windows time zone name and territory", async () => {
    expect(await findOneIana("UTC-11", "UM")).toBe("Pacific/Midway");
    expect(await findOneIana("US Mountain Standard Time", "CA")).toBe("America/Dawson_Creek");
    expect(await findOneIana("Central Standard Time", "US")).toBe("America/Chicago");
    expect(await findOneIana("W. Europe Standard Time", "DE")).toBe("Europe/Berlin");
    expect(await findOneIana("China Standard Time", "HK")).toBe("Asia/Hong_Kong");
  });
});

describe("findIana()", () => {
  test("returns a list of IANA time zones when passed just a Windows time zone name", async () => {
    expect(await findIana("UTC-11")).toEqual(["Etc/GMT+11"]);
    expect(await findIana("US Mountain Standard Time")).toEqual(["America/Phoenix"]);
    expect(await findIana("Central Standard Time")).toEqual(["America/Chicago"]);
    expect(await findIana("W. Europe Standard Time")).toEqual(["Europe/Berlin"]);
    expect(await findIana("China Standard Time")).toEqual(["Asia/Shanghai"]);
  });

  test("returns a list of IANA time zones when passed just a Windows time zone name and territory", async () => {
    expect(await findIana("UTC-11", "UM")).toEqual(["Pacific/Midway"]);
    expect(await findIana("US Mountain Standard Time", "CA")).toEqual([
      "America/Dawson_Creek",
      "America/Creston",
      "America/Fort_Nelson",
    ]);
    expect(await findIana("Central Standard Time", "US")).toEqual([
      "America/Chicago",
      "America/Indiana/Knox",
      "America/Indiana/Tell_City",
      "America/Menominee",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
    ]);
    expect(await findIana("W. Europe Standard Time", "DE")).toEqual(["Europe/Berlin", "Europe/Busingen"]);
    expect(await findIana("China Standard Time", "HK")).toEqual(["Asia/Hong_Kong"]);
  });
});
