const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paper;
var ground;

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	paper= new Paper(200,380)
	bin2= new Dustbin(980,340,10,80);
	bin3= new Dustbin(860,340,10,80);
	ground = new Ground(600,390,1200,10)
	bin1= new Dustbin(920,380,125,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  keyPressed();
  bin2.display();
  bin3.display();
  paper.display();
  ground.display();
  bin1.display();
  bin1.addImage();
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-5.5})
  }
}



