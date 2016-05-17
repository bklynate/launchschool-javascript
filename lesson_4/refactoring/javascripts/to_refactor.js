$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass("opened");
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass("opened");
  });

  $(".button, button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next(".accordion").toggleClass("opened");
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val();
    var valid_cc_num = valid_luhn(cc_number);

    $(this).find(".success").toggle(valid_cc_num);
    $(this).find(".error").toggle(!valid_cc_num);
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var birthstones = {
      January: "garnet",
      February: "amethyst",
      March: "aquamarine or bloodstone",
      April: "diamond",
      May: "emerald",
      June: "pearl, moonstone, or alexandrite",
      July: "ruby",
      August: "peridot",
      September: "sapphire",
      October: "opal or tourmaline",
      November: "topaz or citrine",
      December: "turquoise, zircon, or tanzanite",
    };

    var month = $(this).text();

    $("#birthstone").text("Your birthstone is " + birthstones[month]);
  });
});

function valid_luhn(cc_number) {
  var odd_total = 0;
  var even_total = 0;

  cc_number = cc_number.split("").reverse();
  for (var i = 0, len = cc_number.length; i < len; i++) {
    if (i % 2 == 1) {
      cc_number[i] = (+cc_number[i] * 2) + "";
      if (cc_number[i].length > 1) {
        cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
      }
      else {
        cc_number[i] = +cc_number[i];
      }
      odd_total += cc_number[i];
    }
    else {
      even_total += +cc_number[i];
    }
  }

  return (even_total + odd_total) % 10 === 0;
}