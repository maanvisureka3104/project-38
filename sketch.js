var dog,happyDog;
var db,foodS,foodStock;
var dogimg,happydogimg

function preload()
{
dogimg=loadImage("images/Dog.png");
happydogimg=loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  db=firebase.database();
  foodStock=db.ref("Food")
  foodStock.on("value",readStock)
  dog=addImage("dogimg")
  
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("happydog",happydogimg)
  }
  drawSprites();
  textSize(15);
  fill("black")
  text("foodStock" + foodS, 200,200)
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
  db.ef('/').update({
    Food:x
  })
}


