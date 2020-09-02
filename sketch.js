var bullet, wall, thickness;

var speed, weight;

var bulletRight, wallLeft;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 20);
  bullet.shapeColor = "white";
  thickness = random(22,83);
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80); 
  
  
  
  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  
  if(collided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness); 


if(damage>10){

wall.shapeColor=color(255,0,0);
}

if(damage<10){

  wall.shapeColor=color(0,255,0);
  }
  


  }


  




  drawSprites();

}

function collided(bullet, wall){


  bulletRight=bullet.x+bullet.width;
  wallLeft=wall.x;

  if(bulletRight>=wallLeft){

    return true
  }
return false
}

