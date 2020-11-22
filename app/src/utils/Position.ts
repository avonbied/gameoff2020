import { Velocity } from "./Velocity";

export class Position2D implements Position {
    x: number;
    y: number;
    constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }
    public set(args: Position): this {
        this.x = args.x;
        this.y = args.y;
        return this;
    }
    public add(args: Velocity): this {
        this.x += args.vx;
        this.y += args.vy;
        return this;
    }
};

export interface Position {
    x: number;
    y: number;
}