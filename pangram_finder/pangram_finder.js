const PangramFinder = function (phrase) {
  this.alphabetArray = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phraseArray = phrase.toLowerCase().split(' ');
}

PangramFinder.prototype.isPangram = function () {
  const phraseLettersArray = [];
  this.phraseArray.forEach(word=>{
    const letterArray = word.split('');
    for(const letter of letterArray){
      phraseLettersArray.push(letter);
    }
  });
  return this.alphabetArray.every(letter=>{
    return phraseLettersArray.includes(letter);
  });
}

module.exports = PangramFinder;
