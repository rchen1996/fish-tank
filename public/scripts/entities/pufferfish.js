class Pufferfish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/pufferfish.png'
    this.isTasty = true;
    this.isToxic = true;
  }

  onClick(event) {
    this.kill();
  }

}
