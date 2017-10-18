windows-iana
---

This library exports two functions to help convert from Windows time zones to IANA time zones (based on [this mapping definition](https://unicode.org/repos/cldr/trunk/common/supplemental/windowsZones.xml)).

# Installation

Add the dependency to your project with `npm install --save windows-iana` or `yarn add windows-iana`.

# Usage

The library exports `findIana()`, which will return an array of possible IANA time zones, or `findOneIana()`, which will return just one string.

Please note that both functions **return promises**.

## `findOneIana()`

```
import { findOneIana } from "windows-iana";

findOneIana("Romance Standard Time")
  .then((result) => {
    console.log(result); // "Europe/Paris"
  });
```

You may also pass the territory code as a second parameter (have a look again at the [mapping by unicode.org](https://unicode.org/repos/cldr/trunk/common/supplemental/windowsZones.xml) for more details).

```
import { findOneIana } from "windows-iana";

findOneIana("Romance Standard Time", "ES")
  .then((result) => {
    console.log(result); // "Europe/Madrid"
  });
```

## `findIana()`

```
import { findIana } from "windows-iana";

findIana("Romance Standard Time")
  .then((result) => {
    console.log(result); // ["Europe/Paris"]
  });
```

You may also pass the territory code to `findIana()`.

```
import { findIana } from "windows-iana";

findIana("Romance Standard Time", "ES")
  .then((result) => {
    console.log(result); // ["Europe/Madrid", "Africa/Ceuta"]
  });
```
