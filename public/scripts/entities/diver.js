class Diver extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/diver.png';
    this.height = options.height || 200;
    this.width = options.width || 200;
    this.eatable = false;
  }
  
  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    //console.log('delta:',delta)
    delta.x = 0
    delta.y = -2
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
  }
  }