//Create variables here
var dog,happyDog,sadDog, database, foodS, foodStock,fedTime,lastFed,feed,addFood,foodObj;

function preload()
{
  //load images here
  sadDog=loadImage("dogImg.png")
  happyDog=loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500,400);
  
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog = createSprite(250,300);
  dog.addImage(sadDog)
  dog.scale = 0.15

 // happyDog= createSprite(100,200);
  //happyDog.addImage(happyDogImage)

  

}


function draw() {  

  background( 46,139,87 )

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS)
    dog.addImage(happyDog)

  }
  drawSprites();

  //add styles here
  
  push();
  textSize(16);
  stroke("black");
  strokeWeight(2);
  fill("white");
  text("Note: Press UP_ARROW key to feed Milk",100,30);
  text("Food Remaining: "+foodS,170,260);
  pop();

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
} 



