class Shark extends BiteFish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/shark.png';
    this.isTasty = false;
  }

  updateOneTick() {
    super.updateOneTick();
    let shouldEat = this.tank.getProximateDenizens(this.position, 50);
    if (shouldEat.length > 0) {
      this.eat(shouldEat);
    }
  }

  eat(shouldEat) {
    for (let fish of shouldEat) {
      // eats ONLY bitefish & cannot be eaten by bitefish
      if (fish !== this && !fish.isTasty) {
        fish.kill();
      }
    }
  }
}
