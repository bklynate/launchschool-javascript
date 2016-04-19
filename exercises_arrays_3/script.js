function oddElements(arr) {
  var result = [];
  for(var i = 1; i < arr.length; i += 2) { result.push(arr[i]); }
  return result;
}

var numbers = [0, 1, 2, 3, 4, 5, 6];
console.log(oddElements(numbers));

function oddsAndEvens(oddArr, evenArr) {
  var result = [];
  for(var i = 0; i < oddArr.length; i++) {
    if (i % 2 == 0) { result.push(evenArr[i]); }
    else { result.push(oddArr[i]); }
  }

  return result;
}

var names = ["Nathan", "Bill", "Michael", "Meredith"];

console.log(oddsAndEvens(numbers, names));

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

function sumOfArrays(arrOfArr) {
  return arrOfArr.map(function(arr) {
    return arr.reduce(function(sum, value) {
      return sum + value;
    });
  });
}

console.log(sumOfArrays([[1,2,3], [2,4,5], [6,1,3]]));