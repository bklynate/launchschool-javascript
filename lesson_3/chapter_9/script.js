// window.onload = init;

// function init() {
//   var map = document.getElementById("map");
//   map.onmousemove = showCoords;
// }

// function showCoords(eventObj) {
//   var map = document.getElementById("coords");
//   var x = eventObj.clientX;
//   var y = eventObj.clientY;
//   map.innerHTML = "Map coordinates: " + x + ", " + y;
// }

var tick = true;
function ticker() {
  if (tick) {
    console.log("Tick!");
    tick = !tick;
  } else {
    console.log("Tock!");
    tick = !tick;
  }
}

setInterval(ticker, 5000);