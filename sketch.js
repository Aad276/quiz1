var canvas;

var question,quiz,contestant,allContestants;

var contestantCount
var gameState=0

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw(){
  if(contestantCount === 2){
    quiz.update(1);
  }
    if(gameState === 1){
    clear ()
    quiz.play()
  }
}


