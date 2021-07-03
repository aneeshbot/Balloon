var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var fbDatabase,v;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  fbDatabase=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  textSize(20); 

var balloonPosition=fbDatabase.ref('balloon/position')
balloonPosition.on("value",readPosition,showError);

}
function updatePosition(x,y) {
  fbDatabase.ref('balloon/position').set({
'x' :balloonPos.x+x,
'y' :balloonPos.y+y

})
}


function readPosition(data) {
balloonPos=data.val();
//balloon.x = balloonPos.x;
//balloon.y = balloonPos.y;
}


function showError() {
console.log("Error in writing to the database")


}


function update() {



}
// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
     //write code to move air balloon in left direction
     updatePosition(-10,0);
     //balloon.scale=balloon.scale -0.01;
    }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
   
    updatePosition(10,0);
   // balloon.scale=balloon.scale +0.01;
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updatePosition(0,-10);
  
    balloon.scale=balloon.scale -0.01;
  
  } 
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    updatePosition(0,10);
   
    balloon.scale=balloon.scale +0.01;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
