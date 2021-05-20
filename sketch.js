var dog,happyDog;
var db,foodS,foodStock;
var dogimg,happydogimg

function preload()
{
dogimg=loadImage("Dog.png");
happydogimg=loadImage("happydog.png")
}

function setup() {

  db=firebase.database();
  createCanvas(500, 500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogimg);
  dog.scale=0.15;

  foodStock=db.ref("Food")
  foodStock.on("value",readStock)
  textSize(20);
  
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogimg);
  }
  drawSprites();
  textSize(15);
  fill("black")
  text("foodStock:" + foodS, 200,200)
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
   
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  db.ref('/').update({
    Food:x
  })
}


