const AnagramFinder = function (word) {
    this.word = word;
    this.wordAsLetterArray = word.toLowerCase().split('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(word=>{
        return this.isAnagram(word);
    });
}

AnagramFinder.prototype.isAnagram = function (checkedWord) {
    if(checkedWord.length !== this.word.length ||
    checkedWord === this.word){
        return false;
    }
    const checkedWordArray = checkedWord.toLowerCase().split('');
    return this.wordAsLetterArray.every(letter=>{
      return checkedWordArray.includes(letter);
    });
  }
  


module.exports = AnagramFinder;
