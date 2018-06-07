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
      var input = event.key;
      
      checkGuess(input);
      checkWonGame();
      display();
    }
   
    function startGame(){
        // console.log(input);
        guesses = [];
        attemptsLeft = 10;
        // randomGame();
        // addUnknownChar();
        reset();
        document.querySelector("#guessed").innerHTML = guesses;
        document.querySelector('#unkownWord').innerHTML = underLineChar;
        document.querySelector('#guessesLeft').innerHTML = attemptsLeft;
        document.querySelector('#wins').innerHTML = wins;
    }    

    function checkGuess(guess){
      // var check = guesses.inlcude(input);
      var counter = 0;
      for(var i = 0; i < gameNameArray.length; i++){
        if(gameNameArray[i] == guess){
          underLineChar[i] = guess;
        } 
      }

      if((guesses.includes(guess) <= 0) && (gameNameArray.includes(guess) <= 0)){
        guesses.push(guess);
        attemptsLeft--;
        if(attemptsLeft == 0 ){
          startGame()
        }
      }
    }

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

    // function randomGame(){
    //   var gameName = gameLibrary[Math.floor(Math.random()*gameLibrary.length)];
    //   gameNameArray = gameName.split("");
    // }

    // // adds "_" depending on how the arrays length
    // function addUnknownChar() {
    //     underLineChar = [];

    //     for(var i=0; i < gameNameArray.length; i++){
     //      underLineChar.push("_");
     //      console.log(underLineChar);
    //  }
    // }

    function reset(){
      underLineChar = [];
      var gameName = gameLibrary[Math.floor(Math.random()*gameLibrary.length)];
      gameNameArray = gameName.split("");

      for(var i=0; i < gameNameArray.length; i++){
        underLineChar.push("_");
        console.log(underLineChar);
      }
    }
    function display(){
      document.querySelector("#guessed").innerHTML = guesses;
      document.querySelector('#unkownWord').innerHTML = underLineChar;
      document.querySelector('#guessesLeft').innerHTML = attemptsLeft;
    }