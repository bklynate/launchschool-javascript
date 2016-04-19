var friends = ["Bob", "Josie", "Sam"];
var enemies = ["Bob", "Josie", "Sam"];
console.log(friends == enemies);

var friends_clone = friends;
console.log(friends == friends_clone);

function lastInArray(array) {
  return array[array.length - 1];
}

console.log(lastInArray(friends));

var names = ["Steve", "Martha", "Pat"];

function rollCall(arr) {
  for(var i = 0; i < arr.length; i++) { console.log(arr[i]); }
}

rollCall(names);

var numbers = [1, 2, 3, 4, 5];

function reverse(arr) {
  var result = [];
  for(var i = arr.length - 1; i >= 0; i--) { result.push(arr[i]); }
  return result;
}

console.log(reverse(numbers));

function find(value, arr) {
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(find(2, [1, 2, 3]));
console.log(find(9, [1, 2, 3]));

function arrToString(arr) {
  var msg = "";
  for (var i = 0; i < arr.length; i++) { msg += arr[i]; }
  return msg;
}

console.log(arrToString([1, 2, 3]));