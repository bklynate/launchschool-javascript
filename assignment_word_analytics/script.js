var p = "In the midway of this our mortal life, \
I found me in a gloomy wood, astray \
Gone from the path direct: and e'en to tell \
It were no easy task, how savage wild \
That forest, how robust and rough its growth, \
Which to remember only, my dismay \
Renews, in bitterness not far from death. \
Yet to discourse of what there good befell, \
All else will I relate discover'd there. \
How first I enter'd it I scarce can say, \
Such sleepy dullness in that instant weigh'd \
My senses down, when the true path I left, \
But when a mountain's foot I reach'd, where clos'd \
The valley, that had pierc'd my heart with dread, \
I look'd aloft, and saw his shoulders broad \
Already vested with that planet's beam, \
Who leads all wanderers safe through every way.";

var word_counts = {};
var words = p.replace(/[,.':]/g, "").toLowerCase().split(" ");
var most_common_word;
var total_words_count = 0;

for (var i = 0, length = words.length; i < length; i++) {
  if (word_counts[words[i]] === undefined) {
    word_counts[words[i]] = 1;
  } else {
    word_counts[words[i]] += 1;
  }
}



for (var word in word_counts) {
  if (word_counts[word] > word_counts[most_common_word] || most_common_word === undefined) {
    most_common_word = word;
  }

  total_words_count += word_counts[word];
}

console.table(word_counts);
console.log(total_words_count);
console.log(most_common_word);