class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.body = Constraints.create(options);
        World.add(world,this.body)

    }

    attach(body){
        this.body.position = body
    }

    shoot(){
        this.body.position = null;
    }
    display(){
        if(this.sling.bodyA){
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
        }
    }

}