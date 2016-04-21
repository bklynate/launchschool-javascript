var me = {
  firstName: "Jane",
  lastName: "Doe"
}

var me = { };
me.firstName = "Jane";
me.lastName = "Doe";

function fullName(person) {
  console.log(person.firstName + " " + person.lastName);
}

var friend = {
  firstName: "John",
  lastName: "Smith"
}

fullName(me);
fullName(friend);

var mother = {
  firstName: "Amber",
  lastName: "Doe"
}

var father = {
  firstName: "Shane",
  lastName: "Doe"
}

var people = {
  collection: [me, friend, mother, father],

  fullName: function(person) {
    console.log(person.firstName + " " + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    this.collection.push(person);
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    return this.collection[this.getIndex(person)];
  },

  remove: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    var index = this.getIndex(person),
        leftSide, rightSide;

    if (index === -1) { return; }

    leftSide = this.collection.slice(0, index);
    rightSide = this.collection.slice(index + 1);
    this.collection = leftSide.concat(rightSide);
    console.log(index);
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    var existingPersonId = this.getIndex(person);

    if (existingPersonId === -1) { this.add(person); }
    else { this.collection[existingPersonId] = person; }
  },

  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName == person.firstName && comparator.lastName == person.lastName) {
        index = i;
      }
    });

    return index;
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== "string" || typeof person.lastName !== "string";
  }
}

people.fullName(father);
people.rollCall();

function dateSuffix(date) {
  var msg = String(date);

  if (date == 1) { msg += "st" }
  else if (date == 2) { msg += "nd" }
  else if (date == 3) { msg += "rd" }
  else { msg += "th" }

  return msg;
}