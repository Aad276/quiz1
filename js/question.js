class Question {

    constructor() {
      this.input1 = createInput("Enter your Name");
      this.input2 = createInput("Enter correct option");
      this.button1 = createButton('Submit');
      this.title = createElement('h2');
      this.question=createElement("h3")
      this.option1=createElement("h3")
      this.option2=createElement("h3")
      this.option3=createElement("h3")
      this.option4=createElement("h3")
    }
    hide(){
      this.button1.hide();
      this.input1.hide();
      this.input2.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(350,0);
      this.question.html("Question:-What starts and ends with the letter e, but has only one letter")
      this.question.position(150,80);
      this.option1.html("1: Everyone")
      this.option1.position(150,100)
      this.option2.html("2: Envelope")
      this.option2.position(150,120)

      this.input1.position(150,230)
      this.input2.position(350,230)
      this.button1.position(292,300);
     
    
  
      this.button1.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button1.hide();
        this.title.hide();

        contestant.name = this.input1.value();
        contestant.answer=this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }
  