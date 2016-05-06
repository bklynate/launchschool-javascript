$(function() {
  $("a").on("click", function(e) {
    e.preventDefault();
    $("#accordion").slideToggle();
  });

  $("form").submit(function(e) {
    key = $("input[type=text]").val();
    character_code = key.charCodeAt(0);

    $(document).off("keypress").on("keypress", function(e) {
      if (e.which !== character_code) {
        return;
      }

      e.preventDefault();
      $("#accordion").slideToggle();
    });
  });
});