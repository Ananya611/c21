var wall,thickness
var bullet,speed, weight
var damage


function setup(){
  createCanvas(600,400)

  thickness = random(20,50)

wall = createSprite(550,200,thickness,360)
wall.shapeColor = "grey"
speed = random(38,300)
weight = random(30,40)
bullet = createSprite(100,150,20,20,weight)
bullet.shapeColor= "white"


}

function draw(){
  background(0)

  if(keyDown("A")){
    bullet.velocityX = speed
  }

 if(hasCollided(bullet,wall)){
   

   damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

   if(damage>10){
     wall.shapeColor = "green"
   }

   if(damage<10){
     wall.shapeColor = "red"
   }


 }

  


  drawSprites()
}







