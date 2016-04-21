var apples = 3;
var bananas = 5;

if (apples == bananas) {
  console.log("apples == bananas!");
} else {
  console.log("Not equal");
}

bananas = "3";

if (apples == bananas) {
  console.log("apples == bananas!");
} else {
  console.log("Not equal");
}

if (apples === bananas) {
  console.log("Strict equal!");
} else {
  if (apples == bananas) {
    console.log("Equal but not same type");
  } else {
    console.log("Not equal");
  }
}

apples = 3;
bananas = 3;

var are_equal = (apples === bananas);
console.log(are_equal);

apples = 3;
bananas = undefined;
var either_or = (apples || bananas);
console.log(either_or);

bananas = 1;
either_or = (apples || bananas);
console.log(either_or);

var last_name = "Riley";
var family_message = last_name === "Riley" ? "You're part of the family" : "You're not family.";

//falsy values = false, null, undefined, 0, NaN, ''