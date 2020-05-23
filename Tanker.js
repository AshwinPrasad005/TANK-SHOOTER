class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body)

    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        //translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        //rotate(angle);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    };
}
