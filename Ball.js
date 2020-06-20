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
    World.add(world,this.body);
  }
  display() {
    pop();
    var pos = this.body.position;
    ellipseMode(CENTER);
    fill("green");
    ellipse(pos.x,pos.y,this.radius);
    push();
  }
}
