declare const map: ZoneMap;
export declare type ZoneMap = ZoneMapEntry[];
export interface ZoneMapEntry {
    windowsName: string;
    territory: string;
    iana: string[];
}
export default map;
