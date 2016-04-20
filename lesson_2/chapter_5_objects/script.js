// var taxi = {
//   make: "Webville Motors",
//   model: "Taxi",
//   year: 1955,
//   color: "yellow",
//   passengers: 4,
//   convertible: false,
//   mileage: 281341
// }

// function prequal(car) {
//   if (car.mileage > 10000) {
//     return false;
//   } else if (car.year > 1960) {
//     return false;
//   }
//   return true;
// }

// var worthALook = prequal(taxi);

// if (worthALook) {
//   console.log("You gotta check out this " + taxi.make + " " + taxi.model);
// } else {
//   console.log("You should pass on the " + taxi.make + " " + taxi.model);
// }

// function getSecret(file, secretPassword) {
//   file.opened = file.opened + 1;
//   if (secretPassword == file.password) {
//     return file.contents;
//   } else {
//     return "Invalid password!";
//   }
// }

// function setSecret(file, secretPassword, secret) {
//   if (secretPassword == file.password) {
//     file.opened = 0;
//     file.contents = secret;
//   }
// }

// var superSecretFile = {
//   level: "classified",
//   opened: 0,
//   password: 2,
//   contents: "Dr. Evel's next meeting is in Detroit."
// };

// var secret = getSecret(superSecretFile, 2);
// console.log(secret);

// setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
// secret = getSecret(superSecretFile, 2);
// console.log(secret);

function makeCar() {
  var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
  var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ["red", "blue", "tan", "yellow", "white"];
  var convertible = [true, false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * convertible.length);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0,

    drive: function() {
      if (this.started) {console.log("Zoom zoom!"); }
      else { console.log("Need to start the engine first."); }
    },

    start: function() {
      this.started = true;
    },

    stop: function() {
      this.started = false;
    }
  }
  return car;
}

function displayCar(car) {
  console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}

var carToSell = makeCar();
displayCar(carToSell);

carToSell.drive();
carToSell.start();
carToSell.drive();
carToSell.stop();