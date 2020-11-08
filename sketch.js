const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

var paper, ground, dustbin, dustbinImg;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png")
}

function setup()
{
	var canvas = createCanvas(1366,652);
	engine = Engine.create();
	world = engine.world;

	//to add the classes here:
	ground = new Ground();
	paper = new Paper();
	bin = new Dustbin();
	Engine.run(engine);
}

function draw()
{
rectMode(CENTER);
background("#F08080");
Engine.update(engine);

ground.display();
paper.display();

image(dustbinImg,1051,414,200,200);
}

function keyPressed()
{
	if(keyCode == RIGHT_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-70})
	}
	if(keyCode == LEFT_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-60,y:-70})
	}
}