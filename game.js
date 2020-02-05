const Phaser = require('phaser')
const Player = require('./GameObjects/Player.js')


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {

      }
    },
    scene: require('./scenes/Overworld.js')
};
var game = new Phaser.Game(config);
var player;
var cursors;
