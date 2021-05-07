
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinO,paperO,groundO;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    dustbinO = new dustbin(1200,650);
	paperO = new paper(200,450,70);
	groundO = new ground(width/2,670,width,20);
	//Create the Bodies Here.
	var render = Render.create({
		 element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false 
		} 
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  dustbinO.display();
  paperO.display();
  groundO.display();
  drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(paperO.body,paperO.body.position,{x:130,y:-145});
	 } 
	}


