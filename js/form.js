class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');

       this.question1 = createElement('h3');
      this.question2 = createElement('h3');
      this.question3 = createElement('h3');
     
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
      this.option5 = createElement('h4');
      this.option6 = createElement('h4');
      this.option7 = createElement('h4');
      this.option8 = createElement('h4');
      this.option9 = createElement('h4');
      this.option10 = createElement('h4');
      this.option11 = createElement('h4');
      this.option12 = createElement('h4');
      
      this.option1 = createButton("Option1");
      this.option2 = createButton("Option2");
      this.option3 = createButton("Option3");
      this.option4 = createButton("Option4");
      this.option5 = createButton("Option5");
      this.option6 = createButton("Option6");
      this.option7 = createButton("Option7");
      this.option8 = createButton("Option8");
      this.option9 = createButton("Option9");
      this.option10 = createButton("Option10");
      this.option11 = createButton("Option11");
      this.option12 = createButton("Option12");
    
    
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();

        
    }
    display() {
        this.title.html("COLLECT YOUR FORTUNE");
        this.title.position(350, 70);
        this.title.style('font-size', '50px');
        this.title.style('color', 'white');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(550,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {

            this.input.hide();
            this.button.hide();
        
            this.question1.html("1. What has a face and two hands but no arms or legs?");
            this.question1.style('color' , 'lavender');
            this.question1.position(150, 200);
            
            this.option1.html("a. Monitor");
            this.option1.position(150, 350);
        
            this.option2.html("b. Clock");
            this.option2.position(150, 400);
       
            this.option3.html("c. Table");
            this.option3.position(150, 450);
     
            this.option4.html("d. Bottle");
            this.option4.position(150, 500); 
    
            this.option2.mousePressed(()=>{
               this.question1.hide();
               this.option1.hide();
               this.option2.hide();
               this.option3.hide();
               this.option4.hide();
    
              this.question2.html("2. What has a Thumb and Four fingers but is not alive?");
              this.question2.style('color' , 'lavender');
              this.question2.position(150, 200);
              
              this.option5.html("a. Hand");
              this.option5.position(150, 350);
              
              this.option6.html("b. Chair");
              this.option6.position(150, 400);
              
              this.option7.html("c. Glove");
              this.option7.position(150, 450);
              
              this.option8.html("d. Clock");
              this.option8.position(150, 500); 
    
              this.option7.mousePressed(()=>{
               this.question2.hide();
               this.option5.hide();
               this.option6.hide();
               this.option7.hide();
               this.option8.hide();
    
               this.question3.html("3. What has to be broken before you can use it?");
               this.question3.style('color' , 'lavender');
               this.question3.position(150, 200);
               
               this.option9.html("a. Egg");
               this.option9.position(150, 350);
               
               this.option10.html("b. Air")
               this.option10.position(150, 400);
              
               this.option11.html("c. Coconut")
               this.option11.position(150, 450);
              
               this.option12.html("d. Comb")
               this.option12.position(150, 500);
    
               this.option9.mousePressed(()=>{
                this.question3.hide();
                this.option9.hide();
                this.option10.hide();
                this.option11.hide();
                this.option12.hide();

                  
               
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
               })

            })
        
               });
               
               
        });

        this.reset.mousePressed(() => {
        
            player.updateCount(0)
            game.update(0)
            database.ref("/").update({
               players:0,
                players:null
            })
            
        });
    }
}
