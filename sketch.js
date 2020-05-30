// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground,tanker1,cannonball1;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
     createCanvas(600,600);

    background(0,0,0);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300,575,600,50);
    ground.shapeColor = "green";
    tanker1 = new Tanker(100,500,70,100);
    cannonball1 = new CannonBall(100,500);
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(80,80,80);
    Engine.update(engine);
    ground.display();
    tanker1.display();
    cannonball1.display();
    keyReleased();
}


function keyReleased() {
    // Call the shoot method for the cannon.
    if(keyCode == 32){
        cannonball1.shoot();
    }
}