class Starter extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/volcano.jpg';
    this.position.y += this.height;
  }

  update(t) {
    // no physics for Starter
  }

  onClick(event) {
    setTimeout(() => {
      this.height *= 1.5
    }, 50)

    setTimeout(() => {
      this.height *= 1.5
      var xVel = randRangeInt(-300, 300);
      var yVel = 400 - Math.abs(xVel);
      var s = new Seed({
        tank: this.tank,
        position: this.position,
        velocity: new Vector(xVel, yVel),
        type: this.tank.getRandomSpecies(),
      });
    }, 100)

    setTimeout(() => {
      this.height /= 1.5
    }, 150)

    setTimeout(() => {
      this.height /= 1.5
    }, 200)
  }
}
