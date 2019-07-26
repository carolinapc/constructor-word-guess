function Letter(letter){
    this.letter = letter;
    this.placeholder = "_";
    this.guessed = false;

    this.print = ()=> this.guessed ? this.letter : this.placeholder;

    this.checks = a =>{
        this.guessed = (a === this.letter);
    }
}

module.exports = Letter;