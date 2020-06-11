let score =[0,0] 

        function computerPlay(){
            let AIchoice = Math.floor(Math.random() * 3)
            if(AIchoice===1){
               return("rock")
            }else if(AIchoice===2){
                return("paper")
            }else return("scisors")
        }
        
const Pscore = document.querySelector('#Pscore')
const Ascore = document.querySelector('#Ascore')

       function playRound(playerSelection, computerSelection){
           console.log("you chose " + playerSelection)
           console.log("computer chose " + computerSelection)
            if(playerSelection === computerSelection){
               return "tie"
           } //sci
            else if(playerSelection === "scisors"){

                if(computerSelection === "paper") {return "win"}
                else return "loose"}
            //rock
            else if(playerSelection === "rock"){

               if(computerSelection === "paper") {return "Loose"}
               else return "win";}
            //paper
            else if(playerSelection === "paper"){

               if(computerSelection === "scisors") {return "Loose"}
               else return "win";
           }
        }

        

const buttons = document.querySelectorAll('button');  
        
        buttons.forEach((button) => {                                   //calls a game function on click
            button.addEventListener('click', (e) =>{
                game(button.id, score);
            })
        })

        

       


    function game(id, count){       
        let Pchoice = id;
        let Achoice = computerPlay();
        let result = playRound(Pchoice, Achoice);  
            if(result === "tie") console.log("tie");

                else if(result === "win"){
                    count[0]++;
                    Pscore.textContent = "Your score is:" + count[0];
                }else{
                    count[1]++;
                    Ascore.textContent = "AI score is" + count[1];
                }
                return count;
        }
           
        


 

     
     