
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumpledPaper,base;
var bin;
var im;
function preload()
{
	im=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(windowWidth,windowHeight);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	base=new ground(width/2,height,width,20);
	crumpledPaper=new paper();
	binBottom=new Dustbin(850,560,180,20);  
	binLeft=new Dustbin(770,470,20,180);
	binRight=new Dustbin(930,470,20,180);

}


function draw() {
  rectMode(CENTER);
  background("orange");
   Engine.update(engine);
  crumpledPaper.display();
  imageMode(CENTER);
  image(im,850,470,160,180);
  fill("black");
  stroke("red");
  textSize(20);
  text("Use up, down, left and Right arrow keys to make the paper ball fall inside the dustbin",200,40);
  base.display();
  binLeft.display();
  binRight.display();
  binBottom.display();
  keyPressed();
  drawSprites(); 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:1,y:-8.4});
	}
	if(keyCode===DOWN_ARROW)
	{
		Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:1,y:4.5});
	}
	if(keyCode===LEFT_ARROW)
	{
		Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:-3,y:4.5});
	}
	if(keyCode===RIGHT_ARROW)
	{
		Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:3,y:4.5});
	}
}


