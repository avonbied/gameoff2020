import * as Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    title: "Comet Breaker",
    width: window.innerWidth,
    height: window.innerHeight,
    parent: "game",
    backgroundColor: "#363636",
    scene: [],
    physics: {
        default: "arcade",
        arcade: { debug: false }
    },
};

export default new Phaser.Game(config);