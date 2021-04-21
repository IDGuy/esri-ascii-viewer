import { Err, Ok, Result } from "neverthrow";
import { EsriGridData } from "../interfaces/EsriGridData";
import { EsriGridProperties } from "../interfaces/EsriGridProperties";
import { Range } from "../interfaces/Range";

export class AsciiGridLoader {
    file: File;

    constructor(file: File) {
        this.file = file;
    }

    async parse(): Promise<Result<EsriGridData, Error>>
    {
        let ext: string = this.file.name.substring(this.file.name.lastIndexOf('.') + 1).toLowerCase();
        if (ext === "asc")
        {
            let rows: Array<string> = await this.readFile(this.file);

            try
            {
                let properties: EsriGridProperties = this.parseEsriGridProperties(rows);
                let rasterValues: Array<Array<number>> = this.parseEsriGridRasterValues(rows, properties.noDataValue);
                let rasterValuesRange: Range = this.getRasterValueRange(rasterValues);

                return new Ok({
                    properties: properties,
                    rasterValues: rasterValues,
                    minValue: rasterValuesRange.min,
                    maxValue: rasterValuesRange.max
                });
            }
            catch (ex)
            {
                return new Err(new Error("Esri ascii grid file is not valid"));
            }
        }
        else
        {
            return new Err(new Error("File must have extension .asc"));
        }
    }

    parseEsriGridProperties(rows:Array<string>): EsriGridProperties {
        let props: EsriGridProperties =
        {
            nCols: this.getEsriGridProperty<number>(rows, "ncols"),
            nRows: this.getEsriGridProperty<number>(rows, "nrows"),
            xllCorner: this.getEsriGridProperty<number>(rows, "xllcorner"),
            yllCorner: this.getEsriGridProperty<number>(rows, "yllcorner"),
            cellSize: this.getEsriGridProperty<number>(rows, "cellsize"),
            noDataValue: this.getOptionalEsriGridProperty<number>(rows, "noDataValue")
        };

        return props;
    }

    parseEsriGridRasterValues(rows: Array<string>, noDataValue?: number): Array<Array<number>> {
        let rasterValues = new Array<Array<number>>();
        for (let rowIndex = 6; rowIndex < rows.length; rowIndex++) {
            let rowText: string = rows[rowIndex];
            if (rowText) {
                let rowData: Array<string> = rows[rowIndex].split(" ");
                let rowValues: Array<number> = new Array<number>();

                for (let colIndex = 0; colIndex < rowData.length; colIndex++) {
                    let value = 0;
                    if (value === noDataValue) {
                        value = 0;
                    }
                    else {
                        value = parseFloat(rowData[colIndex]);
                        if (isNaN(value))
                        {
                            throw Error(`Invalid value "${ rowData[colIndex] }" found line ${ rowIndex }`);
                        }
                    }

                    rowValues.push(value);
                }
                rasterValues.push(rowValues);
            }
        }

        return rasterValues;
    }

    getEsriGridProperty<T>(rows:Array<string>, key:string): T {
        let value: T|undefined = this.getOptionalEsriGridProperty(rows, key);
        if (value === undefined)
            throw new Error(`Property ${ key } does not exist`);

        return value as T;
    }

    getOptionalEsriGridProperty<T>(rows:Array<string>, key:string): T|undefined {
        // Esri Grid Properties are found in the first 6 rows
        for (let i:number = 0; i < 6; i++) {
            let nameValuePair:Array<string> = rows[i].split(' ');
            if (nameValuePair[0] === key) {
                return nameValuePair[1] as any;
            }
        }

        return undefined;
    }

    getRasterValueRange(rows: Array<Array<number>>, noDataValue?: number): Range {
        let min: number|null = null;
        let max: number = 0;

        for (let y: number = 0; y < rows.length; y++) {
            let yRasterValues: Array<number> = rows[y];
            for (let x: number = 0; x < yRasterValues.length; x++) {
                let value: number = yRasterValues[x];
                if (min === null || value < min) {
                    min = value;
                }
                if (value > max) {
                    max = value;
                }
            }
        }

        return {
            min: min,
            max: max
        } as Range;
    }

    readFile(file: File): Promise<Array<string>> {
        return new Promise((resolve, reject) => {
            let content: string = "";
            const reader = new FileReader();

            // Wait till complete
            reader.onload = function(e: any) {
                content = e.target.result;
                if (!content) {
                    return new Array<String>();
                }
                else {
                    resolve(content.split(/\r\n|\n/));
                }
            };

            // Make sure to handle error states
            reader.onerror = function(e: any) {
                reject(e);
            };
          
            reader.readAsText(file);
        });
    }
}