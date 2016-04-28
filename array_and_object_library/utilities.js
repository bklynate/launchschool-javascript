var _ = function(element) {
  var u = {
    first: function() {
      return element[0];
    },
    last: function() {
      return element[element.length - 1];
    },
    without: function(value) {
      var arr = Object.create(element);
      while (arr.indexOf(value) !== -1) {
        arr.splice(arr.indexOf(value), 1);
      }
      return arr
    },
    range: function(max, min) {
      return element.slice(min, max);
    },
  };

  return u;
}