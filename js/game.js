    

    var   wins          = 0;
    var   gameLibrary   = ["pacman", "kong"];
    var   gameNameArray = [];
    var   underLineChar = [];
    var   input         = "";
    var   guesses       = [];
    var   attemptsLeft  = 10;
    var   notToInclude  = ['Enter', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'Shift', 'Meta'];
    // var   underLineChar = underLineChar.join(' ');

    startGame();
    document.querySelector('#unkownWord').innerHTML = underLineChar.join(' ');
    document.querySelector("#guessed").innerHTML = guesses.join(' ');
    
    document.onkeyup = gameOn; 

    function gameOn(event){
      var input = event.key;  

      if(input == 'Enter'){
        document.getElementById('rap').style.display = 'none';
        document.getElementById('wrapper1').style.display = 'block';
      }

      checkGuess(input);
      checkWonGame();
      display();
    }
    
    // This function starts a new game by setting guesses array back to nothing
    // and attemptsLeft back to 10 and calls reset() function to reset the rest 
    function startGame(){
        guesses = [];
        attemptsLeft = 10;

        reset();
        document.querySelector("#guessed").innerHTML = guesses.join(' ');
        document.querySelector('#unkownWord').innerHTML = underLineChar.join(' ');
        document.querySelector('#guessesLeft').innerHTML = attemptsLeft;
        document.querySelector('#wins').innerHTML = wins;
    }    

    // this function replaces the underLineChar 
    // and pushes guess(input) into guesses array if its not already in the array
    // it will also decrement the attemptsLeft. 
    function checkGuess(guess){
      var counter = 0;

      for(var i = 0; i < gameNameArray.length; i++){
        if(gameNameArray[i] == guess){
          underLineChar[i] = guess;
        } 
      }

      // && (notToInclude.include(guess) <= 0)
      // && (guess !== 'Enter')
      // debugger;

      if((guesses.indexOf(guess) < 0) && (gameNameArray.indexOf(guess) < 0) && (notToInclude.indexOf(guess) < 0)){
        guesses.push(guess);
        attemptsLeft--;
        if(attemptsLeft == 0 ){
          startGame()
        }
      }
    }

    // checks to see if user won the game 
    function checkWonGame(){
        var counter = 0; 
        for(var i = 0; i < underLineChar.length; i++){
            if(underLineChar[i] == gameNameArray[i]){
              counter++;
            }
        }
        if(counter == gameNameArray.length){
          document.getElementById("pacman").style.display = "block";
          document.querySelector("#wins").innerHTML = wins++;
          guesses = []
          startGame();
        } 
    }

    // this function resets the game to it's normal setting
    function reset(){
      underLineChar = [];
      var gameName = gameLibrary[Math.floor(Math.random()*gameLibrary.length)];
      gameNameArray = gameName.split("");

      for(var i=0; i < gameNameArray.length; i++){
        underLineChar.push("_");
      }
    }

    // this functin displays the variables that will change in the game.
    function display(){
      document.querySelector("#guessed").innerHTML = guesses.join(' ');
      document.querySelector('#unkownWord').innerHTML = underLineChar.join(' ');
      document.querySelector('#guessesLeft').innerHTML = attemptsLeft;
    }
























