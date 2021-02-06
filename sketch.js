
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,70,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(1200,150,30);
	mango4=new mango(900,200,30);
	mango5=new mango(980,100,30);
	mango6=new mango(1130,180,30)
    mango7=new mango(1095,130,30)
    mango8=new mango(1050,210,30)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(200,400,20)
	rope=new Rope(stone.body,{x:240,y:430})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  fill("gold")
	textSize(30)
  text("Press 'space' to play again ",350,30)
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone.display();
  rope.display();
  groundObject.display();
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  detectcollision(stone,mango6)
  detectcollision(stone,mango7)
  detectcollision(stone,mango8)

}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	rope.fly();
	
}
function detectcollision(lstone,lmango){
	stoneBodyposition=lstone.body.position
	mangoBodyposition=lmango.body.position
	
	var distance= dist(stoneBodyposition.x,stoneBodyposition.y,mangoBodyposition.x,mangoBodyposition.y)
	if(distance<=lmango.r+lstone.r){
      Matter.Body.setStatic(lmango.body,false)
	}

}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:200,y:400})
		rope.attach(stone.body)
		}
}
