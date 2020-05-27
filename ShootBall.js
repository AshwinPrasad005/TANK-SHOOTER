class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.body = Constraint.create(options);

    }

    attach(body){
        this.image.body = body
    }

    shoot(){
        this.image.body = null;
    }

    display(){
        pop();
        push();

    }

}
                  