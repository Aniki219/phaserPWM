class Overworld extends Phaser.Scene {
  constructor() {
    super({key:"Overworld"})
  }

  preload () {
    this.load.spritesheet('pokedex', 'images/pokedex.png', {frameWidth: 80, frameHeight: 80})
    this.load.spritesheet('trainer', 'images/trainer.png', {frameWidth: 32, frameHeight: 64});
  }

  create () {
    this.add.image(400, 300, 'pokedex', Math.floor(Math.random()*253));
    player = new Player({
      scene: this,
      x: 32,
      y: 32
    });
    cursors = this.input.keyboard.createCursorKeys();
  }

  update () {
    player.move();
  }
}

module.exports = Overworld
