// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];
// var solution2 = scores[2];
// alert("Solution 2 produced " + solution2 + " bubbles.");

// var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter"];
// var last = products.length - 1;
// var recent = products[last];
// console.log(recent);

// function makePhrases() {
//   var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
//   var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
//   var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

//   var rand1 = Math.floor(Math.random() * words1.length);
//   var rand2 = Math.floor(Math.random() * words1.length);
//   var rand3 = Math.floor(Math.random() * words1.length);

//   var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
//   alert(phrase);
// }

// makePhrases();

var scores = [60, 50, 60, 58, 54,
              54, 58, 50, 52, 54,
              48, 69, 34, 55, 51,
              52, 44, 51, 69, 64,
              66, 55, 52, 61, 46,
              31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var costs = [ .25, .27, .25, .25, .25, .25,
              .33, .31, .25, .29, .27, .22,
              .31, .25, .25, .33, .21, .25,
              .25, .25, .28, .25, .24, .22,
              .20, .25, .30, .25, .24, .25,
              .25, .25, .27, .25, .26, .29];

function generateReport(scores) {
  var max = printReportAndGetHighScore(scores);
  var max_solutions = getBestSolutions(scores, max);
  var costEffectiveSolution = getMostCostEffectiveSolution(scores, costs);

  console.log("Bubble tests: " + scores.length);
  console.log("Highest bubble score: " + max);
  console.log("Solutions with highest bubble score: ", max_solutions);
  console.log("Best cost effectiveness: #" + costEffectiveSolution);
}

function printReportAndGetHighScore(scores) {
  var max = 0;

  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    console.log("Bubble solution #" + i + " score: " + score);
    if (score >= max) { max = score; }
  }

  return max;
}

function getMostCostEffectiveSolution(scores, costs) {
  var bestRatioSolution = 0;
  var bestRatio = 0;
  for (var i = 0; i < scores.length; i++) {
    var ratio = scores[i] / costs[i];
    if (ratio > bestRatio) {
      bestRatioSolution = i;
      bestRatio = ratio;
    }
  }

  return bestRatioSolution;
}

function getBestSolutions(scores, max) {
  var max_solutions = []
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    if (score == max) { max_solutions.push(i); }
  }

  return max_solutions;
}

generateReport(scores);