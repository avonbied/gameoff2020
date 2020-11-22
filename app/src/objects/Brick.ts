import { AbstractGameObject } from './GameObject';

export default class Brick extends AbstractGameObject {

    private _width: number;
    private _height: number;

    private health: number;
    private hasPowerUp: boolean;

    constructor(width: number, height: number) {
        super();
        this._width = width;
        this._height = height;

        this.clear();
    }

    update(timeDelta: number): void {
        this._position.add(this._speed.scale(timeDelta));
        // console.table({timeDelta, v: this._v, p: this.position });
    }
    draw(context: CanvasRenderingContext2D): void {
        context.save();

        
        context.beginPath();
        context.rect(this.position.x, this.position.y, this._width, this._height);
        context.closePath();
        
        context.fillStyle = 'blue';
        context.strokeStyle = 'green';
        context.lineWidth = 4;
        context.stroke();
        context.fill();
        // Clears any residual
        context.restore();
    }
    clear(): void {
        this.position = {x: 500, y: 300};
        this.speed = {vx: 20, vy: 30};
    }
}