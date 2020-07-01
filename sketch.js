// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground,tanker1,cannonball1,shhotball1,ball1,ball2,ball3;

var gameState = "onSling";

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
     createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300,575,600,50);
    ball1 = new Ball(300,300,25,25);
    ball2 = new Ball(350,250,25,25);
    ball3 = new Ball(400,200,25,25);
    tanker1 = new Tanker(100,525,100,75);
    cannonball1 = new CannonBall(100,425,20,20);
    shhotball1 = new ShootBall(cannonball1.body,{x:100,y:525});
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(80,80,80);
    Engine.update(engine);
    ground.display();
    ball1.display();
    ball2.display();
    ball3.display();
    tanker1.display();
    cannonball1.display();
    shhotball1.display();
    //keyPressed()
}


function mouseDragged() {
    // Call the shoot method for the cannon.
    if (gameState!=="shoot"){
        Matter.Body.setPosition(cannonball1.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
  shhotball1.shoot();
  gameState = "shoot";
}

function keyPressed(){
    if(keyCode === 32){
        cannonball1.x = 100;
        cannonball1.y = 425;
        shhotball1.attach(cannonball1.body);
    }
}