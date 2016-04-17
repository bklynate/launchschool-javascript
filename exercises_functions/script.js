function sum(values) {
  var total = 0;
  for (i = 0; i < values.length; i ++)
  {
    total += values[i];
  }
  return total
}

function average(values) {
  return sum(values) / values.length;
}

console.log(average([1, 2, 3, 4]));

var temperatures = [1, 30, 60, 65, 70]

console.log("Average temperature: " + average(temperatures));

// function fizzBuzz(max) {
//   for (i = 0; i < max; i++) {
//     if (i % 15 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

function fizzBuzz(max) {
  for (i = 0; i < max; i++) {
    msg = "";
    if (i % 3 == 0) { msg += "Fizz"; }
    if (i % 5 == 0) { msg += "Buzz" ;}
    console.log(msg || i);
  }
}

fizzBuzz(100);

function randomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}