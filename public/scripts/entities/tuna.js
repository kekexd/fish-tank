class Tuna extends BiteFish {

    constructor(options) {
      super(options);
      this.imageUri = '/images/tuna.png';
      this.height = options.height || 70;
      this.width = options.width || 100;
      this.eatableByBite = true;
    }

    onClick(event) {
    const biteFishPosition = this.position;
    let nearByFishes = window.fishtank.getProximateDenizens(biteFishPosition, 100);
      nearByFishes.forEach((fish) => {
        if(fish.eatable){
          fish.kill()
        }
      })
    }
  }
  