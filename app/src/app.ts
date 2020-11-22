const canvas: HTMLCanvasElement = document.getElementById('app') as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

import Brick from './objects/Brick';
import CometBall from './objects/CometBall';
import { outOfBounds } from './utils/Functions';

let ctx = canvas.getContext('2d');
let lastTime = 0, place = 0, nextTick = 0;

let ball = new CometBall(1);
let brick = new Brick(50, 100);
let collisionDir: number = 0;
const gameLoop = (timestamp: number) => {
    let timeDelta = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    place = (place + 1) % 10;
    
    ctx.fillStyle = '#f00';
    ctx.fillRect(100, 100*place, 200, 200);
    ctx.fill();
    ball.update(timeDelta);
    ball.draw(ctx);
    brick.update(timeDelta);
    if ((collisionDir = outOfBounds({x: canvas.width, y: canvas.height}, ball.position)) != 0) {
        ball.isColliding = collisionDir;
    }
    brick.draw(ctx);
    ball.draw(ctx);
    ctx.restore();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);