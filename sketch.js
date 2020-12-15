const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,helicopterImage,packageImage,helicopter,package;

function preload(){

	helicopterImage=loadImage("helicopter.png")
	packageImage=loadImage("package.png")

}

function setup(){

	var canvas=createCanvas(700,700)

	engine=Engine.create();
	world=engine.world;

	helicopter=createSprite(350,200,20,20)
	helicopter.addImage(helicopterImage)
	helicopter.scale=0.5
	World.add(world,helicopter)

	ground=createSprite(350,680,700,20);
	World.add(world,ground)

}

function draw(){
	
	Engine.update(engine)
	background("black")
	
	keypressed();
	spawnpackage();

	drawSprites();
}

function spawnpackage(){

	package=createSprite(350,250,10,10)
	package.addImage(packageImage)
	package.scale=0.5
}

function keypressed(){
if	(keyCode === DOWN_ARROW){

spawnpackage();

}
}