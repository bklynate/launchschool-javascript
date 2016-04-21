function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
}

console.log(radiansToDegrees(1));

var oneEighty = -180;
console.log(Math.abs(oneEighty));

console.log(Math.sqrt(16777216));

console.log(Math.pow(16, 6));

var a = 50.72,
    b = 49.2,
    c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

function randomInt(min, max) { return min + Math.floor(Math.random() * (max - min + 1)); }

console.log(randomInt(5, 10));