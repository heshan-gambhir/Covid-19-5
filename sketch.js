var doctor1;
var doctor;
var covid19;
var covid191;
var medicalKits1;
var medicalKits;
var PPEKits;
var PPEKits1;
var backgroundImg;
var form;
var game;
var playerCount;
var gameState=0;
var database;
var player;
var OT;
var covidScore=0;
var doctorScore=0;
function preload(){
backgroundImg = loadImage("images/background.JPEG")
covid191 = loadImage("images/Covid-19.png")
doctor1 = loadImage("images/doctor.png")
medicalKits1 = loadImage("images/medical kit.png")

}

function setup(){
createCanvas(displayWidth-50,displayHeight-150)
 database = firebase.database();
 game = new Game();
 game.getState();
 game.start();
}

function draw(){
background(backgroundImg)
if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  text("Doctor: " + doctorScore,50,50)
  text("Covid19: " + covidScore,width-200,50)


}

