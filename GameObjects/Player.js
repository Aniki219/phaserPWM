class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, 'trainer', 5);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.speed = 2;
  }

  move() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);

    if ((this.x % 32 == 0) && (this.y % 32 == 0)) {
      let xdir = cursors.right.isDown - cursors.left.isDown;
      let ydir = cursors.down.isDown - cursors.up.isDown;

      if (xdir != 0) {
        this.body.setVelocityX(xdir * 60 * this.speed);
        this.body.setVelocityY(0);
      } else {
        this.body.setVelocityX(0);
      }
      if (ydir != 0) {
        this.body.setVelocityX(0);
        this.body.setVelocityY(ydir * 60 * this.speed);
      } else {
        this.body.setVelocityY(0);
      }
    }
  }
}

module.exports = Player;
