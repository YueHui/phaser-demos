import * as Phaser from 'phaser'
import Scene1 from "./scene1";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Scene1,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    }
};

const game = new Phaser.Game(config);