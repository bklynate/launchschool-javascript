function NewArray() { }

NewArray.prototype = Object.getPrototypeOf([]);
NewArray.prototype.first = function() { return this[0]; }

var new_arr = new NewArray();

new_arr.push(5);

console.log(new_arr.first());

function NewPerson(name) {
  return Object.defineProperties({name: name }, {
    log: {
      value: function() {
        console.log(this.name);
      },
      writable: false
    }
  });
}

var me = NewPerson("Shane Riley");
me.log();
me.log = function() { console.log("Amanda Rose"); };
me.log();

function NewObject(name) {
  this.name = name;
  Object.freeze(this);
}

var obj = new NewObject("Nathan");

console.log(obj.name);
obj.name = "Fred";
console.log(obj.name);