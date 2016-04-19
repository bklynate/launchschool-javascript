// var a = "outer";

// function testScope() {
//   var a = "inner";
//   console.log(a);
// }

// console.log(a);
// testScope();
// console.log(a);

// var a = "outer";

// function testScope() {
//   a = "inner";
//   console.log(a);
// }

// console.log(a);
// testScope();
// console.log(a);

// var basket = "empty";

// function goShopping() {
//   function shop1() {
//     basket = "tv";
//   }

//   console.log(basket);

//   function shop2() {
//     basket = "computer";
//   }

//   function shop3() {
//     var basket = "play station";
//     console.log(basket);
//   }

//   shop1();
//   shop2();
//   shop3();

//   console.log(basket);
// }

// goShopping();

// console.log(a);
// var a = 1;

// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     var a = 'hello again';
//   }
// }

// hello();
// console.log(a);

// var a = 1;

// function foo() {
//   a = 2;
//   function bar() {
//     a = 3;
//     return 4;
//   }
//   return bar();
// }

// console.log(foo());
// console.log(a);

a = "global";

console.log(a);