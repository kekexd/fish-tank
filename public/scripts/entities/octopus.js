class Octopus extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/octopus.png';
    this.height = options.height || 80;
    this.width = options.width || 80;
  }

  onClick(event) {
    this.makeNewVelocity(100);
  }
}
