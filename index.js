var Word = require("./Word.js");
var colors = require('colors');
var inquirer = require("inquirer");
var words = ["Japan","United States","Brazil","Canada","Saudi Arabia","United Kingdom","Spain","South Africa","Mexico","Italy","Germany","China"];
var word;

function startGame() {
    //get a random word
    word = new Word(words[Math.floor(Math.random() * words.length)]);

    console.log("\n===============".yellow);
    console.log("WORD GUESS GAME".yellow);
    console.log("===============".yellow);
    console.log(`${word.displayWord()}\n`);
    play();
}



function play(){
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Try to guess the Country! Type a letter:"
        }
    ]).then(resp => {
        
        word.guessLetter(resp.guess);
        console.log(`\n${word.displayWord()}\n`.yellow.bgBlack);

        if(word.guessRemaining <= 0){
            console.log(`You Lost! The word is: ${word.word}\n`.red);
            finishGame();
        }
        else if(word.lettersRemaining <= 0){
            console.log("CONGRATULATIONS! You Won!\n".green);
            finishGame();
        }
        else {
            play();
        }

    });
}

var finishGame = () => {
    inquirer.prompt([{
        type: "confirm",
        name: "confirm",
        message: "Would you like to start a new game?"
    }]).then(answer => {
        if (answer.confirm)
            startGame();
        else
            process.exit();
    })
}

startGame();


