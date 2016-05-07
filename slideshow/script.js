$(function() {
  $("#preview img").click(function(e) {
    var $new_img = $(this).clone().hide();
    $("#zoomed img").fadeOut();
    $new_img.appendTo("#zoomed").fadeIn();
  });
});