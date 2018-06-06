    var   wins          = 0;
    var   gameLibrary   = ["pacman", "kong"];
    var   gameNameArray = [];
    var   underLineChar = [];
    var   input         = "";
    var   guesses       = [];
    var   attemptsLeft  = 10;

    startGame();
    document.querySelector('#unkownWord').innerHTML = underLineChar;
    document.querySelector("#guessed").innerHTML = guesses;
    
    document.onkeyup = function gameOn(event){
      input = event.key;
      checkGuess(input);
      checkIfSame(guesses,input);
      document.querySelector("#guessed").innerHTML = guesses;
      document.querySelector('#unkownWord').innerHTML = underLineChar;
      if(attemptsLeft > 0){
        document.querySelector('#guessesLeft').innerHTML = attemptsLeft;
        checkWonGame();
      } else if (attemptsLeft == 0){
        startGame();
      }
    } 
   
    // starts the game by finding a random array element and turning the element into an array
    function startGame(){
        // console.log(input);
        guesses = [];
        attemptsLeft = 10;
        randomGame();
        addUnknownChar();
        document.querySelector("#guessed").innerHTML = guesses;
        document.querySelector('#unkownWord').innerHTML = underLineChar;
        document.querySelector('#guessesLeft').innerHTML = attemptsLeft;
        document.querySelector('#wins').innerHTML = wins;
    }

    // this function adds the underline character depending on how long the array is
    // updates underLineChar[i] depending on guess(input variable)
    function checkGuess(guess){
         var counter = 0;
         for(var i = 0; i < gameNameArray.length; i++){
            if(guess == gameNameArray[i]){
                underLineChar[i] = guess;
            }
          } 
    }

    // this function checks if the input is anywhere else in the array
    // updates guesses[] by checking input
    function checkIfSame(guesses, input){ 
      var finder = 0;
      
      // looking at first guess 
      if (guesses.length == 1){
          if(guesses[0] != input){
            guesses.push(input);
            console.log(guesses);
          }  
      } else {
          for (var i = 0; i < guesses.length; i++){
            if(guesses[i] == input){
             finder++;
            }
          }
          if(finder == 0){
            guesses.push(input);
        } 
      }      
    }

    // this function checks if you won the game
    // if you won the game, then reset back to normal settings
    function checkWonGame(){
        var counter = 0; 
        for(var i = 0; i < underLineChar.length; i++){
            if(underLineChar[i] == gameNameArray[i]){
              counter++;
            }
        }
        if(counter == gameNameArray.length){
          document.querySelector("#wins").innerHTML = wins++;
          guesses = []
          startGame();
        } 
    }
    // finds a random element in the array gameNameArray.
    function randomGame(){
      var gameName = gameLibrary[Math.floor(Math.random()*gameLibrary.length)];
      gameNameArray = gameName.split("");
    }

    // adds "_" depending on how the arrays length
    function addUnknownChar() {
        underLineChar = [];
        for(var i=0; i < gameNameArray.length; i++){
        underLineChar.push("_");
        console.log(underLineChar);
      }
    }