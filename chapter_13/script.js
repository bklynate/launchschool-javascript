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
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.handler = handler;
}

ShowDog.prototype = new Dog();

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function() { console.log("Stack"); }
ShowDog.prototype.bait = function() { console.log("Bait"); }
ShowDog.prototype.gait = function(kind) { console.log(kind + "ing"); }
ShowDog.prototype.groom = function() { console.log("Groom"); }

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

scotty.stack();
scotty.bark();
scotty.groom();
scotty.gait("Canter");

console.log(scotty.league);
console.log(scotty.species);
