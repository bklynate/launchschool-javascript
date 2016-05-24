var shapes = [];

function getFormObject($f) {
  var o = {};

  $f.serializeArray().forEach(function(input) {
    o[input["name"]] = input["value"];
  });

  return o;
}

function createElement(s) {
  var $s = $("<div />", {
    "class": s.type,
    data: s,
    css: {
      left: +s.starting_x,
      top: +s.starting_y,
    },
  });

  return $s;
}

function drawShape(s) {
  $s = createElement(s);
  $("#canvas").append($s);
}

function resetShapes() {
  var $canvas = $("#canvas");

  $canvas.empty();
  shapes.forEach(function(s) { drawShape(s); });
}

function animateCanvas() {
  resetShapes();
  $shapes = $("#canvas > div")
  $shapes.each(animateElement);
}

function animateElement() {
  var $e = $(this);
  var data = $e.data();
  $e.animate({ left: data.ending_x, top: data.ending_y });
}

$(function handleForm() {
  $("form").submit(function(e) {
    e.preventDefault();

    var $f = $(this);
    var s = getFormObject($f);

    shapes.push(s);
    drawShape(s);
  });
});

$(function handleStart() {
  $("#start").click(function(e) {
    e.preventDefault();

    animateCanvas();
  });
});

$(function handleStop() {
  $("#stop").click(function(e) {
    e.preventDefault();
    resetShapes();
  });
});