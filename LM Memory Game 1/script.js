const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let preventClick = false;
let youWin = 0;
let chosenCard = "";

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color, "hidecolor");
    //give each div an id of (color);
    newDiv.id = color; 

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target.id);
  //3 settings that will return
  if (preventClick || event.target === chosenCard || event.target.className.includes('done')) {
    return;
  }
  event.target.classList.remove("hidecolor");
  event.target.classList.add("done")

      //if no cards been chosen; keep track of 1st card & display
    if (!chosenCard) {
      chosenCard = event.target;
    // // after choosing 1st card; check if 2nd card matches 1st card by matching id
      } else if (chosenCard){
        if (chosenCard.id === event.target.id) {
          // console.log("Match")
          chosenCard=null;
          //once all pairs are completed; variable 'youWin' should add up to 5; and a notification in the website will pop up underneath the board
          youWin++;
          if (youWin === 5) {
            document.getElementsById('youWin').innerHTML("Congratulations, you completed the memory game!")
          }
        } else {
          // console.log("NoMatch") this function will run if no match, set timeout delays by 1 second
          preventClick = true;
          setTimeout(function() {
            event.target.classList.remove('done')
            event.target.classList.add('hidecolor');
            chosenCard.classList.remove('done')
            chosenCard.classList.add('hidecolor');
            chosenCard = null;
            preventClick = false;
          }, 600)} 
          //reset chosenCard to null after each pair (for both match and no match))
    } else {
      chosenCard = null;
    }
  }


// when the DOM loads
createDivsForColors(shuffledColors);