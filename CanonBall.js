class CannonBall {
  constructor(x, y,radius) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.image = loadImage("canonball.png");
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
  };

  display(){
    
    //pop();
    //translate(this.body.position.x,this.body.position.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.radius);
    push();
  };
};
