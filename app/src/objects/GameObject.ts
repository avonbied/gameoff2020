import { Position, Position2D } from '../utils/Position';
import { Velocity, Velocity2D } from '../utils/Velocity';

export interface GameObject {
    position: Position;
    speed: Velocity;

    update(timeDelta: number): void;
    draw(context: CanvasRenderingContext2D): void;
    clear(): void;
}

export abstract class AbstractGameObject implements GameObject {
    protected _position: Position2D;
    protected _speed: Velocity2D;

    constructor() {
        this._position = new Position2D();
        this._speed = new Velocity2D();
    }

    get position(): Position { return this._position; }
    set position(pos: Position) {
        this._position.set(pos);
    }
    get speed(): Velocity { return this._speed; }
    set speed(speed: Velocity) {
        this._speed.set(speed);
    }

    abstract update(timeDelta: number): void;
    abstract draw(context: CanvasRenderingContext2D): void;
    abstract clear(): void;
}

type StaticBody = {
    isStatic: true;
    vector: void;
}
type DynamicBody = {
    isStatic: false;
    vector: { dx: number, dy: number };
}

