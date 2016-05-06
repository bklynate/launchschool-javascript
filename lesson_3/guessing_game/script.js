var intro_message = "Guess a number from 1 to 100";
var higher_message = "My number is higher than ";
var lower_message = "My number is lower than ";
var correct_message = "You guessed it! It took you ### guesses.";

$(function() {
  var random_number;
  var guesses;
  reset();

  $("form").submit(function(e) {
    e.preventDefault();
    var guess = +$("input[type=number]").val();
    guesses = guesses + 1;

    var message = check_guess(random_number, guess)
    $("#message").text(message);
  });

  $("a").click(function(e) {
    e.preventDefault();
    reset();
  });

  function check_guess(num, guess) {
    if (num > guess) { return higher_message + guess; }
    else if (num < guess) { return lower_message + guess; }
    else {
      $("form").off("submit").submit(function(e) {
        e.preventDefault();
      });

      return correct_message.replace("###", guesses);
    }
  }

  function reset() {
    random_number = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    $("#message").text(intro_message);
    $("input[type=number]").val("");
  }
});

