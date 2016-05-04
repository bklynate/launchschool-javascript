// window.onload = init;
// var cookies = {
//   instructions: "Preheat oven to 350...",
//   bake: function(time) {
//     console.log("Baking the cookies.");
//     setTimeout(done, time);
//   }
// };

// function init() {
//   var button = document.getElementById("bake");
//   button.onclick = handleButton;
// }

// function handleButton() {
//   console.log("Time to bake the cookies.");
//   cookies.bake(2500);
// }

// function done() {
//   alert("Cookies are ready, take them out to cool.");
//   console.log("Cooling the cookies.");
//   var cool = function() {
//     alert("Cookies are cool, time to eat!");
//   };
//   setTimeout(cool, 1000);
// }

// function vaccine(dosage) {
//   if (dosage > 0) {
//     inject(dosage);
//   }
// }

// administer(patient, function(dosage) {
//   if (dosage > 0) {
//     inject(dosage);
//   }
// }, time);

// function makePassword(password) {
//   return function(passwordGuess) {
//     return (passwordGuess === password);
//   }
// }

// var password = makePassword("lalala");
// console.log(password("lalala"));
// console.log(password("lalalak"));

// function multN(n) {
//   return function(x) {
//     return n * x;
//   };
// }

// var calc = multN(2);
// console.log(calc(3));

// function makeCounter() {
//   var count = 0;

//   return {
//     increment: function() {
//       count = count + 1;
//       return count;
//     }
//   };
// }

// var counter = makeCounter();

// console.log(counter.increment());
// console.log(counter.increment());

