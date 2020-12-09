
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boy_img;
var tree,tree_img; 
var launch = 1;
var onSling = 0;
var gameState = 0;

function preload()
{
boy_img = loadImage("pics/boy.png");
tree_img = loadImage("pics/tree.png");
}

function setup() {
	createCanvas(1100, 600);

	engine = Engine.create();
	world = engine.world;
	tree = createSprite(900,400,450,450);
	tree.addImage("tree",tree_img);
	tree.scale=0.4;
	boy = createSprite(300,400,20,20);
	boy.addImage("boy",boy_img);
	boy.scale = 0.2;
	ground = new Ground(550,600,width,20);
	mango1	= new Mango(860,300,40);
	mango2	= new Mango(900,300,40);
	mango3	= new Mango(930,280,40);
	mango4	= new Mango(1000,280,40);
	mango5	= new Mango(800,350,40);
	stone = new Stone(200,400,50);
	string = new String(stone.body,{x:200,y:300});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  drawSprites();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  string.display();
  
}

function detectCollision(Stone,Mango){
	mango = Mango.body.position
	stone = Stone.body.position

	var distance=dist(stone.y,stone.x,mango.x,mango.y)
		if (distance<=Mango.r+Stone.r)
		{
			matter.body.setStatic(Mango.body,flase);
		}
}


function mouseDragged(){
    if (gameState!==launch){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
	string.fly();
	gameState = launch
}


function keyPressed(){
    if (keyCode === 32){
       Matter.Body.setPosition(stone.body,{x:200,y:400});
        string.attach(stone.body)
        gameState = onSling;
    }
}
