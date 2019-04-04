class GoFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/nemo.png';
    this.surgeSecondsLeft = 0;
    this.maxSurge = 1.0;
    this.surgMult = 3.0;
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (1 + this.surgeSecondsLeft * this.surgMult));
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);
  }


  onClick(event) {
    this.surgeSecondsLeft = this.maxSurge;
    // const xVel = randRangeInt(-300, 300);
    // const yVel = 400 - Math.abs(xVel);
    const bubbles = new Bubble({
      tank: this.tank,
      position: this.position,
      //velocity: new Vector(xVel, yVel),
    });
  }
}

