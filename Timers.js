//Function for countdown; only positive integers or 0 

function countdown(time){
    let timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }

countdown(5);


function randomGame() {
    let counter = 0;
    let pick;
    let timer = setInterval(function(){
        pick = Math.random(); 
        counter++
        if (pick > 0.75) {
            clearInterval(timer);
            console.log("It took " + counter + " try/tries.");
        }
    }, 1000)
}

randomGame();