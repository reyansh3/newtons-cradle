
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,200,400,30);

	bob1=new Bob(300,480,25);
	bob2=new Bob(350,480,25);
	bob3=new Bob(400,480,25);
	bob4=new Bob(450,480,25);
	bob5=new Bob(500,480,25);
	
	rope1=new Rope(bob1.body,roof.body,-80,0);
	rope2=new Rope(bob2.body,roof.body,-40,0);
	rope3=new Rope(bob3.body,roof.body,0,0);
	rope4=new Rope(bob4.body,roof.body,40,0);
	rope5=new Rope(bob5.body,roof.body,80,0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-25,y:-25});
	}
}



