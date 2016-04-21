function firstInArray(arr) {
  return arr[0];
}

var arr = ["U", "S", "A"];

console.log(firstInArray(arr));

function lastInArray(arr) {
  return arr[arr.length - 1];
}

console.log(lastInArray(arr));

function arrayItem(arr, index) {
  return arr[index];
}

console.log(arrayItem(arr, 1));

var digits = [4, 8, 15, 16, 23, 42];

digits[-1] = -42;
console.log(arrayItem(digits, -1));
console.log(digits[-1]);
console.log(digits["-1"]);

function firstElements(arr, count) {
  var result = [];
  for (var i = 0; i < count; i++) { result.push(arr[i]); }
  return result;
}

console.log(firstElements(digits, 3));