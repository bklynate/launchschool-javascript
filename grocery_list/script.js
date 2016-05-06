$(function() {
  $("form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    var item_name = $("#item", $form).val();
    var quantity = $("#quantity", $form).val();

    var item = quantity + " " + item_name;
    $("#list").append("<li>" + item + "</li>");
    $form[0].reset();
  })
});