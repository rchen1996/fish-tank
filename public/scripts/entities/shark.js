class Shark extends BiteFish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/shark.png';
    this.isTasty = false;
  }

  updateOneTick() {
    super.updateOneTick();
  }

  eat(shouldEat) {
    for (let fish of shouldEat) {
      // eats ONLY bitefish & cannot be eaten by bitefish
      if (fish instanceof Fish) {
        if (!fish instanceof BiteFish && !fish.isTasty) {
          fish.kill();
        }
      }
    }
  }
}
