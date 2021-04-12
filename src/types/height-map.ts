import { Err, Ok, Result } from "neverthrow";
import { EsriGridData } from "../interfaces/EsriGridData";

export class HeightMap {
    generate(data: EsriGridData): Result<string, Error>
    {
        let canvas: HTMLCanvasElement = document.createElement("CANVAS") as HTMLCanvasElement;
        canvas.width = data.properties.nCols;
        canvas.height = data.properties.nRows;
        let context: CanvasRenderingContext2D|null = canvas.getContext("2d");

        if (context) {
            let canvasData: ImageData = context.getImageData(0, 0, canvas.width, canvas.height);
            for (let y: number = 0; y < canvas.height; y++)
            {
                let rowRasterValues: Array<number> = data.rasterValues[y];
                for (let x: number = 0; x < canvas.width; x++)
                {
                    let b: number = this.calculateBrightness(rowRasterValues[x], data);
                    this.drawPixel(canvasData, canvas.width, x, y, b, b, b, 255);
                }
            }

            context.putImageData(canvasData, 0, 0);
            
            return new Ok(canvas.toDataURL("image/png"));
        }

        return new Err(new Error("Canvas has no context"));
    }

    calculateBrightness(value: number, data: EsriGridData): number {
        if (value === data.properties.noDataValue || data.maxValue === 0) {
            value = 0;
        }

        // Convert elevation to value based on 256 greyscale 
        return (value / data.maxValue) * 255;
    }

    drawPixel(canvasData: ImageData, width: number, x: number, y: number, r: number, g: number, b: number, a: number) {
        let index: number = (x + y * width) * 4;

        canvasData.data[index + 0] = r;
        canvasData.data[index + 1] = g;
        canvasData.data[index + 2] = b;
        canvasData.data[index + 3] = a;
     }
}