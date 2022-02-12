const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var bg,bgImg;
var snow = []
function preload(){
bgImg = loadImage("snow3.jpg");
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  //engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bgImg);  
  Engine.update(engine);
if(frameCount%5===0){
  snow.push(new Snow(random(10,989),0));
}  

for(var j = 0; j < snow.length; j++){
  snow[j].display();
}
  
}