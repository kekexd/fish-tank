class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/biteFish.png';
    this.height = options.height || 150;
    this.width = options.width || 150;
    this.surgeSecondsLeft = 0;
    this.maxSurge = 1.0;
    this.surgMult = 3.0;
    this.eatable = false;
    this.fishesInside = 0;
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
    const biteFishPosition = this.position;
    let nearByFishes = window.fishtank.getProximateDenizens(biteFishPosition, 100);
    //console.log(nearByFishes)
    nearByFishes.forEach((fish) => {
      if(fish.eatable || fish.eatableByBite){
        fish.kill()
      }
    })
  }
}
