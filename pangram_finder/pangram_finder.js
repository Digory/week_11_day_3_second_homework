const PangramFinder = function (phrase) {
  this.alphabetArray = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phraseAsWordArray = phrase.toLowerCase().split(' ');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabetArray.every(letter=>{
    return this.getPhraseAsLettersArray().includes(letter);
  });
}

PangramFinder.prototype.getPhraseAsLettersArray = function () {
  const phraseLettersArray = [];
  this.phraseAsWordArray.forEach(word=>{
    const letterArray = word.split('');
    for(const letter of letterArray){
      phraseLettersArray.push(letter);
    }
  });
  return phraseLettersArray;
}

module.exports = PangramFinder;
