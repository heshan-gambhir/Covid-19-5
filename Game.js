class Game{
constructor(){}


getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    doctor = createSprite(200,390);
    covid19 = createSprite(500,390);
    doctor.addImage(doctor1);
    covid19.addImage(covid191);
    doctor.scale = 0.5;
    covid19.scale = 0.5;
    covid19.debug = true;
    doctor.debug = true;
}
play(){
    form.hide();
    drawSprites();
    if(keyIsDown(LEFT_ARROW) ){
      doctor.velocityX=-1
      doctor.velocityY=0
      }
      if(keyIsDown(RIGHT_ARROW)){
      doctor.velocityX=1
      doctor.velocityY=0
  
      }
      if(keyIsDown(UP_ARROW) ){
      doctor.velocityY=-2
      doctor.velocityX=0
  
      }
      if(keyIsDown(DOWN_ARROW)){
            doctor.velocityY=2
            doctor.velocityX=0
      }
  
      if(keyIsDown(65)){
          covid19.velocityX=-1
          covid19.velocityY=0
          }
          if(keyIsDown(68)){
          covid19.velocityX=1
          covid19.velocityY=0
      
          }
          if(keyIsDown(87)){
          covid19.velocityY=-2
          covid19.velocityX=0
      
          }

          if (keyIsDown(83)){
            covid19.velocityY=2
            covid19.velocityX=0
          }
      
  
      if(keyIsDown("32")){
         medicalKits = createSprite(250,450);
         medicalKits.addImage (medicalKits1);
         medicalKits.x = doctor.x;
         medicalKits.lifetime = 200;
         medicalKits.velocityX=2;
         medicalKits.velocityY=0;
         doctorScore++
      }
      game.covidScore1();
}
covidScore1(){
  if(covid19.isTouching(doctor)){
   covidScore++
   doctor.x= 200;
   doctor.y=390;
   covid19.x=500;
  covid19.y=390;

  }
}

}
