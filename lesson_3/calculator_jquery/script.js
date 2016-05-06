$(function() {
  $("form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    var num_1 = +$form.find("#num_1").val();
    var num_2 = +$form.find("#num_2").val();
    var operator = $form.find("#operator").val();

    var result = calculate(operator, num_1, num_2);

    $("#result").text(result);

    function calculate(operator, num_1, num_2) {
      switch (operator) {
        case "+":
          return num_1 + num_2;
        case "-":
          return num_1 - num_2;
        case "*":
          return num_1 * num_2;
        case "/":
          return num_1 / num_2;
      }
    }
  });
});