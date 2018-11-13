
//arrays

var wordsToguess = ["Hermionie","Harry Potter", "Voldemort", "Snape", "Horcrux", "Gobblet", "Quidditch", "Prefect", "Hogwarts", "Ridiculous", "Wormtail", "Hagrid", "Dumbeldor", "Wizards Cup", "Ron Weasley"];
var wordChoser = [Math.floor(Math.random * wordsToguess.length)];

// Press any key to start 

    
//Need onkeyup event and listener to start game with any key
document.onkeyup = function(event){

    console.log("What am I doing?!")
    
    var start = event.key;  
    
    function chooseWord(){

        var wordChosen = [];

        


    }
        
}



// Choose random word from wordsToguess array

//Display _ _ _ _ _ for length of wordsToguess array

//Add event listeners for all letters of alphabet, listen for onkeyup and also only take one life for each letter guessed inncorrectly, ignore letter if chosen twice

//Display chosen wrong letters, lose guess for each wrong letter and subtract from total guesses left 

//display correct letters in place of _ _ _ _

//keep track of wins and losses

//have sound when word is corrrectly guessed

//have sound when word is not guessed 

//start next round after win or loss
