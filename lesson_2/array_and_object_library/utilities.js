(function() {
  var findObj = function(element, props, multiple) {
    var match = multiple? [] : undefined;

    element.some(function(obj) {
      var all_match = true;

      for (var prop in props) {
        if (!(prop in obj) || !(props[prop] === obj[prop])) {
          all_match = false;
        }
      }

      if (all_match) {
        if (multiple) {
          match.push(obj);
        } else {
          match = obj;
          return true;
        }
      }
    });

    return match;
  };

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
      },
      findWhere: function(props) {
        return findObj(element, props, false);
      },

      where: function(props) {
        return findObj(element, props, true);
      },
      pluck: function(key) {
        var values = [];

        element.forEach(function(obj) {
          if (obj.hasOwnProperty(key)) { values.push(obj[key]); }
        });

        return values;
      },
      keys: function() {
        var keys = [];

        for (var key in element) {
          keys.push(key);
        }

        return keys;
      },
      values: function() {
        var values = [];

        for (var key in element) {
          values.push(element[key]);
        }

        return values;
      },
      pick: function() {
        var args = [].slice.call(arguments);
        var new_obj = Object.create(element);

        args.forEach( function(obj) {
          for (var prop in obj) {
            new_obj[prop] = obj[prop];
          }
        })

        return new_obj;
      },
      omit: function() {
        var args = [].slice.call(arguments);
        var new_obj = {};

        for (var prop in element) {
          if (args.indexOf(prop) === -1) {
            new_obj[prop] = element[prop];
          }
        }

        return new_obj;
      },
      has: function(prop) {
        return {}.hasOwnProperty.call(element, prop);;
      },
    };

    (["isElement", "isArray", "isObject", "isFunction", "isString", "isNumber", "isBoolean"]).forEach(function(method) {
      u[method] = function() { _[method].call(u, element) };
    });

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

  _.extend = function() {
    var args = [].slice.call(arguments);
    var old_obj = args.pop();
    var new_obj = args[args.length - 1];

    for (var prop in old_obj) {
      new_obj[prop] = old_obj[prop];
    }

    return args.length === 1 ? new_obj : _extend.apply(_, args);
  };

  _.isElement = function(obj) {
    return obj !== undefined && obj.nodeType === 1;
  };

  _.isArray = function(obj) {
    return obj !== undefined && obj.constructor === Array;
  };

  _.isObject = function(obj) {
    return obj !== undefined && (typeof obj === "object" || typeof obj === "function");
  };

  _.isFunction = function(obj) {
    return obj !== undefined && typeof obj === "function";
  };

  _.isBoolean = function(obj) {
    return obj !== undefined && (typeof obj === "boolean" || obj.constructor === Boolean);
  };

  _.isString = function(obj) {
    return obj !== undefined && (typeof obj === "string" || obj.constructor === String);
  };

  _.isNumber = function(obj) {
    return obj !== undefined && (typeof obj === "number" || obj.constructor === Number);
  };

  window._ = _;
})();