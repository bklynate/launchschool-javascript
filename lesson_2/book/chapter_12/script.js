// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   this.bark = function() {
//     if (this.weight > 25) {
//       alert(this.name + " says Woof!");
//     } else {
//       alert(this.name + " says Yip!");
//     }
//   }
// }

// function Duck(type, canFly) {
//   this.type = type;
//   this.canFly = canFly;
// }

// var fido = new Dog("Fido", "Mixed", 30);
// var fluffy = new Dog("Fluffy", "Poodle", 30);
// var spot = new Dog("Spot", "Chihuahua", 10);
// var dogs = [fido, fluffy, spot];

// dogs.forEach(function(dog) {
//   dog.bark();
// });

// function Coffee(roast, ounces) {
//   this.roast = roast;
//   this.ounces = ounces;

//   this.getSize = function() {
//     if (this.ounces == 8) { return "small"; }
//     else if (this.ounces == 12) { return "medium"; }
//     else if (this.ounces == 16) { return "large"; }
//     return "unknown";
//   }
//   this.toString = function() {
//     return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
//   }
// }

// var cup = new Coffee("House Blend", 16);
// alert(cup.toString());

// function Car(make, model, year, color, passengers, convertible, mileage) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.passengers = passengers;
//   this.convertible = convertible;
//   this.mileage = mileage;

//   this.start = function() { this.started = true; }
//   this.stop = function() { this.started = false; }
//   this.drive = function() {
//     if (this.started) {
//       console.log(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       console.log("Start the engine first");
//     }
//   }
// }

// var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
// var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);

// var cars = [chevy, cadi];

// cars.forEach(function(car) {
//   car.start();
//   car.drive();
//   car.stop();
// });

// function Car(params) {
//   this.make = params.make;
//   this.model = params.model;
//   this.year = params.year;
//   this.color = params.color;
//   this.passengers = params.passengers;
//   this.convertible = params.convertible;
//   this.mileage = params.mileage;
//   this.started = false;

//   this.start = function() { this.started = true; }
//   this.stop = function() { this.started = false; }
//   this.drive = function() {
//     if (this.started) {
//       console.log(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       console.log("Start the engine first");
//     }
//   };
// }

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   this.bark = function() {
//     if (this.weight > 25) {
//       alert(this.name + " says Woof!");
//     } else {
//       alert(this.name + " says Yip!");
//     }
//   };
// }

// var limoParams = {
//   make: "Webville Motors",
//   model: "limo",
//   year: 1983,
//   color: "black",
//   passengers: 12,
//   convertible: true,
//   mileage: 21120
// };

// var limo = new Car(limoParams);
// var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);
// console.log(limo.make + " " + limo.model + " is a " + typeof limo); console.log(limoDog.name + " is a " + typeof limoDog);

function dogCatcher(obj) {
  return obj instanceof Dog;
}
function Cat(name, breed, weight) { this.name = name;
this.breed = breed; this.weight = weight;
}
var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);
var fido = {name: "Fido", breed: "Mixed", weight: 38};
function Dog(name, breed, weight) { this.name = name;
this.breed = breed; this.weight = weight; this.bark = function() {
if (this.weight > 25) { alert(this.name + " says Woof!");
} else {
alert(this.name + " says Yip!");
} };
}
var fluffy = new Dog("Fluffy", "Poodle", 30); var spot = new Dog("Spot", "Chihuahua", 10); var dogs = [meow, whiskers, fido, fluffy, spot];
for (var i = 0; i < dogs.length; i++) { if (dogCatcher(dogs[i])) {
console.log(dogs[i].name + " is a dog!"); }
}

