var dog,sadDog,happyDog;
var foodObj, feedDog, addFood;
var database, milkBottles;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;


  foodObj = new Food();

  //Reading info for Food from DB
  


  //Creating buttons
  giveFood = createButton("Click to feed your pet");
  giveFood.position(500,100);
  giveFood.mousePressed(function(){
    var current = new Date();
    var ourTime = current.toLocaleTimeString();
    //console.log(ourTime);
    dog.addImage(happyDog);
    foodObj.updateFoodStock(foodObj.foodStock - 1);
    foodObj.updateFeedTime(ourTime);
   
    foodObj.writeFoodStock();
    foodObj.writeFeedTime();

    });
    
    
  addFood=createButton("Add Food");
  addFood.position(700,100);
  addFood.mousePressed(function(){
    foodObj.updateFoodStock(foodObj.foodStock + 1);
    foodObj.writeFoodStock();
    });

    
}

function draw() {
  background(46,139,87);
  fill("black")
    textSize(20);
  if(foodObj.foodStock <=0){
    
    text("Food is finished! Add some more", width/4, height/2 - 100)
  }

  text("Last Feed : "+ foodObj.time, width - 300,30);
  foodObj.display();
  drawSprites();
}

