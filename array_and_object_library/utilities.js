(function() {
  var _ = function(element) {
    var u = {
      first: function() {
        return element[0];
      },
      last: function() {
        return element[element.length - 1];
      },
      without: function() {
        var arr = [];
        var args = Array.prototype.slice.call(arguments);

        element.forEach(function(el) {
          if (args.indexOf(el) === -1) {
            arr.push(el);
          }
        });
        return arr;
      },

      lastIndexOf: function(search) {
        var idx = -1;

        for (var i = element.length - 1; i >= 0; i--) {
          if (element[i] === search) {
            idx = i;
            break;
          }
        }

        return idx;
      },

      sample: function(qty) {
        var samples = [];
        var arr = element.slice();
        var get = function() {
          var idx = Math.floor(Math.random() * arr.length);
          var el = arr[idx];
          arr.splice(idx, 1);
          return el;
        }

        if (qty === undefined) return get();

        for (var i = 0; i < qty; i++) {
          samples.push(get());
        }

        return samples;
      }
    };

    return u;
  };

  _.range = function(start, end) {
    var range = []
    var args = Array.prototype.slice.call(arguments);

    if (end === undefined) {
      end = start;
      start = 0;
    }

    for(var i = start; i < end; i++) {
      range.push(i);
    }

    return range;
  };

  window._ = _;
})();