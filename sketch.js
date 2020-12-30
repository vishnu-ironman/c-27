
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bo5;
var roof;
var chain1, chain2,chain3,chain4,chain5;
var newton,newtonimg;
var img
function preload()
{
  newtonimg = loadAnimation("new.png");
  img = loadImage("images.png")
}

function setup() {
	createCanvas(1600, 1600);


	engine = Engine.create();
	world = engine.world;

  bob1 = new Bob(250,300,25);
  bob2 = new Bob(300,300,25);
  bob3 = new Bob(350,300,25);
  bob4 = new Bob(400,300,25);
  bob5 = new Bob(450,300,25);
  roof = new Roof(350,100,300,30);

  chain1 = new Chain(bob1.body,roof.body,-100,0);
  chain2 = new Chain(bob2.body,roof.body,-50,0);
  chain3 = new Chain(bob3.body,roof.body,-0,0);
  chain4 = new Chain(bob4.body,roof.body,+50,0);
  chain5 = new Chain(bob5.body,roof.body,+100,0);

  newton = createSprite(1000,200,20,20)
  newton.addAnimation("t",newtonimg)
	Engine.run(engine);
  
}


function draw() {

  background(img);
  
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
  fill("red");
  textSize(40)
  text("thank you vishnu for making my cradle online",20,50);
  text("press up arrow",200,400)

  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0})
  }
 
}


