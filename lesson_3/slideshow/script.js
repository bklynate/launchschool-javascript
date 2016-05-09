$(function() {
  var $slideshow = $("#slideshow");
  var $nav = $slideshow.find("ul");

  $nav.on("click", "a", function(e) {
    e.preventDefault();
    var $li = $(e.currentTarget).closest("li");
    var idx = $li.index();

    $slideshow.find("figure").filter(":visible").stop().fadeOut(300);
    $slideshow.find("figure").eq(idx).stop().delay(300).fadeIn(300);

    $nav.find(".active").removeClass("active");
    $li.addClass("active");
  })
});