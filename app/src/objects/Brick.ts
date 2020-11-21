import { Position } from '../utils/Types';

export default class Brick {
    private _context: CanvasRenderingContext2D;
    
    private _position: Position;

    private width: number;
    private height: number;

    private health: number;
    private hasPowerUp: boolean;

    constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        this._context = context;
        this.width = width;
        this.height = height;
    }

    get position(): Position { return this._position; }
    set position(pos) {
        this._position = pos;
    }


    draw() {
        this._context.beginPath();
        this._context.fillStyle = 'blue';
        this._context.fillRect(this.position.x, this.position.y, this.width, this.height);
        this._context.fill();
        this._context.closePath();
    }
}