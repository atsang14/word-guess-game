    

    var   wins          = 0;
    var   gameLibrary   = ["pacman", "matrix"];
    var   gameNameArray = [];
    var   underLineChar = [];
    var   input         = "";
    var   guesses       = [];
    var   attemptsLeft  = 10;
    var   notToInclude  = ['enter', 'arrowright', 'arrowleft', 'arrowup', 'arrowleft', 'arrowdown', 'shift', 'meta'];

    startGame();
    document.querySelector('#unkownWord').innerHTML = underLineChar.join(' ');
    document.querySelector("#guessed").innerHTML = guesses.join(' ');
    
    document.onkeyup = gameOn; 

    function gameOn(event){
      var input = event.key;  
      input = input.toLowerCase();
      // This switches the screen if user presses 'Enter'
      if(input == 'enter'){
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

      // if the guess has not already been guess and
      // if the guess is not within the answer and 
      // if its one of the keys that should not be included
      // push the guess into the array called guesses which 
      // holds the previous incorrect guesses only.
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

          choseGameToPlay();
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

    // This function choses what game to play depending on what 
    // what the the correct answer was and only displays if user gets it correct
    function choseGameToPlay(){
      if(gameNameArray.join('') == 'pacman'){
            document.getElementById('matrix').style.display = 'none';
            document.getElementById('pacman').style.display = 'block';
            document.querySelector('.code-wrapper').style.width = '900px';
            document.querySelector('.game').style.left = '0px'

      } 
      else if(gameNameArray.join('') == 'matrix'){
            
            document.getElementById('pacman').style.display = 'none';
            document.getElementById('matrix').style.display = 'block';
            document.querySelector('.code-wrapper').style.width = '1079px';
            document.querySelector('.game').style.left = '91px'
      }
    }9




















