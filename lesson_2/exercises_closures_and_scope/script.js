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

  for (fruit in cart) {
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