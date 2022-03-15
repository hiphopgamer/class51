var bus,busimage
var road,roadImage



function preload(){
busImage = loadImage("bus 3.png")
roadImage = loadImage("road.jpg")
}

function setup(){
createCanvas(800,400)
//background image
road = createSprite(800,350,400,100)
road.addImage(roadImage)
road.velocityX=-4
road.scale=1.5;
 bus = createSprite(50,300,100,50)
bus.addImage(busImage)
bus.scale = 0.05 

}
function draw() {
  background("black")
 drawSprites();
 if(road.x<300){
   road.x=350;
 }
        
}
