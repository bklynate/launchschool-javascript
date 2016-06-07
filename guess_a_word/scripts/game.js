words = [
  "apple",
  "dog",
  "cat"
]

function Game() {
  word = words[Math.floor(Math.random() * words.length)];
}

Game.prototype.numGuesses = 0;
Game.prototype.numIncorrectGuesses = 0;
Game.prototype.numCorrectLetters = 0;
Game.prototype.guesses = [];

var game = new Game();

$(function handleKeyPress() {
  $(document).keypress(function(e) {
    var key = e.which;
    if (key >= 97 && key <= 122) {
      var char = String.fromCharCode(key);
      console.log(char);
      game.guesses.push(char);
      game.numGuesses = game.numGuesses + 1;
    }
  })
});