const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{
	
}
var paper1
function setup() {
  createCanvas(1200,400);
  rectMode(CENTER);



	engine = Engine.create();
  world = engine.world;
  
    ground=new Ground(1200,670,1200,20);
    paper1=new Paper(200,450,5,5);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();

 
}




