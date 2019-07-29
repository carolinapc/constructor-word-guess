var Letter = require("./Letter.js");

function Word(word){
    this.word = word;
    this.letters = word.split("").map(x => new Letter(x));  

    this.lettersRemaining = this.letters.length;
    
    //stores the amount of distinct letters of the word
    this.guessRemaining = 8;

    this.displayWord = () =>{
        var word = "";
        this.letters.forEach(letter => {
            word += letter.print() + " ";
        });
        return word;
    }

    this.guessLetter = (x) => {
        for (let i = 0; i < this.letters.length; i++){
            this.letters[i].checks(x);
        }
        var notGuessedLetters = this.letters.filter(x => !x.guessed);

        if (this.lettersRemaining === notGuessedLetters.length) {
            console.log("\nINCORRECT!".red);
            this.guessRemaining--;
        }
        else {
            console.log("\nCORRECT!".green);
        }

        this.lettersRemaining = notGuessedLetters.length;
        console.log(`\nLetters Remaining: ${this.lettersRemaining}`);
        console.log(`Guesses Remaining: ${this.guessRemaining}\n`);
    }
}

module.exports = Word;

