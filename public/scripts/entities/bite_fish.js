class BiteFish extends Fish {
  constructor(options) {
    super(options); // call super to run code inside `Fish`'s constructor
    this.imageUri = '/images/bite-fish.gif'; // set the image
    this.isTasty = false;
  }

  updateOneTick() {
    super.updateOneTick();
    // look for fish near the current position of the BiteFish
    // getProximateDenizens returns an array
    // Object.values(this.denizens) -> returns all the values of the denizens array
    // filters them based on those that are isNearCenter - aka within the radius set (100)
    let shouldEat = this.tank.getProximateDenizens(this.position, 50);
    // if there are values in the array, then they are close enough to be eaten
    if (shouldEat.length > 0) {
      this.eat(shouldEat);
    }
  }

  // for every fish in the shouldEat arr, we should kill the fish
  eat(shouldEat) {
    for (let fish of shouldEat) {
      // eat other fish, but not other BiteFish
      if (fish.isTasty) {
        fish.kill();
      }
    }
  }
}
