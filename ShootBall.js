class ShootBall{
    constructor(bodyA1, bodyB1){
        var options = {
            bodyA: bodyA1.body,
            pointB: bodyB1.body,
            stiffness: 0.04,
            length: 10
        }
        this.body = Constraint.create(options);
        World.add(world,this.body)

    }

    attach(body){
        this.body.position = body
    }

    shoot(){
        this.body.position = null;
    }
    display(){
        // if(this.sling.bodyA){
        //     var bodyA = this.sling.bodyA.position;
        //     var pointB = this.pointB;
        //}
        strokeWeight(3);
    }

}