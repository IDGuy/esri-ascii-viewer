/*
    Based on https://www.playfuljs.com/realistic-terrain-in-130-lines/
*/

import { Ok, Result } from "neverthrow";
import { EsriGridData } from "../interfaces/EsriGridData";

export class TerrainGenerator {
    private map: Array<Array<number>>;
    private steepness!: number;
    private size: number;
    private max!: number;

    constructor(detail: number) {
        this.size = Math.pow(2, detail) + 1;
        this.max = this.size - 1;
        this.map = new Array<Array<number>>(this.max);
    }

    generate(cellSize: number, nCols: number, nRows: number, maxHeight: number, steepness: number): Result<EsriGridData, Error>
    {
        this.steepness = steepness;

        this.set(0, 0, this.max);
        this.set(this.max, 0, this.max / 2);
        this.set(this.max, this.max, 0);
        this.set(0, this.max, this.max / 2);

        this.divide(this.max);

        let data: EsriGridData = {
            minValue: 0,
            maxValue: maxHeight,
            properties: {
                cellSize: 1,
                nCols: nCols,
                nRows: nRows,
                xllCorner: 0,
                yllCorner: 0
            },
            rasterValues: this.map
        };

        return new Ok(data);
    }

    private get(x: number, z: number) {
        if (x < 0 || x > this.max || z < 0 || z > this.max) return -1;
        return this.map[x][z];
    };

    private set(x: number, z: number, val: number) {
        if (!this.map[x]) {
            this.map[x] = new Array<number>(this.max);
        }
        this.map[x][z] = val;
    };

    private divide(size: number) {
        var x, z, half = size / 2;
        var scale = this.steepness * size;
        if (half < 1) return;

        for (z = half; z < this.max; z += size) {
            for (x = half; x < this.max; x += size) {
                this.square(x, z, half, Math.random() * scale * 2 - scale);
            }
        }
        for (z = 0; z <= this.max; z += half) {
            for (x = (z + half) % size; x <= this.max; x += size) {
                this.diamond(x, z, half, Math.random() * scale * 2 - scale);
            }
        }
        this.divide(size / 2);
    }

    private average(values: Array<number>) {
        var valid = values.filter(function(val) { return val !== -1; });
        var total = valid.reduce(function(sum, val) { return sum + val; }, 0);
        return total / valid.length;
    }

    private square(x: number, z: number, size: number, offset: number) {
        let avg = this.average([
            this.get(x - size, z - size),   // upper left
            this.get(x + size, z - size),   // upper right
            this.get(x + size, z + size),   // lower right
            this.get(x - size, z + size)    // lower left
        ]);
        this.set(x, z, avg + offset);
    }

    private diamond(x: number, z: number, size: number, offset: number) {
        let avg = this.average([
            this.get(x, z - size),      // top
            this.get(x + size, z),      // right
            this.get(x, z + size),      // bottom
            this.get(x - size, z)       // left
        ]);
        this.set(x, z, avg + offset);
    }
}