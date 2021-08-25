  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var obstaclesGroup;
var invblock2;
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  ghostJumpImg = loadImage("ghost-jumping.png");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 5;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  invblock2 = createSprite(300,500,500,10)
 invblock2.visible = false;
  

}


function draw() {
  background(255);
  ghost.velocityX = 0;
  ghost.velocityY = 0;

  if (gameState === "play") {
    
    if(keyDown("LEFT_ARROW")){
  ghost.velocityX = -5;
      // write a code to move left when left arrow is pressed
    }
    if(keyDown("RIGHT_ARROW")){
  ghost.velocityX = 5;
    
      // write a code to move left when right arrow is pressed
      
    }
    //if(keyDown("space")){
  //ghost.velocityY = -5;
   //ghost.changeAnimation("jump", ghostJumpImg);
      // write a code to move up when space arrow is pressed
      
    //}
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
      if(tower.y > height ){
        tower.y = height/2;
      }
      spawnDoors();

  
      //write a code to make climbersGroup collide with ghost change the ghost velocity  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
  ghost.collide(invblock2)
if (climbersGroup.isTouching(ghost))  {
    ghost.velocityX = 0;
    ghost.velocityY = 0;
  ghost.destroy();
  gameState = "end";
}

drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
    
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //obstaclesGroup.add(door);
   // obstaclesGroup.add(climber);
    //obstaclesGroup.add(invisibleBlock);
    //add the random function
    door.x = random(200,450);
    climber.x = door.x
   invisibleBlock.x = door.x
    
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 5;
    climber.velocityY = 5;
    invisibleBlock.velocityY = 5;
    ghost.collide(invisibleBlock);

    //change the depth of the ghost and door
    door.depth = ghost.depth;
    ghost.depth = ghost.depth + 1;
     
    climber.depth = ghost.depth;
    ghost.depth = ghost.depth + 1;
    
    //assign lifetime to the obstacle.lifetime = 300; here  obstacle are door, climber and invisible block
door.lifetime = 400;
climber.lifetime = 400;
invisibleBlock.lifetime = 400;

    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
  doorsGroup.add(door);
  climbersGroup.add(climber);
  invisibleBlockGroup.add(invisibleBlock);
  
  
  }
}

