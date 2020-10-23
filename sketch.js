
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bo4,bob5;
var roof,chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	  
	
	//Create the Bodies Here.
	
	bob1 = new Bob(200,100);
	bob2 = new Bob(300,100);
	bob3 = new Bob(400,100);
	bob4 = new Bob(500,100);
	bob5 = new Bob(600,100);
	chain1 = new Rope(bob1.body,roof.body);
	chain2 = new Rope(bob2.body,roof.body);
	chain3 = new Rope(bob3.body,roof.body);
	chain4 = new Rope(bob4.body,roof.body);
	chain5 = new Rope(bob5.body,roof.body);

	roof = new Roof(400,100,400,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   roof.display();
   chain1.display();
   chain2.display();
   chain3.display();
   chain4.display();
   chain5.display();


  drawSprites();
 
}



