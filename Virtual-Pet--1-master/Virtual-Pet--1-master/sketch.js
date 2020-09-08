var dog,happyDog,sadDog,database,foodS,foodStock

//Create variables here

function preload()
{
  //load images here
  sadDog=loadImage("images/dogImg.png")
 happyDog=loadImage("images/happydog.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
   dog=createSprite(200,200,10,5)
   dog.scale=0.3
 
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  writeStock();
  readStock();
  
  text ("print foodStock",50,50)
  textSize (8)
  fill ("red")
  stroke ("blue")
  drawSprites();
  }

  
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

  




