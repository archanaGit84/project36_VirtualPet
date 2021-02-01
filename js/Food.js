class Food {
    constructor(){
        this.foodStock = 10;
        this.image = loadImage("Images/Milk.png");
        this.time = "06:00:00 AM"



    }

  getFoodStock(){
    var foodRef = database.ref('Food');
    foodRef.on("value",function(data){
        this.foodStock = data.val();
        console.log(this.foodstock);
        });
    } 

    getFeedTime(){
        var timeRef = database.ref('Time');
        timeRef.on("value",function(data){
            this.time = data.val();
            console.log(this.time);
            });
     }
     
     updateFeedTime(feedTime){
        this.time = feedTime;
     }

     writeFeedTime(){

        database.ref('/').update({
        Time:this.time
        });
       
     }

    

  updateFoodStock(food){

      this.foodStock = food;

  }

  writeFoodStock(){

     database.ref('/').update({
     Food:this.foodStock
     });
    
  }

  display(){
    var x = width/6 ;
    var y = height/4;

    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x = width/6
          y = y + 50;
        }
        image(this.image,x,y,50,50);
        x = x + 50;
      }
    }
  }
  

}

    