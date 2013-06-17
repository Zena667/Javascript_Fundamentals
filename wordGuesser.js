var wordArray = ['L', 'E', 'V', 'E', 'L'];
var dashArray = ['_', '_', '_', '_', '_'];

function guessLetter(letter) {
var goodGuess = false;
var moreToGuess = false;
  for(var x = 0; x < wordArray.length; x++) {
        if(wordArray[x] == letter) {
            dashArray[x] = letter;
            goodGuess = true;
        }    
        if (dashArray[x] == '_') {
            moreToGuess = true;
        }
  }
  if (goodGuess) {
      console.log('Congratulations on guessing correctly!');
      console.log(dashArray.join(''));
      }
      if (!moreToGuess) {
        console.log('You Won!');
      }
      else  {
        console.log('Wrong, guess again!');
      }
}
guessLetter('E');
guessLetter('D');
guessLetter('R');
guessLetter('K');
guessLetter('L');
guessLetter('X');
guessLetter('S');
console.log(x);
guessLetter('V');
           
       