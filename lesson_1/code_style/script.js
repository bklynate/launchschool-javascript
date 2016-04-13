// Good!~
var book = "Head-First JavaScript Programming";

// Bad!
var Book = "Head-First JavaScript Programming";

// snake_case for regular variables
var my_number = 26
var my_string = "Double 13";
var my_array = [13, 13];
var my_object = { count: 26 };

// camelCase for variables with functions
var addValues = function(a, b) { return a + b; };

var my_object = {
  my_number: 26,
  myMethod: function() { }
};

//bad spacing
var i=0;
while(i<15){
  i+=1;
}


// good spacing
i = 0;
while (i < 15) {
  i += 1;
}

$("[name='first_name']");