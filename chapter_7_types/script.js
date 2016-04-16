var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9 () {return "abcdef"};
var test10 = null;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);

if (99 == "99") {
  console.log("A number equals a string!");
} else {
  console.log("No way a number equals a string");
}

function findCarInLot(car) {
  for (var i = 0; i < lot.length; i++) {
    if (car === lot[i]) {
      return i;
    }
  }
  return -1;
}

var chevy = {
  make: "Chevy",
  model: "Bel Air"
};

var taxi = {
  make: "Webville Motors",
  model: "Taxi"
};

var fiat1 = {
  make: "Fiat",
  model: "500"
};

var fiat2 = {
  make: "Fiat",
  model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2];

console.log(findCarInLot(fiat2));
console.log(findCarInLot(taxi));
console.log(findCarInLot(chevy));
console.log(findCarInLot(fiat1));

var testThis;
if (testThis) {
  console.log("Success for undefined.");
}

// var element = document.getElementById("elementThatDoesntExist");
var element = null;
if (element) {
  console.log("Success for null.");
}

if (0) {
  console.log("Success for zer0.");
}

if ("") {
  console.log("True for empty string.");
}

if (NaN) {
  console.log("True for NaN");
}

function lieDetectorTest() {
  var lies = 0;

  var stolenDiamond = { };
  if (stolenDiamond) {
    console.log("You stole the diamond");
    lies++;
  }
  var car = {
    keysInPocket: null
  };
  if (car.keysInPocket) {
    console.log("Uh oh, guess you stole the car!");
  }
  if (car.emptyGasTank) {
    console.log("You drove the car after you stole it!");
    lies++;
  }
  var foundYouAtTheCrimeScene = [ ];
  if (foundYouAtTheCrimeScene) {
    console.log("A sure sign of guilt");
    lies++;
  }
  if (foundYouAtTheCrimeScene[0]) {
    console.log("Caught with a stolen item!");
    lies++;
  }
  var yourName = " ";
  if (yourName) {
    console.log("Guess you lied about your name");
    lies++;
  }
  return lies;
}

var numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
  console.log("Guilty as charged");
}

var emot = "XOxxOO";
var hugs = 0;
var kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();

for(var i = 0; i < emot.length; i++) {
  if (emot.charAt(i) === "X") {
    hugs++;
  } else if (emot.charAt(i) == "O") {
    kisses++;
  }
}

console.log(hugs + " hugs and " + kisses + " kisses.");

var name = "Jenny";
var phone = "867-5309";
var fact = "This is a prime number";
var songName = phone + "/" + name;

var index = phone.indexOf("-");
if (fact.substring(10, 15) === "prime") {
  alert(fact);
}