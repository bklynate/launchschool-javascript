$(function() {
  var $list = $("#list");
  function addItem(item, quantity) {
    var result = quantity + " " + item;
    $("#list").append("<li>" + result + "</li>");
  }

  $("form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    var name = $("#item", $form).val();
    var quantity = $("#quantity", $form).val() || 1;

    addItem(name, quantity);
    $form[0].reset();
  })
});