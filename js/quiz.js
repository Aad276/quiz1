class Quiz {
    constructor(){
  
    }
  
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
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
         question= new Question()
        question.display();
      }
      }
  
    play(){
      question.hide();
      background("yellow");
      Contestant.getContestantInfo()
      text ("Result of the quiz",340,50)

    
      if(allContestants !== undefined){
      var display_answer=230
      text ("Contestant who answered correctly are highlighted in green",130,230)

      for(var plr in allContestants ){
       var correctAns="2"
       if(correctAns === allContestants[plr].answer)
       fill ("Green")
       else
       fill("red")
     
      display_answer+=30
        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_answer)
      }
    }
  }
}