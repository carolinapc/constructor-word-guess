function Letter(letter){
    this.letter = letter.toUpperCase().trim();
    this.placeholder = "_";
    this.guessed = false;
    
    if (this.letter.trim() === "") {
        this.guessed = true;
    }

    this.print = () => this.guessed ? this.letter : this.placeholder;

    this.checks = a => {
        if (!this.guessed) {
            this.guessed = (a.toUpperCase().trim() === this.letter);    
        }
    }
}

module.exports = Letter;