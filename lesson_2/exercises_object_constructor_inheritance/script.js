function Vehicle() { }
Vehicle.prototype.doors = 4;
Vehicle.prototype.wheels = 4;

var sedan = new Vehicle();

console.log(sedan.hasOwnProperty("doors"));

function Coupe() { }
Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;
Coupe.constructor = Coupe;

function Motorcycle() { }
Motorcycle.prototype = new Vehicle();
Motorcycle.prototype.doors = 0;
Motorcycle.prototype.wheels = 2;
Motorcycle.constructor = Motorcycle;

function Sedan() { }
Sedan.prototype = Object.create(Vehicle.prototype);

var coupe = new Coupe();
var motorcycle = new Motorcycle();
var sedan = new Sedan();

console.log(coupe);
console.log(motorcycle);

console.log(coupe instanceof Coupe);
console.log(coupe instanceof Motorcycle);
console.log(coupe instanceof Vehicle);

console.log(motorcycle instanceof Coupe);
console.log(motorcycle instanceof Motorcycle);
console.log(motorcycle instanceof Vehicle);

console.log(sedan instanceof Coupe);
console.log(sedan instanceof Motorcycle);
console.log(sedan instanceof Vehicle);
console.log(sedan instanceof Sedan);