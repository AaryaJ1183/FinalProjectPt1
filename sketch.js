var player;
var gameState = "start";
var playButton;
var home;
function setup() {
  createCanvas(800,800);
  player = createSprite(400, 400, 20, 20);
  player.shapeColor = "green";
  playButton = createSprite(400, 300, 100,70);
  playButton.shapeColor = "yellow";
  home = createSprite(400,400,50,50);
  home.shapeColor = "green";
}

function draw() {
  background("gray");  
  drawSprites();

  if(gameState==="start"){
    textSize(30);
    fill(0,0,0);
    text("Use the arrow keys to move around", width/2- 200, 150);
     if(mousePressedOver(playButton)){
       gameState = "play";
     }
  } else if(gameState==="play"){
    player.velocityX=5;
    player.velocityY=5;
     if(keyDown("down")){
       player.velocityX=0;
       player.velocityY = 5;
     }
     if(keyDown("up")){
      player.velocityX=0;
       player.velocityY = -5;
     }
     if(keyDown("right")){
       player.velocityX = 5;
       player.velocityY=0;
     }
     if(keyDown("left")){
       player.velocityX = -5;
       player.velocityY=0;
      }
     playButton.visible=false;
  }

}