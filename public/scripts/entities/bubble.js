class Bubble extends Fish {
  constructor(options){
    super(options)
    this.imageUri = '/images/bubble.png';
    this.height = options.height || 80;
    this.width = options.width || 80;
    this.maxSwimSpeed = 100;
  }

  onClick(event) {
    this.kill()
  }
}