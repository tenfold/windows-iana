"use strict";
exports.__esModule = true;
var time_zone_map_1 = require("./time-zone-map");
exports.findIana = function (windowsTimeZone, territory) {
    if (territory === void 0) { territory = "001"; }
    var entry = time_zone_map_1["default"].find(function (_a) {
        var itemName = _a.windowsName, itemTerritory = _a.territory;
        return itemName === windowsTimeZone && itemTerritory === territory;
    });
    if (typeof entry === "undefined")
        return undefined;
    return entry.iana;
};
exports.findOneIana = function (windowsTimeZone, territory) {
    if (territory === void 0) { territory = "001"; }
    var result = exports.findIana(windowsTimeZone, territory);
    if (typeof result === "undefined")
        return undefined;
    return result[0];
};
exports.findWindows = function (ianaTimeZone) {
    var entry = time_zone_map_1["default"].find(function (_a) {
        var iana = _a.iana;
        return iana.indexOf(ianaTimeZone) > -1;
    });
    return entry && entry.windowsName;
};
//# sourceMappingURL=index.js.map