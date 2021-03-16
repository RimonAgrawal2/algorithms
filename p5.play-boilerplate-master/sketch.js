var movingrec,fixedrec,object1,object2,gameobject1,gameobject2,gameobject3;
function setup() {
  createCanvas(800,400);
  fixedrec=createSprite(400, 100, 50, 80);
  movingrec=createSprite(400,800,80,30);
  movingrec.shapeColor="green";
  fixedrec.shapeColor="green";
  movingrec.velocityY=-6;
  fixedrec.velocityY=+2;
  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor="blue";
  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor="blue";
  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor="blue";

  }
 function bounceoff(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2){
    object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);
  } 
  if(object1.y-object2.y<object2.height/2+object1.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2){
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);
  }
 }
 function istouching(object1,object2){
  object1.x=mouseX;
  object1.y=mouseY;
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&object1.y-object2.y<object2.width/2+object1.width/2&&
    object2.y-object1.y<object2.width/2+object1.width/2){
    object1.shapeColor="red";
    object2.shapeColor="red";
  }
  else{
    object1.shapeColor="blue";
    object2.shapeColor="blue";
  }
 }

function draw() {
  background(0); 
 bounceoff(movingrec,fixedrec);
  istouching(gameobject1,gameobject3);
drawSprites();
}