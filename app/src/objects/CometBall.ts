import { Position } from '../utils/Types';

/**
 * This class is used for CometBall game objects
 * 
 */
export default class CometBall {
    private _context: CanvasRenderingContext2D;
    private _position: Position;
    private _radius: number;
    private _image: CanvasImageSource | null;

    constructor(context: CanvasRenderingContext2D, radius: number) {
        this._context = context;
        this.radius = radius;
        this.reset();
    }

    get position(): Position { return this._position; }
    set position(pos) {
        this._position = pos;
    }

    get radius(): number { return this._radius; }
    set radius(s) {
        this._radius = s * 16;
    }

    reset(): void {
        this.position = { x: 400, y: 400 };
        // this.speed = { x: 4, y: -2 };
    }

    draw(): void {
        this._context.beginPath();
        if (this._image) {
            this._context.drawImage(this._image, this.position.x, this.position.y, this.radius, this.radius);
        } else {
            this._context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        }
        this._context.fill();
    }

    update(deltaTime: number): void {
        // this.position.x += this.speed.x;
        // this.position.y += this.speed.y;

        // // wall on left or right
        // if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
        // this.speed.x = -this.speed.x;
        // }

        // // wall on top
        // if (this.position.y < 0) {
        // this.speed.y = -this.speed.y;
        // }

        // // bottom of game
        // if (this.position.y + this.size > this.gameHeight) {
        // this.game.lives--;
        // this.reset();
        // }

        // if (detectCollision(this, this.game.paddle)) {
        // this.speed.y = -this.speed.y;
        // this.position.y = this.game.paddle.position.y - this.size;
        // }
    }
}