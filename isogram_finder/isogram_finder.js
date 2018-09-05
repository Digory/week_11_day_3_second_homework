const IsogramFinder = function (word) {
    this.wordAsArray = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {
    const lettersObject = {};
    for(const letter of this.wordAsArray){
        if(lettersObject[letter]){
            return false;
        }else{
            lettersObject[letter] = 1;
        }
    }
    return true;
}

module.exports = IsogramFinder;
