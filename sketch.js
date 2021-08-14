
var food
function preload()
{
	
  dogHappy= loadImage("images/dogImg1.png")
  dogSad= loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(800, 700);
  database= firebase.database()
  database.ref('food').on("value",readPosition)
  milk1=new Food()
  milk1.getfeedTime()
 
  dog= createSprite(700,400,50,50)
    dog.addImage(dogSad)
    dog.scale=0.2
    


        
}



function draw() {  
  background(0)

  drawSprites();
  milk1.buttons()
  milk1.milkImg()
  
 
  if (food===0){
    dog.addImage(dogHappy)
    dog.scale=0.2
  }

}
function readPosition(data){
  food= data.val()

}
function writeStock(data){
  database.ref('/').set({
    food:data
  })

}


