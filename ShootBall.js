class ShootBall{
    constructor(bodyA1, bodyB1){
        var options = {
            bodyA: bodyA1.body,
            pointB: bodyB1.body,
            stiffness: 0.04,
            length: 10
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);

    }

    attach(body){
        this.body.position = body
    }

    shoot(){
        this.body.position = null;
    }
    display(){
         strokeWeight(3);
         fill("black");
         line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y);
    }

}