window.onload = function() {
  $("calculator").onsubmit = (function(e) {
    e.preventDefault();

    var $form = $("calculator");
    var num_1 = +$("num_1").value;
    var num_2 = +$("num_2").value;
    var operator = $("operator").value;

    var result = calculate(operator, num_1, num_2);

    $("result").innerHTML = result;

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
};

function $(id_selector) {
  return document.getElementById(id_selector);
}