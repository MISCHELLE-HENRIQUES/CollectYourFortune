var database;
var back_img;
var end_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1;
var players;
var obstacle;
var obstaclesGroup;
var obstacle1_img, obstacle2_img, obstacle3_img;
var treasure;
var treasureGroup;
var treasure1_img, treasure2_img, treasure3_img;
var player_img;
var CheckPoint_Sound, Die_Sound;

function preload(){
  back_img = loadImage("images/aladdin_cave2.jpg");
  end_img = loadImage("images/endBackground.jpg");
  player_img = loadImage("TreasureChest.png");
  treasure1_img = loadImage("images/cash1.png");
  treasure2_img = loadImage("images/diamonds.png");
  treasure3_img = loadImage("images/jwell.png");
  obstacle1_img = loadImage("images/sword.png");
  obstacle2_img = loadImage("images/Bomb.png");
  obstacle3_img = loadImage("images/skull.png");
  CheckPoint_Sound = loadSound("checkPoint.mp3");
  Die_Sound = loadSound("die.mp3");
  treasureGroup = new Group();
  obstaclesGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


  
}

function draw() {
  background(back_img);

  spawnTreasure();
  spawnObstacles();

   if (playerCount === 1) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) { 
    game.end();
   }


}

function spawnTreasure(){
  if (frameCount % 20 === 0) {
      treasure = createSprite(random(100, 1000), 0, 100, 100);
      treasure.velocityY = 10;
      var rand = Math.round(random(1,3));
      switch(rand){
          case 1: treasure.addImage("treasure",treasure1_img);
          break;
          case 2: treasure.addImage("treasure", treasure2_img);
          break;
          case 3: treasure.addImage("treasure", treasure3_img);
          break;
          default: break;

      }
      treasureGroup.add(treasure);
      
  }
 }

 
 function spawnObstacles(){
  if (frameCount % 40 === 0) {
      obstacle = createSprite(random(100, 1000), 0, 100, 100);
      obstacle.velocityY = 10;
      var rand = Math.round(random(1,3));
      switch(rand){
          case 1: obstacle.addImage("obstacle",obstacle1_img);
          break;
          case 2: obstacle.addImage("obstacle", obstacle2_img);
          break;
          case 3: obstacle.addImage("obstacle", obstacle3_img);
          break;
          default: break;

      }
      obstaclesGroup.add(obstacle);
      
  }
}
function reset(){
  gameState = play();
  obstaclesGroup.destroyEach();
  treasureGroup.destroyEach();
  player.score = 0;
}
