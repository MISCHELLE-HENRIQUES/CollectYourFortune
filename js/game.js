class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
            
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    players=[player1];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                     textSize(35)
                       fill (0)
                       stroke (0)
                       text(allPlayers[plr].name,x-25,y+25)
                         
                     }
                fill("white")
                    textSize(30)
                    text("Player:"+allPlayers.player1.score,50,50 )
                 }
                
                
                 

                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }

                
                if (player.index !== null) {
                    for (var i = 0; i < treasureGroup.length; i++) {
                        if (treasureGroup.get(i).isTouching(players)) {
                            treasureGroup.get(i).destroy();
                         player.score=player.score+1
                         CheckPoint_Sound.play() 
                            player.update()
                        }
                        
                    }
                  }   

                  if (player.index !== null) {
                           for (var i = 0; i < obstaclesGroup.length; i++) {
                    if (obstaclesGroup.get(i).isTouching(players)) {
                        obstaclesGroup.get(i).destroy();
                        player.score = 0;
                        Die_Sound.play();
                    }
                    }
 
                  } if(player.score === 3){
                    background(end_img);
                    obstaclesGroup.destroyEach();
                    treasureGroup.destroyEach();
                    player_img = invisible;
                    textSize(20);
                    text("Congratulations , You Won !!");
                  }

                    drawSprites();      

    }
    end(){
       console.log("Game Ended");
    }
}
