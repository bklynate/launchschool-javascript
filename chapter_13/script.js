// function Game() { this.level = 0;
// }
// Game.prototype.play = function() {
// // player plays game here
// this.level++;
// console.log("Welcome to level " + this.level); this.unlock();
// }
// Game.prototype.unlock = function() {
//   Robot.prototype.deployLaser = function() { console.log(this.name + " is blasting you with laser beam."); }
// }
// function Robot(name, year, owner) { this.name = name;
// this.year = year;
// this.owner = owner;
// }
// var game = new Game();
// var robby = new Robot("Robby", 1956, "Dr. Morbius");
// var rosie = new Robot("Rosie", 1962, "George Jetson");
// while (game.level < 42) {
//   game.play();
// }

// robby.deployLaser();
// rosie.deployLaser();

// function Robot(name, year, owner) { this.name = name;
// this.year = year;
// this.owner = owner;
// }
// Robot.prototype.maker = "ObjectsRUs"; Robot.prototype.errorMessage = "All systems go."; Robot.prototype.reportError = function() {
// console.log(this.name + " says " + this.errorMessage); };
// Robot.prototype.spillWater = function() {
// this.errorMessage = "I appear to have a short circuit!";
// };
// var robby = new Robot("Robby", 1956, "Dr. Morbius"); var rosie = new Robot("Rosie", 1962, "George Jetson");
// rosie.reportError(); robby.reportError(); robby.spillWater(); rosie.reportError(); robby.reportError();
// console.log(robby.hasOwnProperty("errorMessage")); console.log(rosie.hasOwnProperty("errorMessage"));

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype.species = "Canine";
// Dog.prototype.bark = function() { console.log("Woof!"); }
// Dog.prototype.run = function() { console.log("Run!"); }
// Dog.prototype.wag = function() { console.log("Wag!"); }

// function ShowDog(name, breed, weight, handler) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   this.handler = handler;
// }

// ShowDog.prototype = new Dog();

// ShowDog.prototype.league = "Webville";

// ShowDog.prototype.stack = function() { console.log("Stack"); }
// ShowDog.prototype.bait = function() { console.log("Bait"); }
// ShowDog.prototype.gait = function(kind) { console.log(kind + "ing"); }
// ShowDog.prototype.groom = function() { console.log("Groom"); }

// var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

// scotty.stack();
// scotty.bark();
// scotty.groom();
// scotty.gait("Canter");

// console.log(scotty.league);
// console.log(scotty.species);

// function SpaceRobot(name, year, owner, homePlanet) {
//   this.name = name;
//   this.year = year;
//   this.owner = owner;
//   this.homePlanet = homePlanet;
// }

// SpaceRobot.prototype = new Robot();

// SpaceRobot.prototype.speak = function() {
//   alert(this.name + " says Sir, If I may venture an opinion...");
// }

// SpaceRobot.prototype.pilot = function() {
//   alert(this.name + " says Thrusters? Are they important?")
// }

// var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");

// c3po.speak();
// c3po.pilot();
// console.log(c3po.name + " was made by " + c3po.maker);

// var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");

// simon.makeCoffee();
// simon.blinkLights();
// simon.speak();

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function() { console.log("Woof!"); }
Dog.prototype.run = function() { console.log("Run!"); }
Dog.prototype.wag = function() { console.log("Wag!"); }

function ShowDog(name, breed, weight, handler) {
  Dog.call(this, name, breed, weight);
  this.handler = handler;
}

ShowDog.prototype = new Dog();

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function() { console.log("Stack"); }
ShowDog.prototype.bait = function() { console.log("Bait"); }
ShowDog.prototype.gait = function(kind) { console.log(kind + "ing"); }
ShowDog.prototype.groom = function() { console.log("Groom"); }
ShowDog.prototype.constructor = ShowDog;

var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) { console.log("Fido is a Dog"); }
if (fido instanceof ShowDog) {console.log("Fido is a ShowDog"); }

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) { console.log("Scotty is a Dog"); }
if (scotty instanceof ShowDog) {console.log("Scotty is a ShowDog"); }

console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);