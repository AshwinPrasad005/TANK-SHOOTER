class CannonBall {
  constructor(x, y,width,height) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.image = loadImage("canonBall.png");
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  };

  display(){
    push();
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
    pop();
  };
};
