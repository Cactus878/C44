var imgCoin, imgRobber, imgStepCoin;
var player, coin, stepCoin;
var score = 0, steps = 15;
var tileW = 50, tileH = 50, tileMargin = 4;
function preload(){
  imgCoin = loadImage("Images/Coin.png");
  imgRobber = loadImage("Images/Robber.png");
  imgStepCoin = loadImage("Images/StepCoins.png");
  imgTile = loadImage("Images/Tile.png");
}

function setup(){
  createCanvas(500,500);

  for(var r = 0; r<6; r++){
    for(var c = 0; c<6; c++) {
      createTile(110+c*(tileW+tileMargin),150+r*(tileH+tileMargin));
    }
  }

  coin = createSprite(164,150,50,50);
  coin.addImage("coin", imgCoin);
  coin.scale = 0.45;

  stepCoin = createSprite(218,150,50,50);
  stepCoin.addImage("stepCoin", imgStepCoin);
  stepCoin.scale = 0.45;

  player = createSprite(110,150,50,50);
  player.addImage("player", imgRobber);
  player.scale = 1.2;
}

function draw() {
  background(100);

  textSize(20);
  text("Score: "+ score,200,30);
  text("Steps: "+ steps,200,50);
  
  if(keyDown(LEFT_ARROW)){
    if(player.x > 154){
      steps--;
      player.x -= 54;
    }
  }
  else if(keyDown(RIGHT_ARROW)){
    if(player.x < 354){
      steps--;
      player.x += 54;
    }
  }
  else if(keyDown(UP_ARROW)){
    if(player.y > 154){
      steps--;
      player.y -= 54;
    }
  }
  else if(keyDown(DOWN_ARROW)){
    if(player.y < 414){
      steps--;
      player.y += 54;
    }
  }
  
  drawSprites();


}

function createTile(x,y){
  var hw1 = createSprite(x,y-25,50,5);
  var hw2 = createSprite(x,y+25,50,5);
  var vw1 = createSprite(x-25,y,5,50)
  var vw1 = createSprite(x+25,y,5,50)
}