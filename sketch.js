
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4;
var world,boy;
var stone;
var chain;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,100,30);
	mango3=new mango(1040,100,30);
	mango4=new mango(1100,170,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Stone();

chain = new Chain(stone.body,{x:340,y:480});

	Engine.run(engine);

}

function draw() {
  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();
mango2.display();
mango3.display();
mango4.display();

  mango1.display();
stone.display();
  groundObject.display();
  chain.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	chain.fly();
}
function keyPressed(){
	Matter.Body.setPosition(stone.body,{x:340,y:480});
	chain.attach(stone.body);
}
function detectollision(stone,mango1){
	mangoBodyPosition = mango1.body.position;
	stoneBodyPosition = stone.body.position;
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=mango1.r+stone.r){
		Matter.Body.setStatic(mango1.body,position);
	}
}