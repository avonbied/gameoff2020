import { AbstractGameObject } from './GameObject';

/**
 * This class is used for CometBall game objects
 * 
 */
export default class CometBall extends AbstractGameObject {
    private _radius: number;

    private _isColliding: number;

    constructor(radius: number) {
        super();
        this.isColliding = 0;
        this.radius = radius;

        this.clear();
    }

    get radius(): number { return this._radius; }
    set radius(s) {
        this._radius = s * 16;
    }
    get isColliding(): number {
        return this._isColliding;
    }
    set isColliding(colliding: number) {
        this._isColliding = colliding;
    }

    update(timeDelta: number): void {
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
        if (this._isColliding == -1) {
            this.speed.vx = -this.speed.vx;
            console.log(this);
        } else if (this._isColliding == 1) {
            this.speed.vy = -this.speed.vy;
            console.log(this);
        }
        this.isColliding = 0;
        this._position.add(this._speed.scale(timeDelta));
    }


    draw(context: CanvasRenderingContext2D): void {
        // context.beginPath();
        // if (this._image) {
        //     context.drawImage(this._image, this.position.x, this.position.y, this.radius, this.radius);
        // }
        context.save();

        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context.closePath();

        context.fill();
        context.stroke();
        context.restore();
    }

    clear(): void {
        this.position = {x: 400, y: 400};
        this.speed = {vx: 20, vy: 70};
    }
}