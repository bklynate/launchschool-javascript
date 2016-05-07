$(function() {
  $(".shade, a.close_button").click(function(e) {
    $(".shade, .modal").fadeOut();
  });

  $("#team li > a").click(function(e) {
    e.preventDefault();

    $e = $(this);
    var $modal = $e.siblings(".modal");
    $modal.css("top", $(window).scrollTop() + 30)

    $e.nextAll("div").fadeIn();
  });
});