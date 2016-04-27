function whatIsMyContext() {
  return this;
  // this is the window object
}

whatIsMyContext();

var my_object = {
  count: 2,
  myMethod: function() {
    return this.count;
    // this is my_object
  }
};

my_object.myMethod();

var my_object = {
  count: 1,
  my_child_object: {
    myMethod: function() {
      return this.count;
      // this is my_child_object so count is undefined
    }
  }
};

my_object.my_child_object.myMethod();

my_object.my_child_object.myMethod.call(my_object);