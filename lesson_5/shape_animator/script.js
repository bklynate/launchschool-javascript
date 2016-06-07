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

function resetShape($e) {
  var data = $e.data();

  $e.css({
    left: +data.start_x,
    top: +data.start_y
  });
}

function resetShapes() {
  var $shapes = $("#canvas > div");
  $shapes.each(function($s) { resetShape($s) });
}

function animateCanvas() {
  $shapes = $("#canvas > div")
  $shapes.each(animateElement);
}

function animateElement() {
  var $e = $(this);
  var data = $e.data();

  resetShape($e);

  $e.animate({
    left: data.ending_x,
    top: data.ending_y,
  }, 1000);
}

function stopAnimation() {
  $shapes = $("#canvas > div");
  $shapes.stop();
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
    stopAnimation();
  });
});