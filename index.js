var Word = require("./Word.js");
var inquirer = require("inquirer");

var words = ["apple","orange","pinaple","mango","strawberry","grape","banana"];

//get a random word
var word = new Word(words[Math.floor(Math.random() * words.length)]);
console.log("\n===============");
console.log("WORD GUESS GAME");
console.log("===============");
console.log(`${word.displayWord()}\n`);

function play(){
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Try to guess the fruit! Type a letter:"
        }
    ]).then(resp => {
        
        word.guessLetter(resp.guess);
        console.log(`\n${word.displayWord()}\n`);

        if(word.guessRemaining <= 0){
            console.log(`You Lost! The word is: ${word.word}\n`);
        }
        else if(word.lettersRemaining <= 0){
            console.log("CONGRATULATIONS! You Won!\n");
        }
        else {
            play();
        }

    });
}
play();


