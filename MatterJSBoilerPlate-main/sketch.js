var ball;
var floor;
var wall1;
var wall2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

var ball_options = {
	isStatic:false,
	restituition:0.3,
	friction:0,
	density:1.2
}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(260,100,30,ball_options);
	World.add(world,ball);
	Engine.run(engine);
	
var floor_options = {
	isStatic:true
}
	floor = Bodies.rectangle(width/2,600,width,20,floor_options);
	World.add(world,floor);

var wall1_options = {
		isStatic:true
	}
	wall1 = Bodies.rectangle(1100,550,20,120,wall1_options);
	World.add(world,wall1);

var wall2_options = {
	isStatic:true
}	
wall2 = Bodies.rectangle(1250,550,20,120,wall2_options);
	World.add(world,wall2);
}


function draw() {
  rectMode(CENTER);
  background(0);
	
  ellipse(ball.position.x,ball.position.y);	
	rect(floor.position.x,floor.position.y,width,20);
    rect(wall1.position.x,wall1.position.y,20,120);
	rect(wall2.position.x,wall2.position.y,20,120);
	drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:100,y:-100})
	}
}


