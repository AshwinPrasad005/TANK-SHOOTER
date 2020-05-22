class Ground{
    constructor(x,y,width,height){

        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        //var angle = this.body.angle;
        push();
        //translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        //rotate(angle);
        rect(this.body,x,y,400,20);
        pop();
    }
}