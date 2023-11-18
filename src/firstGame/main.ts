import * as Phaser from 'phaser'
import Scene from "./scene";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Scene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};

const game = new Phaser.Game(config);

