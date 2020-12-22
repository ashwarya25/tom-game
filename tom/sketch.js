var tom,tomImg;
var jerry,jerryImg;
var spike,spikeIg;
var coin,coinImg;
var climber,climberImg,climberGroup;
var cloud,cloudImg;
var bg;

function preload(){
bg=loadImage("background.png")
  tomImg=loadImage("Tom.png")
  climberImg=loadImage("climber.png")
}

function setup()
 {
  createCanvas(600,1200);

  tom= createSprite(100, 1100, 50, 50);
  tom.addImage(tomImg)
  tom.scale=0.3;
  climberGroup = createGroup();
}

function draw() {
  background(bg); 
  if (keyIsDown("space")) {
    tom.velocityY=-5;
}
spawnClimbers();
 //tom.collide(climber);

  drawSprites();
}
function spawnClimbers() {
  if (frameCount%60===0) {
      climber=createSprite(100,100,50,20);
      climber.addImage(climberImg);
      climber.x=random(50,400);
      climber.y=random(200,1000);
      climberGroup.add(climber)
  }
}
