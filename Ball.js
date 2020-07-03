class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body);
  }
  display() {
    push();
    var pos = this.body.position;
    ellipseMode(CENTER);
    fill("green");
    ellipse(pos.x,pos.y,this.radius,this.radius);
    pop();
  }
}
