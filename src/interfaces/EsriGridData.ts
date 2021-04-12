import { EsriGridProperties } from "./EsriGridProperties";

export interface EsriGridData
{
    properties: EsriGridProperties,
    rasterValues: Array<Array<number>>,
    minValue: number,
    maxValue: number
}