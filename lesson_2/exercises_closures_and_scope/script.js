var fruit = "apple";

function setFruitType() {
  fruit = "banana";
}

console.log(fruit);
setFruitType();
console.log(fruit);

var groceries = {
  bananas: 50,
  apples: 20
}

function getTotal(cart) {
  var total = 0;

  for (var fruit in cart) {
    total += cart[fruit];
  }

  cart.total = total;
}

getTotal(groceries);
console.log(groceries.total);

function removeLastItem(arr) {
  arr.pop();
}

var arr = [1, 2, 3];
removeLastItem(arr);
console.log(arr);

var arr = [1, 2, 3];

function average() {
  var total = 0;
  for (var value in this) {
    total += this[value];
  }

  return total / this.length;
}

console.log(average.call(arr));
console.log(average.apply(arr));

var temperatures = [53, 86, 12, 43];
var averageTemp = average.bind(temperatures);
console.log(averageTemp());

function average() {
  console.log(this);
  var total = 0;
  for (var value in this) {
    if (!isNaN(this[value])) { total += this[value]; }
  }

  return total / this.length;
}

var temperatures = [53, 86, 12, 43];
temperatures.average = average;
console.log(temperatures.average());