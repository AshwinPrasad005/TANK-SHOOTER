class CannonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.image = loadImage("assets/cannonball.png");
    this.body = Bodies.rectangle(x,y,options);
  };

  display(){
    
    //pop();
    //translate(this.body.position.x,this.body.position.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y);
  };
};
