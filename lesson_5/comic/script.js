$(function initialAnimation() {
  console.log("Ready");
  revealDialogue();
});

$(function bindReset() {
  $reset = $("[id=reset]");
  var $blinds = $("[id^=blind");

  $reset.click(function() {
    $blinds.finish().removeAttr("style");
    revealDialogue();
  });
});

var revealDialogue = function() {
  var $blinds = $("[id^=blind");
  var speed = 500;
  var delay = 1500;
  var $blind;

  $blinds.each(function(id) {
    $blind = $blinds.eq(id);

    $blind.delay(delay * id + speed).animate({
      height: 0,
      top: "+=" + $blind.height(),
    }, speed);


  });
}