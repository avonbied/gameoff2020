const canvas: HTMLCanvasElement = document.getElementById('app') as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

import CometBall from './objects/CometBall';

let ctx = canvas.getContext('2d');
let lastTime = 0, place = 0, nextTick = 0;

let ball = new CometBall(ctx, 1);
const gameLoop = (timestamp: number) => {
    let deltaTime = (timestamp - lastTime) / 1000;
    if (Math.round(deltaTime) > 0.5) {
        lastTime = timestamp;
        place = (place + 1) % 10;
    }
    ctx.fillStyle = '#fff';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#f00';
    ctx.fillRect(100, 100*place, 200, 200);
    ctx.fill();
    ball.draw();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);