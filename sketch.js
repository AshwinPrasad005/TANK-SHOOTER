// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(600,600);

    background(80,80,80);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,375,400,50);
    ground.shapeColor = "green";
}

function draw() {
// Remember to update the Matter Engine and set the background.
    ground.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}