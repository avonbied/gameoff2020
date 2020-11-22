export class Velocity2D implements Velocity {
    vx: number;
    vy: number;
    constructor(vx?: number, vy?: number) {
        this.vx = vx ?? 0;
        this.vy = vy ?? 0;
    }
    public set(args: Velocity): this {
        this.vx = args.vx;
        this.vy = args.vy;
        return this;
    }
    public scale(scalar: number): Velocity {
        return new Velocity2D(this.vx * scalar, this.vy * scalar);
    }
}

export interface Velocity {
    vx: number,
    vy: number
}