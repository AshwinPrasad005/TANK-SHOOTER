// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground,tanker1,cannonball1,shhotball1,ball1,ball2,ball3;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
     createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300,575,600,50);
    ball1 = new Ball(300,300,25,25);
    tanker1 = new Tanker(100,525,50,50);
    cannonball1 = new CannonBall(100,425,20,20);
    shhotball1 = new ShootBall(cannonball1.body,{x:100,y:525});
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(80,80,80);
    Engine.update(engine);
    ground.display();
    ball1.display();
    tanker1.display();
    cannonball1.display();
    shhotball1.display();
    //keyPressed();
}


function mouseDragged() {
    // Call the shoot method for the cannon.
    Matter.Body.setPosition(cannonball1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  shhotball1.shoot();
}

function keyPressed(){
    if(keyCode === 32){
        shhotball1.attach(cannonball1.body)
        cannonball1.position.x = 75;
        cannonball1.position.y = 400
    }
}
